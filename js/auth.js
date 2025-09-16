/* ============================================
   БЕЛАРУСЬ 2025 - БЛАГОУСТРОЙСТВО
   Система аутентификации (демо-версия)
   ============================================ */

class AuthSystem {
  constructor() {
    this.currentUser = null;
    this.storageKey = 'belarus2025_users';
    this.sessionKey = 'belarus2025_session';
    this.init();
  }

  init() {
    // Проверяем сессию при загрузке
    this.checkSession();
    
    // Инициализируем хранилище пользователей, если его нет
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }

  // Хеширование пароля с использованием Web Crypto API
  async hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return this.bufferToHex(hash);
  }

  // Преобразование буфера в hex строку
  bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }

  // Регистрация нового пользователя
  async register(username, email, password, confirmPassword) {
    try {
      // Валидация
      if (!username || !email || !password || !confirmPassword) {
        throw new Error('Все поля обязательны для заполнения');
      }

      if (password.length < 6) {
        throw new Error('Пароль должен быть не менее 6 символов');
      }

      if (password !== confirmPassword) {
        throw new Error('Пароли не совпадают');
      }

      if (!this.validateEmail(email)) {
        throw new Error('Введите корректный email');
      }

      // Получаем существующих пользователей
      const users = JSON.parse(localStorage.getItem(this.storageKey) || '[]');

      // Проверяем, существует ли пользователь
      if (users.find(u => u.username === username || u.email === email)) {
        throw new Error('Пользователь с таким именем или email уже существует');
      }

      // Хешируем пароль
      const hashedPassword = await this.hashPassword(password);

      // Создаем нового пользователя
      const newUser = {
        id: this.generateId(),
        username,
        email,
        password: hashedPassword,
        createdAt: new Date().toISOString(),
        lastLogin: null
      };

      // Сохраняем пользователя
      users.push(newUser);
      localStorage.setItem(this.storageKey, JSON.stringify(users));

      // Автоматически входим после регистрации
      await this.login(username, password);

      return {
        success: true,
        message: 'Регистрация успешна',
        user: { id: newUser.id, username: newUser.username, email: newUser.email }
      };

    } catch (error) {
      return {
        success: false,
        message: error.message
      };
    }
  }

  // Вход в систему
  async login(username, password, remember = false) {
    try {
      if (!username || !password) {
        throw new Error('Введите имя пользователя и пароль');
      }

      // Получаем пользователей
      const users = JSON.parse(localStorage.getItem(this.storageKey) || '[]');

      // Ищем пользователя
      const user = users.find(u => u.username === username || u.email === username);

      if (!user) {
        throw new Error('Неверное имя пользователя или пароль');
      }

      // Проверяем пароль
      const hashedPassword = await this.hashPassword(password);
      if (user.password !== hashedPassword) {
        throw new Error('Неверное имя пользователя или пароль');
      }

      // Обновляем последний вход
      user.lastLogin = new Date().toISOString();
      const userIndex = users.findIndex(u => u.id === user.id);
      users[userIndex] = user;
      localStorage.setItem(this.storageKey, JSON.stringify(users));

      // Создаем сессию
      const session = {
        userId: user.id,
        username: user.username,
        email: user.email,
        loginTime: new Date().toISOString(),
        remember
      };

      // Сохраняем сессию
      if (remember) {
        localStorage.setItem(this.sessionKey, JSON.stringify(session));
      } else {
        sessionStorage.setItem(this.sessionKey, JSON.stringify(session));
      }

      this.currentUser = session;
      this.updateUI();

      return {
        success: true,
        message: 'Вход выполнен успешно',
        user: session
      };

    } catch (error) {
      return {
        success: false,
        message: error.message
      };
    }
  }

  // Выход из системы
  logout() {
    this.currentUser = null;
    localStorage.removeItem(this.sessionKey);
    sessionStorage.removeItem(this.sessionKey);
    this.updateUI();
    
    return {
      success: true,
      message: 'Вы вышли из системы'
    };
  }

  // Проверка сессии
  checkSession() {
    const session = localStorage.getItem(this.sessionKey) || 
                   sessionStorage.getItem(this.sessionKey);
    
    if (session) {
      try {
        this.currentUser = JSON.parse(session);
        this.updateUI();
      } catch (error) {
        console.error('Invalid session data');
        this.logout();
      }
    }
  }

  // Получение текущего пользователя
  getCurrentUser() {
    return this.currentUser;
  }

  // Проверка авторизации
  isAuthenticated() {
    return this.currentUser !== null;
  }

  // Обновление UI в зависимости от статуса авторизации
  updateUI() {
    document.addEventListener('DOMContentLoaded', () => {
      const loginBtn = document.getElementById('loginBtn');
      const registerBtn = document.getElementById('registerBtn');
      const logoutBtn = document.getElementById('logoutBtn');
      const userInfo = document.getElementById('userInfo');
      const authRequired = document.querySelectorAll('.auth-required');
      const authHidden = document.querySelectorAll('.auth-hidden');

      if (this.isAuthenticated()) {
        // Пользователь авторизован
        if (loginBtn) loginBtn.style.display = 'none';
        if (registerBtn) registerBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'block';
        if (userInfo) {
          userInfo.style.display = 'block';
          userInfo.textContent = this.currentUser.username;
        }

        // Показываем элементы, требующие авторизации
        authRequired.forEach(el => el.style.display = 'block');
        authHidden.forEach(el => el.style.display = 'none');

      } else {
        // Пользователь не авторизован
        if (loginBtn) loginBtn.style.display = 'block';
        if (registerBtn) registerBtn.style.display = 'block';
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (userInfo) userInfo.style.display = 'none';

        // Скрываем элементы, требующие авторизации
        authRequired.forEach(el => el.style.display = 'none');
        authHidden.forEach(el => el.style.display = 'block');
      }
    });
  }

  // Валидация email
  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Генерация уникального ID
  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  // Показать модальное окно входа
  showLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
      modal.classList.add('active');
      this.attachLoginHandlers();
    }
  }

  // Показать модальное окно регистрации
  showRegisterModal() {
    const modal = document.getElementById('registerModal');
    if (modal) {
      modal.classList.add('active');
      this.attachRegisterHandlers();
    }
  }

  // Закрыть модальное окно
  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
    }
  }

  // Обработчики для формы входа
  attachLoginHandlers() {
    const form = document.getElementById('loginForm');
    if (!form) return;

    form.onsubmit = async (e) => {
      e.preventDefault();
      
      const username = form.username.value;
      const password = form.password.value;
      const remember = form.remember?.checked || false;

      // Показываем индикатор загрузки
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Вход...';
      submitBtn.disabled = true;

      const result = await this.login(username, password, remember);

      submitBtn.textContent = originalText;
      submitBtn.disabled = false;

      if (result.success) {
        this.closeModal('loginModal');
        this.showNotification(result.message, 'success');
        form.reset();
      } else {
        this.showNotification(result.message, 'error');
      }
    };
  }

  // Обработчики для формы регистрации
  attachRegisterHandlers() {
    const form = document.getElementById('registerForm');
    if (!form) return;

    form.onsubmit = async (e) => {
      e.preventDefault();
      
      const username = form.username.value;
      const email = form.email.value;
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;

      // Показываем индикатор загрузки
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Регистрация...';
      submitBtn.disabled = true;

      const result = await this.register(username, email, password, confirmPassword);

      submitBtn.textContent = originalText;
      submitBtn.disabled = false;

      if (result.success) {
        this.closeModal('registerModal');
        this.showNotification(result.message, 'success');
        form.reset();
      } else {
        this.showNotification(result.message, 'error');
      }
    };
  }

  // Показать уведомление
  showNotification(message, type = 'info') {
    // Создаем элемент уведомления
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Стили для уведомления
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      padding: 15px 20px;
      border-radius: 4px;
      background-color: ${type === 'success' ? '#4CAF50' : '#f44336'};
      color: white;
      z-index: 3000;
      animation: slideIn 0.3s ease;
      max-width: 300px;
    `;

    document.body.appendChild(notification);

    // Удаляем уведомление через 3 секунды
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Создание HTML для модальных окон
  createAuthModals() {
    const modalsHTML = `
      <!-- Модальное окно входа -->
      <div id="loginModal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" data-i18n="auth.login.title">Вход в систему</h2>
            <button class="modal-close" onclick="auth.closeModal('loginModal')">&times;</button>
          </div>
          <div class="modal-body">
            <div class="demo-warning" data-i18n="auth.demo.warning">
              Это демонстрационная реализация. Для реальной эксплуатации необходим backend с безопасным хранением учётных данных.
            </div>
            <form id="loginForm">
              <div class="form-group">
                <label class="form-label" data-i18n="auth.username">Имя пользователя</label>
                <input type="text" name="username" class="form-input" required>
              </div>
              <div class="form-group">
                <label class="form-label" data-i18n="auth.password">Пароль</label>
                <input type="password" name="password" class="form-input" required>
              </div>
              <div class="form-group">
                <label>
                  <input type="checkbox" name="remember">
                  <span data-i18n="auth.remember">Запомнить меня</span>
                </label>
              </div>
              <button type="submit" class="btn" data-i18n="btn.login">Вход</button>
              <p class="mt-2">
                <span data-i18n="auth.no.account">Нет аккаунта?</span>
                <a href="#" onclick="auth.closeModal('loginModal'); auth.showRegisterModal(); return false;" data-i18n="btn.register">Регистрация</a>
              </p>
            </form>
          </div>
        </div>
      </div>

      <!-- Модальное окно регистрации -->
      <div id="registerModal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" data-i18n="auth.register.title">Регистрация</h2>
            <button class="modal-close" onclick="auth.closeModal('registerModal')">&times;</button>
          </div>
          <div class="modal-body">
            <div class="demo-warning" data-i18n="auth.demo.warning">
              Это демонстрационная реализация. Для реальной эксплуатации необходим backend с безопасным хранением учётных данных.
            </div>
            <form id="registerForm">
              <div class="form-group">
                <label class="form-label" data-i18n="auth.username">Имя пользователя</label>
                <input type="text" name="username" class="form-input" required>
              </div>
              <div class="form-group">
                <label class="form-label" data-i18n="auth.email">Email</label>
                <input type="email" name="email" class="form-input" required>
              </div>
              <div class="form-group">
                <label class="form-label" data-i18n="auth.password">Пароль</label>
                <input type="password" name="password" class="form-input" required minlength="6">
              </div>
              <div class="form-group">
                <label class="form-label" data-i18n="auth.password.confirm">Подтвердите пароль</label>
                <input type="password" name="confirmPassword" class="form-input" required minlength="6">
              </div>
              <button type="submit" class="btn" data-i18n="btn.register">Регистрация</button>
              <p class="mt-2">
                <span data-i18n="auth.have.account">Уже есть аккаунт?</span>
                <a href="#" onclick="auth.closeModal('registerModal'); auth.showLoginModal(); return false;" data-i18n="btn.login">Вход</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    `;

    // Добавляем модальные окна в body
    document.addEventListener('DOMContentLoaded', () => {
      if (!document.getElementById('loginModal')) {
        document.body.insertAdjacentHTML('beforeend', modalsHTML);
      }
    });
  }
}

// Создаем и экспортируем экземпляр
const auth = new AuthSystem();

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  auth.createAuthModals();
  auth.updateUI();
  
  // Закрытие модальных окон по клику вне их
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.classList.remove('active');
    }
  });

  // Закрытие модальных окон по Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.active').forEach(modal => {
        modal.classList.remove('active');
      });
    }
  });
});

// Для использования в других скриптах
if (typeof module !== 'undefined' && module.exports) {
  module.exports = auth;
}

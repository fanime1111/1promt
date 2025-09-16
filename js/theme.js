/* ============================================
   БЕЛАРУСЬ 2025 - БЛАГОУСТРОЙСТВО
   Система переключения темы (день/ночь)
   ============================================ */

class ThemeManager {
  constructor() {
    this.currentTheme = 'light';
    this.storageKey = 'belarus2025_theme';
    this.init();
  }

  init() {
    // Получаем сохраненную тему из localStorage
    const savedTheme = localStorage.getItem(this.storageKey);
    
    // Если тема сохранена, используем её
    if (savedTheme) {
      this.currentTheme = savedTheme;
    } else {
      // Иначе проверяем системные настройки
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.currentTheme = 'dark';
      }
    }

    // Применяем тему
    this.applyTheme(this.currentTheme);

    // Добавляем обработчики при загрузке DOM
    document.addEventListener('DOMContentLoaded', () => {
      this.attachEventHandlers();
      this.updateToggleButton();
    });

    // Слушаем изменения системной темы
    this.watchSystemTheme();
  }

  applyTheme(theme) {
    // Устанавливаем атрибут data-theme на корневой элемент
    document.documentElement.setAttribute('data-theme', theme);
    
    // Обновляем meta-тег theme-color для мобильных браузеров
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.content = theme === 'dark' ? '#1A1A1A' : '#FFFFFF';
    } else {
      // Создаем meta-тег, если его нет
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = theme === 'dark' ? '#1A1A1A' : '#FFFFFF';
      document.head.appendChild(meta);
    }

    // Сохраняем текущую тему
    this.currentTheme = theme;
    localStorage.setItem(this.storageKey, theme);

    // Вызываем событие смены темы
    this.dispatchThemeChangeEvent(theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
    this.updateToggleButton();
    
    // Добавляем анимацию переключения
    this.animateThemeChange();
  }

  attachEventHandlers() {
    // Находим все кнопки переключения темы
    const themeToggles = document.querySelectorAll('.theme-toggle, [data-theme-toggle]');
    
    themeToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleTheme();
      });
    });

    // Добавляем горячую клавишу для переключения темы (Ctrl/Cmd + Shift + L)
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }

  updateToggleButton() {
    const toggleButtons = document.querySelectorAll('.theme-toggle, [data-theme-toggle]');
    
    toggleButtons.forEach(button => {
      // Обновляем иконку
      const icon = this.currentTheme === 'light' ? '🌙' : '☀️';
      button.innerHTML = icon;
      
      // Обновляем aria-label для доступности
      const label = this.currentTheme === 'light' 
        ? 'Переключить на темную тему' 
        : 'Переключить на светлую тему';
      button.setAttribute('aria-label', label);
      
      // Обновляем title
      button.title = label;
    });
  }

  watchSystemTheme() {
    if (!window.matchMedia) return;

    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Слушаем изменения системной темы
    darkModeQuery.addEventListener('change', (e) => {
      // Только если пользователь не выбрал тему вручную
      if (!localStorage.getItem(this.storageKey)) {
        const newTheme = e.matches ? 'dark' : 'light';
        this.applyTheme(newTheme);
        this.updateToggleButton();
      }
    });
  }

  animateThemeChange() {
    // Создаем элемент для анимации перехода
    const transition = document.createElement('div');
    transition.className = 'theme-transition';
    transition.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
      background: ${this.currentTheme === 'dark' ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0)'};
      transition: background 0.5s ease;
    `;
    
    document.body.appendChild(transition);
    
    // Запускаем анимацию
    requestAnimationFrame(() => {
      transition.style.background = this.currentTheme === 'dark' 
        ? 'rgba(0,0,0,0.3)' 
        : 'rgba(255,255,255,0.3)';
    });
    
    // Удаляем элемент после анимации
    setTimeout(() => {
      transition.style.background = this.currentTheme === 'dark' 
        ? 'rgba(0,0,0,0)' 
        : 'rgba(255,255,255,0)';
      
      setTimeout(() => {
        document.body.removeChild(transition);
      }, 500);
    }, 100);
  }

  dispatchThemeChangeEvent(theme) {
    // Создаем кастомное событие для других компонентов
    const event = new CustomEvent('themechange', {
      detail: { theme },
      bubbles: true,
      cancelable: true
    });
    
    document.dispatchEvent(event);
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  setTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      this.applyTheme(theme);
      this.updateToggleButton();
    }
  }

  // Метод для сброса к системной теме
  resetToSystemTheme() {
    localStorage.removeItem(this.storageKey);
    
    const systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark' 
      : 'light';
    
    this.applyTheme(systemTheme);
    this.updateToggleButton();
  }

  // Создание CSS для плавных переходов
  injectTransitionStyles() {
    if (document.getElementById('theme-transitions')) return;

    const style = document.createElement('style');
    style.id = 'theme-transitions';
    style.textContent = `
      /* Плавные переходы при смене темы */
      * {
        transition: background-color 0.3s ease, 
                    color 0.3s ease, 
                    border-color 0.3s ease,
                    box-shadow 0.3s ease !important;
      }
      
      /* Исключаем некоторые элементы из переходов */
      .no-transition,
      .no-transition * {
        transition: none !important;
      }
      
      /* Анимация для кнопки переключения темы */
      .theme-toggle {
        transition: transform 0.3s ease, 
                    background-color 0.3s ease !important;
      }
      
      .theme-toggle:active {
        transform: rotate(180deg) scale(0.9);
      }
      
      /* Специальные стили для темной темы */
      [data-theme="dark"] img {
        opacity: 0.9;
        filter: brightness(0.9);
      }
      
      [data-theme="dark"] .hero-video {
        opacity: 0.8;
      }
      
      /* Адаптация изображений для темной темы */
      [data-theme="dark"] .adapt-dark {
        filter: invert(1) hue-rotate(180deg);
      }
      
      /* Сохраняем яркость для важных элементов */
      [data-theme="dark"] .keep-bright {
        filter: brightness(1.1);
      }
    `;
    
    document.head.appendChild(style);
  }

  // Предпочтения пользователя для автоматического переключения
  setupAutoSwitch(enableAutoSwitch = false, dayStart = 6, nightStart = 20) {
    if (!enableAutoSwitch) {
      if (this.autoSwitchInterval) {
        clearInterval(this.autoSwitchInterval);
        this.autoSwitchInterval = null;
      }
      return;
    }

    const checkTime = () => {
      const now = new Date();
      const hours = now.getHours();
      
      // Определяем, какая должна быть тема
      const shouldBeDark = hours >= nightStart || hours < dayStart;
      const targetTheme = shouldBeDark ? 'dark' : 'light';
      
      // Переключаем только если тема отличается и нет ручной настройки
      if (this.currentTheme !== targetTheme && !localStorage.getItem(this.storageKey)) {
        this.applyTheme(targetTheme);
        this.updateToggleButton();
      }
    };

    // Проверяем сразу
    checkTime();
    
    // Проверяем каждую минуту
    this.autoSwitchInterval = setInterval(checkTime, 60000);
  }
}

// Создаем и инициализируем менеджер тем
const themeManager = new ThemeManager();

// Добавляем стили переходов при загрузке
document.addEventListener('DOMContentLoaded', () => {
  themeManager.injectTransitionStyles();
});

// Экспортируем для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
  module.exports = themeManager;
}

// Глобальный доступ
window.themeManager = themeManager;

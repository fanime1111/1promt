/* ============================================
   БЕЛАРУСЬ 2025 - БЛАГОУСТРОЙСТВО
   Основная логика приложения
   ============================================ */

// Главный класс приложения
class App {
  constructor() {
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initBurgerMenu();
      this.initModals();
      this.initForms();
      this.initCarousels();
      this.initGallery();
      this.initFlipCards();
      this.initAnimations();
      this.initNewsSystem();
      this.initStatCounters();
      this.initTimeline();
      this.initLazyLoading();
      this.initSmoothScroll();
      this.initTooltips();
    });
  }

  // Бургер меню
  initBurgerMenu() {
    const burger = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    if (!burger || !mobileMenu) return;

    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Закрытие меню при клике на ссылку
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.style.overflow = '';
      });
    });

    // Закрытие меню при изменении размера окна
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        burger.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.style.overflow = '';
      }
    });
  }

  // Модальные окна
  initModals() {
    // Открытие модальных окон
    document.addEventListener('click', (e) => {
      const modalTrigger = e.target.closest('[data-modal]');
      if (modalTrigger) {
        e.preventDefault();
        const modalId = modalTrigger.getAttribute('data-modal');
        this.openModal(modalId);
      }

      // Закрытие модальных окон
      if (e.target.classList.contains('modal-close') || 
          e.target.classList.contains('modal')) {
        this.closeModal(e.target.closest('.modal'));
      }
    });

    // Закрытие по Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
          this.closeModal(activeModal);
        }
      }
    });
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Фокус на первый элемент формы
      const firstInput = modal.querySelector('input, textarea, select');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
      }
    }
  }

  closeModal(modal) {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Валидация форм
  initForms() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        if (!this.validateForm(form)) {
          e.preventDefault();
        }
      });

      // Валидация в реальном времени
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('blur', () => {
          this.validateField(input);
        });

        input.addEventListener('input', () => {
          if (input.classList.contains('error')) {
            this.validateField(input);
          }
        });
      });
    });
  }

  validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    let isValid = true;

    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Удаляем предыдущие ошибки
    field.classList.remove('error');
    const errorElement = field.parentElement.querySelector('.form-error');
    if (errorElement) {
      errorElement.remove();
    }

    // Проверка обязательных полей
    if (field.hasAttribute('required') && !value) {
      errorMessage = 'Это поле обязательно';
      isValid = false;
    }

    // Проверка email
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errorMessage = 'Введите корректный email';
        isValid = false;
      }
    }

    // Проверка минимальной длины
    if (field.hasAttribute('minlength')) {
      const minLength = parseInt(field.getAttribute('minlength'));
      if (value.length < minLength) {
        errorMessage = `Минимум ${minLength} символов`;
        isValid = false;
      }
    }

    // Проверка максимальной длины
    if (field.hasAttribute('maxlength')) {
      const maxLength = parseInt(field.getAttribute('maxlength'));
      if (value.length > maxLength) {
        errorMessage = `Максимум ${maxLength} символов`;
        isValid = false;
      }
    }

    // Отображение ошибки
    if (!isValid) {
      field.classList.add('error');
      const error = document.createElement('div');
      error.className = 'form-error';
      error.textContent = errorMessage;
      field.parentElement.appendChild(error);
    }

    return isValid;
  }

  // Карусели
  initCarousels() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
      const items = carousel.querySelector('.carousel-items');
      const prevBtn = carousel.querySelector('.carousel-prev');
      const nextBtn = carousel.querySelector('.carousel-next');
      const indicators = carousel.querySelector('.carousel-indicators');
      
      if (!items) return;

      let currentIndex = 0;
      const totalItems = items.children.length;

      const updateCarousel = () => {
        const itemWidth = items.children[0].offsetWidth;
        items.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        
        // Обновляем индикаторы
        if (indicators) {
          indicators.querySelectorAll('.indicator').forEach((ind, i) => {
            ind.classList.toggle('active', i === currentIndex);
          });
        }
      };

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + totalItems) % totalItems;
          updateCarousel();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % totalItems;
          updateCarousel();
        });
      }

      // Создаем индикаторы
      if (indicators && totalItems > 1) {
        for (let i = 0; i < totalItems; i++) {
          const indicator = document.createElement('button');
          indicator.className = 'indicator';
          if (i === 0) indicator.classList.add('active');
          indicator.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
          });
          indicators.appendChild(indicator);
        }
      }

      // Автопрокрутка
      if (carousel.hasAttribute('data-autoplay')) {
        const delay = parseInt(carousel.getAttribute('data-autoplay')) || 5000;
        setInterval(() => {
          currentIndex = (currentIndex + 1) % totalItems;
          updateCarousel();
        }, delay);
      }

      // Свайпы для мобильных
      let touchStartX = 0;
      let touchEndX = 0;

      items.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      });

      items.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      });

      const handleSwipe = () => {
        if (touchEndX < touchStartX - 50) {
          currentIndex = (currentIndex + 1) % totalItems;
          updateCarousel();
        }
        if (touchEndX > touchStartX + 50) {
          currentIndex = (currentIndex - 1 + totalItems) % totalItems;
          updateCarousel();
        }
      };
    });
  }

  // Галерея
  initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const imgAlt = item.querySelector('img').alt;
        this.openLightbox(imgSrc, imgAlt);
      });
    });
  }

  openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox active';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close">&times;</button>
        <img src="${src}" alt="${alt}">
        <div class="lightbox-caption">${alt}</div>
      </div>
    `;

    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.classList.remove('active');
        setTimeout(() => {
          document.body.removeChild(lightbox);
          document.body.style.overflow = '';
        }, 300);
      }
    });
  }

  // Flip-карточки
  initFlipCards() {
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
      // Для мобильных устройств
      if ('ontouchstart' in window) {
        card.addEventListener('click', () => {
          card.classList.toggle('flipped');
        });
      }
    });
  }

  // Анимации при скролле
  initAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animation = entry.target.getAttribute('data-animate');
          entry.target.classList.add('animated', animation);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
  }

  // Система новостей
  initNewsSystem() {
    const newsForm = document.getElementById('newsForm');
    const newsList = document.getElementById('newsList');
    const newsStorageKey = 'belarus2025_news';

    if (!newsForm || !newsList) return;

    // Загружаем существующие новости
    this.loadNews();

    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Проверяем авторизацию
      if (!auth || !auth.isAuthenticated()) {
        this.showNotification('Для добавления новостей необходимо войти в систему', 'error');
        return;
      }

      const formData = new FormData(newsForm);
      const news = {
        id: Date.now().toString(),
        title: formData.get('title'),
        content: formData.get('content'),
        author: auth.getCurrentUser().username,
        date: new Date().toISOString(),
        images: []
      };

      // Обработка изображений
      const imageInput = newsForm.querySelector('input[type="file"]');
      if (imageInput && imageInput.files.length > 0) {
        const promises = [];
        for (let i = 0; i < Math.min(imageInput.files.length, 5); i++) {
          promises.push(this.fileToDataURL(imageInput.files[i]));
        }
        
        Promise.all(promises).then(images => {
          news.images = images;
          this.saveNews(news);
          newsForm.reset();
        });
      } else {
        this.saveNews(news);
        newsForm.reset();
      }
    });
  }

  fileToDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = e => resolve(e.target.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  saveNews(news) {
    const newsStorageKey = 'belarus2025_news';
    let allNews = JSON.parse(localStorage.getItem(newsStorageKey) || '[]');
    allNews.unshift(news);
    localStorage.setItem(newsStorageKey, JSON.stringify(allNews));
    this.loadNews();
    this.showNotification('Новость успешно добавлена', 'success');
  }

  loadNews() {
    const newsStorageKey = 'belarus2025_news';
    const newsList = document.getElementById('newsList');
    if (!newsList) return;

    const allNews = JSON.parse(localStorage.getItem(newsStorageKey) || '[]');
    
    // Добавляем демо-новость, если нет других
    if (allNews.length === 0) {
      allNews.push({
        id: 'demo',
        title: 'Открытие нового парка в Минске',
        content: 'Сегодня состоялось торжественное открытие нового парка в Заводском районе Минска. Парк площадью 15 гектаров стал одним из крупнейших зеленых пространств в городе.',
        author: 'Администратор',
        date: new Date().toISOString(),
        images: []
      });
    }

    newsList.innerHTML = allNews.map(news => `
      <article class="news-item card">
        <h3 class="news-title">${news.title}</h3>
        <div class="news-meta">
          <span class="news-author">${news.author}</span>
          <span class="news-date">${new Date(news.date).toLocaleDateString()}</span>
        </div>
        <div class="news-content">${news.content}</div>
        ${news.images && news.images.length > 0 ? `
          <div class="news-images">
            ${news.images.map(img => `<img src="${img}" alt="${news.title}" class="news-image">`).join('')}
          </div>
        ` : ''}
      </article>
    `).join('');
  }

  // Счетчики статистики
  initStatCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    const animateCounter = (counter) => {
      const target = parseFloat(counter.getAttribute('data-counter'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };
      
      updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  }

  // Таймлайн
  initTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => observer.observe(item));
  }

  // Ленивая загрузка изображений
  initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  }

  // Плавная прокрутка
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = target.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Подсказки
  initTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    tooltips.forEach(element => {
      const tooltipText = element.getAttribute('data-tooltip');
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = tooltipText;
      
      element.addEventListener('mouseenter', () => {
        document.body.appendChild(tooltip);
        const rect = element.getBoundingClientRect();
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 5}px`;
        tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
        tooltip.classList.add('visible');
      });
      
      element.addEventListener('mouseleave', () => {
        tooltip.classList.remove('visible');
        setTimeout(() => {
          if (document.body.contains(tooltip)) {
            document.body.removeChild(tooltip);
          }
        }, 300);
      });
    });
  }

  // Уведомления
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('visible');
    }, 10);
    
    setTimeout(() => {
      notification.classList.remove('visible');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }
}

// Инициализация приложения
const app = new App();

// Экспорт для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
  module.exports = app;
}

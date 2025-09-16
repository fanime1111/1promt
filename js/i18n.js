/* ============================================
   БЕЛАРУСЬ 2025 - БЛАГОУСТРОЙСТВО
   Система интернационализации (i18n)
   ============================================ */

// Объект с переводами
const translations = {
  ru: {
    // Общие элементы
    'site.title': 'Беларусь 2025',
    'site.subtitle': 'Благоустройство',
    
    // Навигация
    'nav.home': 'Главная',
    'nav.about': 'О сайте',
    'nav.projects': 'Проекты',
    'nav.news': 'Новости',
    'nav.gallery': 'Галерея',
    'nav.awards': 'Достижения',
    'nav.liberation': '80 лет победы',
    'nav.timeline': 'Лента времени',
    
    // Кнопки
    'btn.login': 'Вход',
    'btn.register': 'Регистрация',
    'btn.logout': 'Выход',
    'btn.submit': 'Отправить',
    'btn.cancel': 'Отмена',
    'btn.close': 'Закрыть',
    'btn.save': 'Сохранить',
    'btn.add': 'Добавить',
    'btn.edit': 'Редактировать',
    'btn.delete': 'Удалить',
    'btn.more': 'Показать ещё',
    
    // Главная страница
    'hero.title': 'Беларусь 2025: Благоустройство',
    'hero.subtitle': 'Современные города, комфортная среда, сохранение наследия',
    'home.projects.title': 'Наши проекты',
    'home.projects.infrastructure': 'Инфраструктура',
    'home.projects.ecology': 'Экология',
    'home.projects.social': 'Социальная сфера',
    'home.projects.digital': 'Цифровизация',
    'home.projects.culture': 'Культура',
    'home.projects.sport': 'Спорт',
    
    // О проекте
    'about.title': 'О проекте',
    'about.info.title': 'Информация о проекте',
    'about.info.text': 'Проект «Беларусь 2025 — Благоустройство» направлен на комплексное развитие городской среды, создание комфортных условий для жизни граждан и сохранение культурного наследия нашей страны.',
    'about.goal.title': 'Цель проекта',
    'about.goal.text': 'Создание современной, удобной и экологичной городской среды, которая будет способствовать повышению качества жизни белорусов и развитию экономики страны.',
    'about.features.title': 'Особенности платформы',
    'about.features.simple': 'Простота и понятность',
    'about.features.modern': 'Современный дизайн',
    'about.features.adaptive': 'Адаптивность',
    'about.features.bilingual': 'Двуязычность',
    'about.features.darkmode': 'Тёмная тема',
    'about.features.interactive': 'Интерактивность',
    
    // Проекты
    'projects.title': 'Проекты развития Беларуси 2025',
    'projects.stats.jobs': 'Новых рабочих мест',
    'projects.stats.housing': 'млн кв. м жилья',
    'projects.stats.satisfaction': 'Удовлетворенность граждан',
    'projects.infrastructure.title': 'Инфраструктура',
    'projects.infrastructure.roads': 'Строительство и ремонт дорог',
    'projects.infrastructure.transport': 'Развитие общественного транспорта',
    'projects.infrastructure.utilities': 'Модернизация коммунальных сетей',
    'projects.ecology.title': 'Экология и озеленение',
    'projects.ecology.parks': 'Создание новых парков и скверов',
    'projects.ecology.cleaning': 'Очистка водоёмов',
    'projects.ecology.waste': 'Раздельный сбор мусора',
    'projects.social.title': 'Социальная сфера',
    'projects.social.schools': 'Строительство школ и детских садов',
    'projects.social.hospitals': 'Модернизация больниц',
    'projects.social.sports': 'Спортивные площадки',
    'projects.digital.title': 'Цифровизация',
    'projects.digital.smart': 'Умный город',
    'projects.digital.services': 'Электронные госуслуги',
    'projects.digital.internet': 'Высокоскоростной интернет',
    'projects.milestones.title': 'Ключевые вехи 2025',
    
    // Новости
    'news.title': 'Новости программы',
    'news.add.title': 'Добавить новость',
    'news.add.headline': 'Заголовок',
    'news.add.content': 'Содержание',
    'news.add.photo': 'Фотографии',
    'news.add.maxHeadline': 'Максимум 50 символов',
    'news.add.maxContent': 'Максимум 1000 символов',
    'news.add.maxPhotos': 'До 5 изображений',
    'news.login.required': 'Для добавления новостей необходимо войти в систему',
    
    // Галерея
    'gallery.title': 'Галерея проектов',
    'gallery.card.hover': 'Наведите для информации',
    'gallery.card.tap': 'Нажмите для информации',
    
    // Достижения
    'awards.title': 'Наши достижения',
    'awards.modal.title': 'Подробная информация',
    
    // 80 лет победы
    'liberation.title': '80 лет Победы',
    'liberation.subtitle': '1945 - 2025',
    'liberation.text': '80 лет Победы — символ мужества, стойкости и единства белорусского народа в борьбе за свободу и независимость.',
    'liberation.years': 'лет Победы',
    'liberation.year': 'год Победы',
    'liberation.may': 'мая',
    'liberation.timeline.title': 'Хронология освобождения',
    'liberation.timeline.1941': '22 июня 1941 - Начало Великой Отечественной войны',
    'liberation.timeline.1944june': '23 июня 1944 - Начало операции «Багратион»',
    'liberation.timeline.1944july': '3 июля 1944 - Освобождение Минска',
    'liberation.timeline.1945': '9 мая 1945 - День Победы',
    'liberation.heroes.title': 'Герои освобождения',
    'liberation.heroes.soldiers': 'Советские солдаты',
    'liberation.heroes.soldiers.text': 'Мужество и героизм советских воинов стали решающим фактором в освобождении Беларуси',
    'liberation.heroes.partisans': 'Партизаны',
    'liberation.heroes.partisans.text': 'Партизанское движение в Беларуси было одним из самых массовых в Европе',
    'liberation.heroes.civilians': 'Мирные жители',
    'liberation.heroes.civilians.text': 'Несмотря на тяжелейшие условия оккупации, белорусы сохранили веру в победу',
    'liberation.heroes.unity': 'Единство народа',
    'liberation.heroes.unity.text': 'Только вместе, плечом к плечу, мы смогли победить фашизм',
    'liberation.gallery.title': 'Галерея памяти',
    'liberation.gallery.all': 'Все фото',
    'liberation.gallery.celebration': 'Празднование',
    'liberation.gallery.memorials': 'Мемориалы',
    'liberation.gallery.historical': 'Исторические кадры',
    'liberation.gallery.more': 'Показать ещё фотографии',
    
    // Формы аутентификации
    'auth.login.title': 'Вход в систему',
    'auth.register.title': 'Регистрация',
    'auth.username': 'Имя пользователя',
    'auth.email': 'Email',
    'auth.password': 'Пароль',
    'auth.password.confirm': 'Подтвердите пароль',
    'auth.remember': 'Запомнить меня',
    'auth.forgot': 'Забыли пароль?',
    'auth.no.account': 'Нет аккаунта?',
    'auth.have.account': 'Уже есть аккаунт?',
    'auth.demo.warning': 'Это демонстрационная реализация. Для реальной эксплуатации необходим backend с безопасным хранением учётных данных.',
    
    // Сообщения об ошибках
    'error.required': 'Это поле обязательно',
    'error.email': 'Введите корректный email',
    'error.password.length': 'Пароль должен быть не менее 6 символов',
    'error.password.match': 'Пароли не совпадают',
    'error.login.failed': 'Неверное имя пользователя или пароль',
    'error.register.exists': 'Пользователь с таким именем уже существует',
    
    // Футер
    'footer.copyright': '© 2025 Беларусь 2025 - Благоустройство. Все права защищены.',
    'footer.contacts': 'Контакты',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования'
  },
  
  by: {
    // Агульныя элементы
    'site.title': 'Беларусь 2025',
    'site.subtitle': 'Добраўпарадкаванне',
    
    // Навігацыя
    'nav.home': 'Галоўная',
    'nav.about': 'Пра сайт',
    'nav.projects': 'Праекты',
    'nav.news': 'Навіны',
    'nav.gallery': 'Галерэя',
    'nav.awards': 'Дасягненні',
    'nav.liberation': '80 гадоў перамогі',
    'nav.timeline': 'Стужка часу',
    
    // Кнопкі
    'btn.login': 'Уваход',
    'btn.register': 'Рэгістрацыя',
    'btn.logout': 'Выхад',
    'btn.submit': 'Адправіць',
    'btn.cancel': 'Адмена',
    'btn.close': 'Зачыніць',
    'btn.save': 'Захаваць',
    'btn.add': 'Дадаць',
    'btn.edit': 'Рэдагаваць',
    'btn.delete': 'Выдаліць',
    'btn.more': 'Паказаць яшчэ',
    
    // Галоўная старонка
    'hero.title': 'Беларусь 2025: Добраўпарадкаванне',
    'hero.subtitle': 'Сучасныя гарады, камфортнае асяроддзе, захаванне спадчыны',
    'home.projects.title': 'Нашы праекты',
    'home.projects.infrastructure': 'Інфраструктура',
    'home.projects.ecology': 'Экалогія',
    'home.projects.social': 'Сацыяльная сфера',
    'home.projects.digital': 'Лічбавізацыя',
    'home.projects.culture': 'Культура',
    'home.projects.sport': 'Спорт',
    
    // Пра праект
    'about.title': 'Пра праект',
    'about.info.title': 'Інфармацыя пра праект',
    'about.info.text': 'Праект «Беларусь 2025 — Добраўпарадкаванне» накіраваны на комплекснае развіццё гарадскога асяроддзя, стварэнне камфортных умоў для жыцця грамадзян і захаванне культурнай спадчыны нашай краіны.',
    'about.goal.title': 'Мэта праекта',
    'about.goal.text': 'Стварэнне сучаснага, зручнага і экалагічнага гарадскога асяроддзя, якое будзе спрыяць павышэнню якасці жыцця беларусаў і развіццю эканомікі краіны.',
    'about.features.title': 'Асаблівасці платформы',
    'about.features.simple': 'Прастата і зразумеласць',
    'about.features.modern': 'Сучасны дызайн',
    'about.features.adaptive': 'Адаптыўнасць',
    'about.features.bilingual': 'Двухмоўнасць',
    'about.features.darkmode': 'Цёмная тэма',
    'about.features.interactive': 'Інтэрактыўнасць',
    
    // Праекты
    'projects.title': 'Праекты развіцця Беларусі 2025',
    'projects.stats.jobs': 'Новых працоўных месцаў',
    'projects.stats.housing': 'млн кв. м жылля',
    'projects.stats.satisfaction': 'Задаволенасць грамадзян',
    'projects.infrastructure.title': 'Інфраструктура',
    'projects.infrastructure.roads': 'Будаўніцтва і рамонт дарог',
    'projects.infrastructure.transport': 'Развіццё грамадскага транспарту',
    'projects.infrastructure.utilities': 'Мадэрнізацыя камунальных сетак',
    'projects.ecology.title': 'Экалогія і азеляненне',
    'projects.ecology.parks': 'Стварэнне новых паркаў і скверов',
    'projects.ecology.cleaning': 'Ачыстка вадаёмаў',
    'projects.ecology.waste': 'Раздзельны збор смецця',
    'projects.social.title': 'Сацыяльная сфера',
    'projects.social.schools': 'Будаўніцтва школ і дзіцячых садоў',
    'projects.social.hospitals': 'Мадэрнізацыя бальніц',
    'projects.social.sports': 'Спартыўныя пляцоўкі',
    'projects.digital.title': 'Лічбавізацыя',
    'projects.digital.smart': 'Разумны горад',
    'projects.digital.services': 'Электронныя дзяржпаслугі',
    'projects.digital.internet': 'Высокахуткасны інтэрнэт',
    'projects.milestones.title': 'Ключавыя вехі 2025',
    
    // Навіны
    'news.title': 'Навіны праграмы',
    'news.add.title': 'Дадаць навіну',
    'news.add.headline': 'Загаловак',
    'news.add.content': 'Змест',
    'news.add.photo': 'Фатаграфіі',
    'news.add.maxHeadline': 'Максімум 50 сімвалаў',
    'news.add.maxContent': 'Максімум 1000 сімвалаў',
    'news.add.maxPhotos': 'Да 5 выяў',
    'news.login.required': 'Для дадання навін неабходна ўвайсці ў сістэму',
    
    // Галерэя
    'gallery.title': 'Галерэя праектаў',
    'gallery.card.hover': 'Навядзіце для інфармацыі',
    'gallery.card.tap': 'Націсніце для інфармацыі',
    
    // Дасягненні
    'awards.title': 'Нашы дасягненні',
    'awards.modal.title': 'Падрабязная інфармацыя',
    
    // 80 гадоў перамогі
    'liberation.title': '80 гадоў Перамогі',
    'liberation.subtitle': '1945 - 2025',
    'liberation.text': '80 гадоў Перамогі — сімвал мужнасці, стойкасці і адзінства беларускага народа ў барацьбе за свабоду і незалежнасць.',
    'liberation.years': 'гадоў Перамогі',
    'liberation.year': 'год Перамогі',
    'liberation.may': 'мая',
    'liberation.timeline.title': 'Храналогія вызвалення',
    'liberation.timeline.1941': '22 чэрвеня 1941 - Пачатак Вялікай Айчыннай вайны',
    'liberation.timeline.1944june': '23 чэрвеня 1944 - Пачатак аперацыі «Баграціён»',
    'liberation.timeline.1944july': '3 ліпеня 1944 - Вызваленне Мінска',
    'liberation.timeline.1945': '9 мая 1945 - Дзень Перамогі',
    'liberation.heroes.title': 'Героі вызвалення',
    'liberation.heroes.soldiers': 'Савецкія салдаты',
    'liberation.heroes.soldiers.text': 'Мужнасць і гераізм савецкіх воінаў сталі вырашальным фактарам у вызваленні Беларусі',
    'liberation.heroes.partisans': 'Партызаны',
    'liberation.heroes.partisans.text': 'Партызанскі рух у Беларусі быў адным з самых масавых у Еўропе',
    'liberation.heroes.civilians': 'Мірныя жыхары',
    'liberation.heroes.civilians.text': 'Нягледзячы на цяжкія ўмовы акупацыі, беларусы захавалі веру ў перамогу',
    'liberation.heroes.unity': 'Адзінства народа',
    'liberation.heroes.unity.text': 'Толькі разам, плячом да пляча, мы змаглі перамагчы фашызм',
    'liberation.gallery.title': 'Галерэя памяці',
    'liberation.gallery.all': 'Усе фота',
    'liberation.gallery.celebration': 'Святкаванне',
    'liberation.gallery.memorials': 'Мемарыялы',
    'liberation.gallery.historical': 'Гістарычныя кадры',
    'liberation.gallery.more': 'Паказаць яшчэ фатаграфіі',
    
    // Формы аўтэнтыфікацыі
    'auth.login.title': 'Уваход у сістэму',
    'auth.register.title': 'Рэгістрацыя',
    'auth.username': 'Імя карыстальніка',
    'auth.email': 'Email',
    'auth.password': 'Пароль',
    'auth.password.confirm': 'Пацвердзіце пароль',
    'auth.remember': 'Запомніць мяне',
    'auth.forgot': 'Забылі пароль?',
    'auth.no.account': 'Няма акаўнта?',
    'auth.have.account': 'Ужо ёсць акаўнт?',
    'auth.demo.warning': 'Гэта дэманстрацыйная рэалізацыя. Для рэальнай эксплуатацыі неабходны backend з бяспечным захаваннем уліковых дадзеных.',
    
    // Паведамленні пра памылкі
    'error.required': 'Гэта поле абавязковае',
    'error.email': 'Увядзіце карэктны email',
    'error.password.length': 'Пароль павінен быць не менш 6 сімвалаў',
    'error.password.match': 'Паролі не супадаюць',
    'error.login.failed': 'Няправільнае імя карыстальніка або пароль',
    'error.register.exists': 'Карыстальнік з такім іменем ужо існуе',
    
    // Футэр
    'footer.copyright': '© 2025 Беларусь 2025 - Добраўпарадкаванне. Усе правы абаронены.',
    'footer.contacts': 'Кантакты',
    'footer.privacy': 'Палітыка канфідэнцыяльнасці',
    'footer.terms': 'Умовы выкарыстання'
  }
};

// Класс для управления интернационализацией
class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'ru';
    this.translations = translations;
    this.init();
  }

  init() {
    // Устанавливаем язык при загрузке
    this.setLanguage(this.currentLang);
    
    // Добавляем обработчики для кнопок переключения языка
    document.addEventListener('DOMContentLoaded', () => {
      this.attachLanguageButtons();
      this.updatePageContent();
    });
  }

  attachLanguageButtons() {
    const langButtons = document.querySelectorAll('[data-lang]');
    langButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const lang = e.target.getAttribute('data-lang');
        this.setLanguage(lang);
      });
    });
  }

  setLanguage(lang) {
    if (!this.translations[lang]) {
      console.warn(`Language ${lang} not found`);
      return;
    }

    this.currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Обновляем активную кнопку языка
    document.querySelectorAll('[data-lang]').forEach(button => {
      if (button.getAttribute('data-lang') === lang) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });

    // Обновляем контент страницы
    this.updatePageContent();
  }

  updatePageContent() {
    // Обновляем все элементы с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.translate(key);
      
      if (translation) {
        // Проверяем, является ли элемент input или textarea
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          // Для полей ввода обновляем placeholder
          if (element.hasAttribute('placeholder')) {
            element.placeholder = translation;
          }
        } else if (element.tagName === 'BUTTON' || element.tagName === 'A') {
          // Для кнопок и ссылок обновляем текст, сохраняя иконки
          const icon = element.querySelector('i, svg, span.icon');
          if (icon) {
            element.innerHTML = '';
            element.appendChild(icon);
            element.appendChild(document.createTextNode(' ' + translation));
          } else {
            element.textContent = translation;
          }
        } else {
          // Для остальных элементов просто обновляем текст
          element.textContent = translation;
        }
      }
    });

    // Обновляем атрибуты title и alt
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
      const key = element.getAttribute('data-i18n-title');
      const translation = this.translate(key);
      if (translation) {
        element.title = translation;
      }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
      const key = element.getAttribute('data-i18n-alt');
      const translation = this.translate(key);
      if (translation) {
        element.alt = translation;
      }
    });

    // Обновляем мета-теги
    this.updateMetaTags();
  }

  translate(key) {
    const keys = key.split('.');
    let translation = this.translations[this.currentLang];
    
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        // Если перевод не найден, пробуем взять из языка по умолчанию
        translation = this.getDefaultTranslation(key);
        break;
      }
    }
    
    return translation || key;
  }

  getDefaultTranslation(key) {
    const keys = key.split('.');
    let translation = this.translations['ru'];
    
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        return null;
      }
    }
    
    return translation;
  }

  updateMetaTags() {
    // Обновляем title страницы
    const pageTitle = document.querySelector('title');
    if (pageTitle) {
      const pageName = pageTitle.getAttribute('data-page') || 'home';
      const titleKey = `nav.${pageName}`;
      const siteTitle = this.translate('site.title');
      const pageTranslation = this.translate(titleKey);
      
      if (pageName === 'home') {
        pageTitle.textContent = `${siteTitle} - ${this.translate('site.subtitle')}`;
      } else {
        pageTitle.textContent = `${pageTranslation} | ${siteTitle}`;
      }
    }

    // Обновляем meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = this.translate('hero.subtitle');
    }
  }

  // Метод для получения текущего языка
  getCurrentLanguage() {
    return this.currentLang;
  }

  // Метод для получения всех доступных языков
  getAvailableLanguages() {
    return Object.keys(this.translations);
  }
}

// Создаем и экспортируем экземпляр
const i18n = new I18n();

// Для использования в других скриптах
if (typeof module !== 'undefined' && module.exports) {
  module.exports = i18n;
}

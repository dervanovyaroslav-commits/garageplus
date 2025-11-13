# Руководство по поддержке сайта Гараж Плюс

## Содержание
1. [Введение](#введение)
2. [Структура проекта](#структура-проекта)
3. [Добавление новой страницы](#добавление-новой-страницы)
4. [Добавление новой услуги](#добавление-новой-услуги)
5. [Изменение существующего контента](#изменение-существующего-контента)
6. [Добавление новой акции/спецпредложения](#добавление-новой-акции)
7. [Добавление нового отзыва клиента](#добавление-нового-отзыва)
8. [Обновление контактной информации](#обновление-контактной-информации)
9. [Работа с навигацией](#работа-с-навигацией)
10. [Отладка проблем](#отладка-проблем)
11. [Оптимизация производительности](#оптимизация-производительности)
12. [Стандарты кодирования](#стандарты-кодирования)

## Введение

Это руководство предназначено для разработчиков, которые будут поддерживать и обновлять сайт компании "Гараж Плюс". В документе содержится информация о структуре проекта и пошаговые инструкции по выполнению наиболее распространенных задач обновления контента и функциональности сайта.

### Основные технологии проекта:
- React 18+ с TypeScript
- React Router 6+ для навигации
- TailwindCSS для стилизации
- Shadcn/UI для компонентов интерфейса
- Vite как сборщик проекта

### Запуск проекта в режиме разработки
```bash
# Установка зависимостей
npm install

# Запуск сервера разработки
npm run dev
```

### Сборка проекта для продакшена
```bash
npm run build
```

## Структура проекта

Проект имеет следующую структуру директорий:

```
/src
  /components          # Переиспользуемые компоненты React
    /layout            # Компоненты макета (Header, Footer и т.д.)
    /sections          # Секции для страниц
    /ui                # Базовые UI компоненты
  /contexts            # React контексты
  /config              # Конфигурационные файлы
  /hooks               # Кастомные React хуки
  /lib                 # Утилиты и хелперы
  /pages               # Компоненты страниц
    /services          # Страницы услуг
  /styles              # Глобальные стили
  App.tsx              # Корневой компонент приложения с маршрутизацией
  main.tsx             # Точка входа приложения
/public                # Статические файлы (изображения, иконки)
/docs                  # Документация
```

## Добавление новой страницы

Чтобы добавить новую страницу на сайт, выполните следующие шаги:

1. **Создайте новый компонент страницы** в директории `/src/pages` или в соответствующей поддиректории:

```tsx
// src/pages/NewPage.tsx
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export function NewPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Новая страница</h1>
        {/* Содержимое страницы */}
      </main>
      <Footer />
    </>
  );
}
```

2. **Добавьте маршрут** для новой страницы в файл `App.tsx`:

```tsx
// src/App.tsx
import { NewPage } from "./pages/NewPage";

// ...существующий код...

const router = createBrowserRouter([
  // ...существующие маршруты...
  {
    path: "/new-page",
    element: <NewPage />,
  },
]);
```

3. **Добавьте ссылку на новую страницу** в компоненты навигации, если необходимо.
   - В `Header.tsx` для главного меню
   - В `Footer.tsx` для ссылок в футере

```tsx
// Пример добавления в Header.tsx
<li>
  <Link 
    to="/new-page" 
    className={pathname === "/new-page" ? "font-bold" : ""}
  >
    Новая страница
  </Link>
</li>
```

## Добавление новой услуги

Для добавления новой услуги в каталог, следуйте этим шагам:

1. **Определите категорию услуги** (техобслуживание, трансмиссия, двигатель или тюнинг)

2. **Подготовьте изображение для услуги** и добавьте его в директорию `/public/images/services/`

3. **Создайте новый компонент услуги** в соответствующей поддиректории:

```tsx
// src/pages/services/maintenance/NewService.tsx
import { ServiceLayout } from "../../../components/layout/ServiceLayout";
import { ServiceHero } from "../../../components/sections/ServiceHero";
import { ContactSection } from "../../../components/sections/ContactSection";

export function NewService() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="Название новой услуги"
        description="Краткое описание новой услуги."
        image="/images/services/new-service.jpg"
      />
      
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Подробное описание</h2>
        <p className="mb-4">
          Детальное описание услуги...
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">Преимущества</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Преимущество 1</li>
          <li>Преимущество 2</li>
          <li>Преимущество 3</li>
        </ul>
      </div>
      
      <ContactSection serviceType="new-service" />
    </ServiceLayout>
  );
}
```

4. **Добавьте маршрут** для новой услуги в файл `App.tsx`:

```tsx
// src/App.tsx
import { NewService } from "./pages/services/maintenance/NewService";

// ...существующий код...

const router = createBrowserRouter([
  // ...существующие маршруты...
  {
    path: "/services/maintenance/new-service",
    element: <NewService />,
  },
]);
```

5. **Добавьте карточку услуги** на страницу соответствующей категории (например, в `Maintenance.tsx`):

```tsx
// В src/pages/services/Maintenance.tsx
// Найдите массив сервисов и добавьте новую услугу

const services = [
  // ...существующие услуги...
  {
    id: "new-service",
    title: "Название новой услуги",
    description: "Краткое описание новой услуги.",
    image: "/images/services/new-service.jpg",
    link: "/services/maintenance/new-service",
  },
];
```

## Изменение существующего контента

### Изменение текстового содержания

1. **Найдите компонент**, который содержит текст, который нужно изменить
2. **Отредактируйте текст** непосредственно в JSX этого компонента

Например, для изменения текста на главной странице:

```tsx
// src/pages/Index.tsx
// Найдите нужный текст и измените его

<h1 className="text-4xl font-bold mb-2">
  Новый заголовок главной страницы
</h1>
<p className="text-lg mb-8">
  Новый подзаголовок или описание...
</p>
```

### Изменение изображений

1. **Подготовьте новое изображение** (оптимизированное для веб)
2. **Поместите изображение** в соответствующую поддиректорию в `/public/images/`
3. **Обновите путь к изображению** в соответствующем компоненте

```tsx
// Пример изменения изображения в hero секции
<img
  src="/images/hero/new-hero-image.jpg"
  alt="Гараж Плюс - сервис Mercedes-Benz"
  className="w-full h-full object-cover"
/>
```

## Добавление новой акции

Акции и спецпредложения отображаются через компонент `PromotionCarousel`. Для добавления новой акции:

1. **Подготовьте изображение для акции** и добавьте его в `/public/images/promotions/`

2. **Найдите массив с акциями** в компоненте или на странице, где они отображаются, и добавьте новую акцию:

```tsx
// Обычно это находится в компоненте PromotionCarousel.tsx
// или на главной странице Index.tsx

const promotions = [
  // ...существующие акции...
  {
    id: "new-promo",
    title: "Новая акция",
    description: "Описание новой акции с деталями предложения.",
    image: "/images/promotions/new-promo.jpg",
    buttonText: "Подробнее", // опционально
    buttonLink: "/contact", // опционально - ссылка на страницу с деталями или форму обратной связи
  },
];
```

3. **Если акция требует отдельной страницы**, создайте новую страницу по инструкции в разделе "Добавление новой страницы"

## Добавление нового отзыва

Отзывы клиентов обычно отображаются на главной странице через компонент `TestimonialCard`.

1. **Найдите массив с отзывами** (обычно на главной странице `Index.tsx`) и добавьте новый отзыв:

```tsx
// src/pages/Index.tsx или в отдельном компоненте с отзывами
const testimonials = [
  // ...существующие отзывы...
  {
    id: "new-testimonial",
    name: "Имя Клиента",
    position: "Владелец Mercedes GLE", // или другая информация
    text: "Текст нового отзыва от клиента с описанием опыта обслуживания в Гараж Плюс...",
    rating: 5, // опционально, если есть система рейтинга
    image: "/images/testimonials/new-client.jpg", // опционально, если есть фото
  },
];
```

2. **Если для отзыва требуется фото**, добавьте его в `/public/images/testimonials/`

## Обновление контактной информации

Контактная информация обычно находится в нескольких местах:

### 1. В компоненте ContactSection

```tsx
// src/components/sections/ContactSection.tsx
// Найдите и обновите контактную информацию

<div className="contact-info">
  <p><strong>Телефон:</strong> +7 (XXX) XXX-XX-XX</p>
  <p><strong>Email:</strong> info@garage-plus.ru</p>
  <p><strong>Адрес:</strong> г. Москва, ул. Автосервисная, 123</p>
</div>
```

### 2. В футере сайта (Footer.tsx)

```tsx
// src/components/layout/Footer.tsx
// Найдите и обновите контактную информацию

<div className="contact-column">
  <h3>Контакты</h3>
  <p>Телефон: +7 (XXX) XXX-XX-XX</p>
  <p>Email: info@garage-plus.ru</p>
  <p>Адрес: г. Москва, ул. Автосервисная, 123</p>
</div>
```

### 3. На странице "О нас" (About.tsx)

```tsx
// src/pages/About.tsx
// Найдите и обновите контактную информацию в соответствующем разделе
```

## Работа с навигацией

### Изменение существующих ссылок

1. **Найдите компонент навигации** (обычно `Header.tsx` для главного меню)
2. **Обновите нужные ссылки** в тегах `<Link>` или `<a>`

```tsx
// src/components/layout/Header.tsx

<nav>
  <ul className="flex space-x-6">
    {/* Пример изменения текста и URL для существующего пункта меню */}
    <li>
      <Link 
        to="/new-services" // Изменен URL
        className={pathname === "/new-services" ? "font-bold" : ""}
      >
        Наши сервисы // Изменен текст
      </Link>
    </li>
    {/* ...остальные пункты меню... */}
  </ul>
</nav>
```

### Добавление новых ссылок в меню

```tsx
// src/components/layout/Header.tsx

<nav>
  <ul className="flex space-x-6">
    {/* ...существующие пункты меню... */}
    
    {/* Новый пункт меню */}
    <li>
      <Link 
        to="/new-page" 
        className={pathname === "/new-page" ? "font-bold" : ""}
      >
        Новая страница
      </Link>
    </li>
  </ul>
</nav>
```

### Ссылки для плавной прокрутки к секциям

Для ссылок, которые должны прокручивать к определенной секции на текущей странице:

```tsx
// Пример создания ссылки с плавной прокруткой

function scrollTo(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// В JSX:
<button 
  onClick={() => scrollTo("contact-section")}
  className="btn"
>
  Связаться с нами
</button>

// А затем в компоненте секции:
<section id="contact-section">
  {/* Содержимое секции */}
</section>
```

## Отладка проблем

### Инструменты разработчика в браузере

1. **Используйте консоль браузера** (F12 или Ctrl+Shift+I) для просмотра ошибок и сообщений
2. **Проверьте вкладку Network** для анализа сетевых запросов
3. **Используйте React DevTools** для отладки компонентов и их состояний

### Логи сервера разработки

При запуске `npm run dev` в терминале будут отображаться логи, включая ошибки компиляции и выполнения.

### Частые проблемы и их решения

1. **Компонент не отображается**
   - Проверьте console.log в браузере на наличие ошибок
   - Проверьте, правильно ли импортирован и экспортирован компонент
   - Проверьте условия рендеринга (возможно, компонент скрыт из-за условия)

2. **Стили не применяются**
   - Проверьте, правильно ли указаны классы Tailwind
   - Убедитесь, что имя класса написано без опечаток
   - Проверьте, не перекрываются ли стили другими правилами CSS

3. **Маршрутизация не работает**
   - Проверьте, правильно ли настроены маршруты в App.tsx
   - Убедитесь, что используются правильные компоненты `Link` из React Router
   - Проверьте, не мешает ли какое-то условие рендерингу нужной страницы

## Оптимизация производительности

### Оптимизация изображений

1. **Используйте оптимизированные изображения**:
   - Сжимайте изображения перед добавлением в проект (используйте сервисы типа TinyPNG или ImageOptim)
   - Выбирайте подходящий формат (JPEG для фотографий, PNG для графики с прозрачностью, WebP для современных браузеров)

2. **Указывайте размеры изображений**:
```tsx
<img 
  src="/images/example.jpg" 
  alt="Описание" 
  width="800" 
  height="600" 
  className="w-full h-auto" 
/>
```

### Оптимизация рендеринга компонентов

1. **Используйте мемоизацию для тяжелых компонентов**:
```tsx
import { memo } from "react";

const HeavyComponent = memo(function HeavyComponent({ prop1, prop2 }) {
  // Компонент с сложной логикой или большим количеством дочерних элементов
  return (/* JSX */);
});
```

2. **Используйте виртуализацию** для длинных списков, если они есть в проекте

### Ленивая загрузка

Для больших компонентов, которые не нужны при первоначальной загрузке:

```tsx
// В файле App.tsx
import { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./pages/HeavyComponent"));

// В маршрутизации:
{
  path: "/heavy-page",
  element: (
    <Suspense fallback={<LoadingScreen />}>
      <LazyComponent />
    </Suspense>
  )
}
```

## Стандарты кодирования

### Именование

1. **Компоненты**:
   - Используйте PascalCase для компонентов React: `ServiceCard.tsx`
   - Суффикс `.tsx` для файлов с JSX, `.ts` для чистого TypeScript

2. **Переменные, функции, пропсы**:
   - Используйте camelCase: `handleSubmit`, `isLoading`, `userData`

3. **Файлы и директории**:
   - Используйте kebab-case для директорий: `contact-form/`
   - Используйте PascalCase для файлов компонентов: `ContactForm.tsx`

### Структура компонентов React

1. **Функциональные компоненты** предпочтительнее классовых
2. **Используйте TypeScript** для типизации пропсов и состояния
3. **Выделяйте логику** в custom hooks при необходимости

Пример структуры компонента:
```tsx
import { useState } from "react";
import { Button } from "../ui/button";
import { useIsMobile } from "../../hooks/use-mobile";
import { cn } from "../../lib/utils";
import { theme } from "../../config/theme";

interface ComponentProps {
  title: string;
  onClick?: () => void;
}

export function MyComponent({ title, onClick }: ComponentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  function handleToggle() {
    setIsOpen(!isOpen);
    if (onClick) onClick();
  }
  
  return (
    <div className={cn("p-4 rounded", isOpen ? "bg-blue-100" : "bg-white")}>
      <h2 className="text-2xl font-bold mb-2" style={{ color: theme.colors.primary }}>
        {title}
      </h2>
      <Button onClick={handleToggle}>
        {isOpen ? "Закрыть" : "Открыть"}
      </Button>
      
      {isOpen && (
        <div className="mt-4">
          Дополнительное содержимое
        </div>
      )}
    </div>
  );
}
```

### Стилизация

1. **Используйте классы Tailwind** как основной метод стилизации
2. **Для динамических классов** используйте утилиту `cn` из `lib/utils.ts`
3. **Для сложных случаев** можно использовать встроенные стили с темой

```tsx
import { cn } from "../../lib/utils";
import { theme } from "../../config/theme";

// Пример использования TailwindCSS
<div className="p-4 bg-white rounded-lg shadow">
  <h2 className="text-2xl font-bold mb-2">Заголовок</h2>
</div>

// Пример использования динамических классов
<div className={cn("p-4 rounded", isActive ? "bg-blue-100" : "bg-gray-100")}>
  Содержимое
</div>

// Пример использования темы для сложных случаев
<div style={{ 
  background: theme.gradients.primary,
  boxShadow: theme.shadows.card
}}>
  Стилизованный блок
</div>
```

### Лучшие практики TypeScript

1. **Определяйте интерфейсы** для пропсов и состояний
2. **Избегайте типа `any`** - используйте конкретные типы или `unknown`
3. **Используйте типизацию** для API и внешних данных

```tsx
interface User {
  id: number;
  name: string;
  email: string;
}

// Интерфейс для пропсов компонента
interface UserCardProps {
  user: User;
  onEdit?: (userId: number) => void;
  variant?: "default" | "compact";
}

export function UserCard({ user, onEdit, variant = "default" }: UserCardProps) {
  // Реализация компонента
}
```

### React и хуки

1. **Используйте функциональные компоненты** с хуками вместо классовых компонентов
2. **Выносите сложную логику** в отдельные хуки
3. **Соблюдайте правила хуков**:
   - Вызывайте хуки только на верхнем уровне компонента
   - Вызывайте хуки только из функциональных компонентов или кастомных хуков

```tsx
// Пример custom hook
function useForm<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  
  const handleChange = useCallback(<K extends keyof T>(field: K, value: T[K]) => {
    setValues(prev => ({ ...prev, [field]: value }));
  }, []);
  
  const reset = useCallback(() => {
    setValues(initialValues);
  }, [initialValues]);
  
  return { values, handleChange, reset };
}

// Использование в компоненте
function ContactForm() {
  const { values, handleChange, reset } = useForm({
    name: "",
    email: "",
    message: ""
  });
  
  // Остальная логика компонента
}
```

---

Данное руководство содержит основную информацию о поддержке и обновлении сайта "Гараж Плюс". При возникновении дополнительных вопросов или необходимости в более детальной информации, рекомендуется обращаться к исходному коду проекта или связаться с командой разработки.
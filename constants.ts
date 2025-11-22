import { Product, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Red Giant Pro Max',
    description: 'Бычье Сердце v2.0. Оптимизировано для салатов. Максимальная мясистость. Высокий аптайм на столе.',
    price: 450,
    image: 'https://picsum.photos/seed/tomato_giant/600/600',
    tag: 'ХИТ ПРОДАЖ'
  },
  {
    id: '2',
    name: 'Cherry Nano',
    description: 'Компактный форм-фактор, взрывной вкус. Идеальная совместимость с детьми и перекусами.',
    price: 500,
    image: 'https://picsum.photos/seed/tomato_cherry/600/600',
    tag: 'ДЛЯ ДЕТЕЙ'
  },
  {
    id: '3',
    name: 'Pink Flamingo OS',
    description: 'Нежная архитектура кожицы. Работает на базе солнечной энергии. Open Source сладость.',
    price: 420,
    image: 'https://picsum.photos/seed/tomato_pink/600/600',
    tag: 'ПРЕМИУМ'
  },
  {
    id: '4',
    name: 'Black Prince: Dark Mode',
    description: 'Повышенное содержание антиоксидантов. Стильный темный дизайн для настоящих профи.',
    price: 480,
    image: 'https://picsum.photos/seed/tomato_black/600/600',
    tag: 'ЛИМИТИРОВАНО'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Алексей, Senior Dev',
    text: 'Деплой прошел успешно! Вкус — просто пушка. Это не легаси-овощи из супермаркета, это чистый код природы. Бабушка шарит в агротехе.',
    rating: 5
  },
  {
    id: '2',
    author: 'Мария, UX Designer',
    text: 'Визуально помидоры идеальны, UX поедания на высоте. Никаких багов в виде зеленых прожилок. Интерфейс (кожица) очень приятный.',
    rating: 5
  },
  {
    id: '3',
    author: 'Игорь, Crypto Trader',
    text: 'Лучшая инвестиция в свое здоровье. ROI 1000%. Беру ящик, холдю до зимы в виде закаток. Ту зе мун!',
    rating: 4
  },
  {
    id: '4',
    author: 'Ольга, Product Owner',
    text: 'Соответствует всем требованиям ТЗ. Доставка быстрее, чем компиляция моего проекта. Рекомендую к внедрению в рацион всей команды.',
    rating: 5
  },
  {
    id: '5',
    author: 'Дмитрий, QA Engineer',
    text: 'Пытался найти баги (червяков) — не нашел. Тестовое покрытие пестицидами — 0%. Продукт стабилен.',
    rating: 5
  }
];
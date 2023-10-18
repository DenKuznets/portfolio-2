export interface Project {
    id: number;
    name: string;
    tech: string[];
    img: string;
    github: string;
    demo: string;
    description: string;
}

export const getProject = (id: number) =>
    projects.find((proj) => proj.id === id);

export interface techListType {
    react: string,
    nextjs: string,
    tailwind: string,
    ts: string,
    mui: string,
    redux: string,
    rest: string,
    unittest: string,
    storybook: string,
    sc: string,
    classic: string,
}

export const techList: techListType = {
    react: 'REACT',
    nextjs: 'NEXTJS',
    tailwind: 'TAILWIND',
    ts: 'TS',
    mui: 'MUI',
    redux: 'REDUX',
    rest: 'REST',
    unittest:"UNIT TESTING",
    storybook: 'STORYBOOK',
    sc: 'STYLED-COMPONENTS',
    classic:"HTML CSS JS"
};

export const projects: Project[] = [
    {
        id: 1,
        name: 'rock paper scissors',
        tech: [
            techList.react,
            techList.mui,
            techList.ts,
            techList.storybook,
            techList.unittest,
        ],
        img: 'rpc.webp',
        github: 'https://github.com/DenKuznets/rock-paper-scissors',
        demo: 'https://rock-paper-scissors-kappa-tawny.vercel.app/',
        description: `Игра "Камень Ножницы Бумага" по дизайну https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH`
    },
    {
        id: 2,
        name: 'коммерческий сайт',
        tech: [techList.classic],
        img: 'tes.webp',
        github: 'https://github.com/DenKuznets/tes.loc',
        demo: 'https://tul-energo-service.ru/',
        description: `Верстка лэндинга по заказу web-студии alex-media.ru по макету Figma с соблюдением дедлайна, pixel-perfect попаданием в адаптивные брейкпоинты. В сотрудничестве с дизайнером и backend-разработчиком (php, laravel, blade)`
    },
    {
        id: 3,
        name: 'тестовое задание',
        tech: [techList.react, techList.sc, techList.rest],
        img: 'test1.webp',
        github: 'https://github.com/DenKuznets/dls-test',
        demo: 'https://dls-test.vercel.app/',
        description: `Тестовое задание по макету Figma и ТЗ: 
                        1) Горизонтальное меню - sticky, исчезает после 200px прокрутки
                        2) Мобильное меню - плавное скрытие/открытие
                        3) Подменю - только CSS
                        4) Получение данных fetch()/axios
                        5) Отображение списка постов - flex
                        6) Поиск постов - по заголовкам и тексту
                        7) Полная информация о посте по клику на пост - modal window     
                        `
    },
    {
        id: 4,
        name: 'тестовое задание для web-студии',
        tech: [techList.react, techList.sc],
        img: 'webstudio.webp',
        github: 'https://github.com/DenKuznets/testovoe-alexmedia',
        demo: 'https://denkuznets.github.io/testovoe-alexmedia/',
        description: `Тестовое задание по макету Figma и ТЗ: 
                        1) Сделать липкое меню.
                        2) Мобильное и декстпное меню должно в html быть одним блоком. 
                        3) Добавить Анимации по своему усмотрению. Можно использовать сторонние библиотеки , но без jquery.(не обязательно)
                        4) Cделать popup и в форме предусмотреть валидацию, Пока не заполненны все поля кнопка должна быть неактивна.(не обязательно)
                        5) Ховеры на ссылки, по своему усмотрению.
                        6) Мобильная верстка`
    },

    {
        id: 5,
        name: 'портфолио',
        tech: [techList.react, techList.sc, techList.ts],
        img: 'portfolio.webp',
        github: 'https://github.com/DenKuznets/masha-portfolio',
        demo: 'http://davinchushka.vercel.app/',
        description: `шаблон портфолио по дизайну figma`
    },
    {
        id: 6,
        name: 'квиз',
        tech: [techList.react, techList.rest, techList.sc],
        img: 'quizz.webp',
        github: 'https://github.com/DenKuznets/quizzical-app',
        demo: 'https://denkuznets.github.io/quizzical-app/',
        description: `Пример использования API. По макету figma в рамках задания сайта scrimba.com, курс Learn React`
    },
    {
        id: 7,
        name: 'компонент диаграмма расходов',
        tech: [techList.react, techList.ts, techList.sc],
        img: 'component.webp',
        github: 'https://github.com/DenKuznets/Expenses-chart-component',
        demo: 'https://denkuznets.github.io/Expenses-chart-component/',
        description: `Основная сложность состояла в том, что бы придумать как реализовать отображение диаграммы. Кроме того, пробовал свои силы в написании компонентов react с использованием typescript. Задание с сайта frontendmentor.io`
    },
    {
        id: 8,
        name: 'коммерческий сайт',
        tech: [techList.classic],
        img: 'tehavto.webp',
        github: 'https://github.com/DenKuznets/teh-avto.loc',
        demo: 'https://avtodom-techauto.ru/',
        description: `Верстка лэндинга по заказу web-студии alex-media.ru по макету Figma с соблюдением дедлайна, pixel-perfect попаданием в адаптивные брейкпоинты. В сотрудничестве с дизайнером и backend-разработчиком (php, laravel, blade)`
    },
    {
        id: 9,
        name: 'коммерческий сайт',
        tech: [techList.classic],
        img: 'bmk.webp',
        github: 'https://github.com/DenKuznets/bmk-new.loc',
        demo: 'https://bmk78.ru/',
        description: `Верстка лэндинга по заказу web-студии alex-media.ru по макету Figma с соблюдением дедлайна, pixel-perfect попаданием в адаптивные брейкпоинты. В сотрудничестве с дизайнером и backend-разработчиком (php, laravel, blade)`
    },
    {
        id: 10,
        name: 'коммерческий сайт',
        tech: [techList.classic],
        img: 'cleaning.webp',
        github: 'https://github.com/DenKuznets/cleaning-chistulya.loc',
        demo: 'https://chistylya.ru/',
        description: `Верстка лэндинга по заказу web-студии alex-media.ru по макету Figma с соблюдением дедлайна, pixel-perfect попаданием в адаптивные брейкпоинты. В сотрудничестве с дизайнером и backend-разработчиком (php, laravel, blade)`
    },
    {
        id: 11,
        name: 'коммерческий сайт',
        tech: [techList.classic],
        img: 'myp.webp',
        github: 'https://github.com/DenKuznets/myp-comfort',
        demo: 'https://mup-komfort.ru/',
        description: `Верстка лэндинга по заказу web-студии alex-media.ru по макету Figma с соблюдением дедлайна, pixel-perfect попаданием в адаптивные брейкпоинты. В сотрудничестве с дизайнером и backend-разработчиком (php, laravel, blade)`
    },
    {
        id: 12,
        name: 'мое портфолио',
        tech: [techList.nextjs, techList.ts, techList.tailwind, techList.storybook, techList.unittest],
        img: 'myportfolio.webp',
        github: 'https://github.com/DenKuznets/portfolio',
        demo: 'https://denkuznets.vercel.app/',
        description: `Этот сайт портфолио я разработал сам, вдохновляясь примерами таких работ как https://stefantopalovicdev.vercel.app/ , https://caferati.me/portfolio , https://brittanychiang.com/ и http://riccardozanutta.com/ . 
                    За основу дизайна использовал этот шаблон https://themeforest.net/item/orido-personal-portfolio-website-figma-template/screenshots/37527613?index=1`
    },

    {
        id: 13,
        name: "drag'n'drop на react",
        tech: [techList.react, techList.redux],
        img: 'dnd.webp',
        github: 'https://github.com/DenKuznets/react-dnd',
        demo: 'https://react-dnd-ten.vercel.app/',
        description: `В рамках тестового задания реализован react dnd. CSS внимание не уделялось, поскольку работа велась в условиях сильного ограничения по времени задания.  
                    ТЗ: 
                    Реализовать простой 2д планировщик.
                        1) Сделать блок со списком объектов на выбор(это могут быть 2д
                            фотографии столов, стульев, перегородок).
                        2) Сделать доску на которое можно добавлять эти объекты и
                            перемещать их мышкой. 
                        3) Должна быть возможность сохранения расстановки в
                                файл(сохранять id объекта и его координаты).
                        4) Также должна быть возможность импорта этого файла с
                                координатами и отображения сохраненной расстановки.
                        5) Ограничения на стек технологий:JavaScript React Redux Остальное на ваше усмотрение`
    }
];

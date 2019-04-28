module.exports = {
    base: process.env.NODE_ENV === 'production' ? '/lucidum101/' : '/',
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'en-US', // this will be set as the lang attribute on <html>
            title: 'Lucidum 101',
            description: 'Free textbook for secondary and higher education'
        },
        '/ru/': {
            lang: 'ru-RU',
            title: 'Lucidum 101',
            description: 'Свободный учебник для средней и высшей школы'
        }
    },
    nav: [
        {
            text: 'Languages',
            items: [
                { text: 'Russian', link: '/language/russian' },
                { text: 'English', link: '/language/english' }
            ]
        }
    ],
    themeConfig: {
        locales: {
            '/': {
                // text for the language dropdown
                selectText: 'Languages',
                // label for this locale in the language dropdown
                label: '🇺🇸 English',
                // text for the edit-on-github link
                editLinkText: 'Edit this page on GitHub',
                // config for Service Worker 
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                // algolia docsearch options for current locale
                algolia: {},
                nav: [
                    // { text: 'Nested', link: '/nested/' }
                ],
                sidebar: [
                    {
                        title: 'Home',
                        children: [
                            ['/', 'About']

                        ]
                    },
                    {
                        title: 'Handbook - Python',
                        collapsable: false,
                        children: [
                            ['/handbooks/python/', 'Before start'],
                            ['/handbooks/python/intro', 'Intro'],
                            ['/handbooks/python/numbers', 'Numbers'],
                            ['/handbooks/python/strings', 'Strings'],
                            ['/handbooks/python/lists-etc', 'Lists'],
                            ['/handbooks/python/dicts', 'Dicts'],
                            ['/handbooks/python/conditionals', 'Conditionals'],
                            ['/handbooks/python/bytes', 'Byte operations'],
                        ]
                    },
                ],
            },
            '/ru/': {
                selectText: 'Языки',
                label: '🇷🇺 Русский',
                editLinkText: 'Редактировать страницу на GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "Доступен новый контент.",
                        buttonText: "Обновить"
                    }
                },
                nav: [
                    // { text: 'Вложенные', link: '/ru/nested/' }
                ],
                algolia: {},
                sidebar: [
                    {
                        title: 'Вместо предисловия',
                        children: [
                            ['/ru/', 'О проекте'],
                            ['/ru/home/useful', 'Полезное'],
                            ['/ru/home/todo', 'Планы'],
                            ['/ru/home/ideas', 'Идеи'],
                            ['/ru/home/logbook', 'Бортовой журнал'],
                        ]
                    },
                    {
                        title: 'Основы',
                        children: [
                            ['/ru/basics/', 'Вступление'],
                            ['/ru/basics/patterns', 'Паттерны'],
                        ]
                    },
                    {
                        title: 'От пальцев к числам',
                        children: [
                            ['/ru/integers/positive', 'Больше нуля'],
                        ]
                    },
                    {
                        title: 'Части целого',
                        children: [
                            ['/ru/rational/', 'От нуля до единицы']
                        ]
                    },
                    {
                        title: 'Неправильные числа',
                        children: [
                            ['/ru/irrational/', 'Степени']
                        ]
                    },
                    {
                        title: 'Буквы вместо чисел',
                        children: [
                            ['/ru/variables/', 'Алгебра'],
                            ['/ru/variables/polynomials', 'Полиномы']
                        ]
                    },
                    {
                        title: 'Взаимосвязи',
                        collapsable: false,
                        children: [
                            ['/ru/relations/', 'О взаимосвязях'],
                            ['/ru/relations/functions/basics', 'Функции'],
                            ['/ru/relations/functions/linear', 'Линейная функция'],
                            ['/ru/relations/functions/simultaneous-equations', 'Системы уравнений'],
                            ['/ru/relations/functions/quadratic', 'Квадратичная функция'],
                            ['/ru/relations/functions/waves', 'Колебания'],
                            ['/ru/relations/functions/principles', 'Общие принципы'],
                        ]
                    },
                    {
                        title: 'Анализ',
                        collapsable: false,
                        children: [
                            ['/ru/analysis/', 'Вступление'],
                            ['/ru/analysis/limits', 'Пределы'],
                            ['/ru/analysis/differentiation', 'Дифференцирование'],
                            ['/ru/analysis/integration', 'Интегрирование'],
                        ]
                    },
                    {
                        title: 'Невозможные числа',
                        children: [
                            ['/ru/imaginary/', 'Мнимая единица']
                        ]
                    },
                ],
            }
        }
    },
    markdown: {
        config: md => {
            md.set({ typographer: true })
                .use(require("markdown-it-katex"))
        },
        lineNumbers: true
    },
    head: [
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
        ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css' }],
    ]
}
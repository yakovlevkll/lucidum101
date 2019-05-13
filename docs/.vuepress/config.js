module.exports = {
    // base: '/lucidum101/',
    // base: process.env.NODE_ENV === 'production' ? '/lucidum101/' : '/',
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'en-US', // this will be set as the lang attribute on <html>
            title: 'Lucidum 101',
            description: 'What real education should be'
        },
        '/ru/': {
            lang: 'ru-RU',
            title: 'Lucidum 101',
            description: 'Каким и должно быть настоящее образование'
        }
    },
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
                    { text: 'Handbooks', link: '/en/handbooks/' }
                ],
                sidebar: {
                    '/en/handbooks/': [
                        {
                            title: 'Python',
                            children: [
                                '/en/handbooks/python/',
                                '/en/handbooks/python/intro',
                                '/en/handbooks/python/numbers',
                                '/en/handbooks/python/strings',
                                '/en/handbooks/python/lists-etc',
                                '/en/handbooks/python/dicts',
                                '/en/handbooks/python/conditionals',
                                '/en/handbooks/python/bytes',
                            ]
                        },
                    ],
                    '/en/': [
                        {
                            title: 'Home',
                            children: [
                                ['/en/home/', 'About']
                            ]
                        }
                    ],
                },
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
                    { text: 'Справочники', link: '/ru/handbooks/' }
                ],
                algolia: {},
                sidebar: {
                    '/ru/handbooks/': [
                        {
                            title: 'Python',
                            children: [
                                '/en/handbooks/python/',
                                '/en/handbooks/python/intro',
                                '/en/handbooks/python/numbers',
                                '/en/handbooks/python/strings',
                                '/en/handbooks/python/lists-etc',
                                '/en/handbooks/python/dicts',
                                '/en/handbooks/python/conditionals',
                                '/en/handbooks/python/bytes',
                            ]
                        },
                        {
                            title: 'Арифметика',
                            children: [
                                '/ru/handbooks/arithmetics/rational',
                                '/ru/handbooks/arithmetics/irrational',
                            ]
                        },
                        {
                            title: 'Геометрия',
                            children: [
                                '/ru/handbooks/geometry/triangles',
                                '/ru/handbooks/geometry/quadrilaterals',
                                '/ru/handbooks/geometry/circle',
                            ]
                        },
                    ],
                    '/ru/': [
                        {
                            title: 'О проекте',
                            children: [
                                '/ru/home/',
                                '/ru/home/useful',
                                '/ru/home/todo',
                                '/ru/home/logbook',
                            ]
                        },
                        {
                            title: 'Основы',
                            children: [
                                ['/ru/basics/', 'Вступление'],
                                '/ru/basics/geometry',
                                '/ru/basics/patterns',
                                '/ru/basics/logic',
                                '/ru/basics/algorithms',
                                '/ru/basics/numbers',
                            ]
                        },
                        {
                            title: 'От пальцев к числам',
                            children: [
                                ['/ru/integers/', 'Вступление'],
                                '/ru/integers/positive',
                                '/ru/integers/negative',
                                '/ru/integers/rounding',
                                '/ru/integers/geometry',
                            ]
                        },
                        {
                            title: 'Части целого',
                            children: [
                                ['/ru/rational/', 'Вступление'],
                                '/ru/rational/multiplication',
                                '/ru/rational/factorization',
                                '/ru/rational/fractions',
                                '/ru/rational/decimals',
                                '/ru/rational/percentages',
                                '/ru/rational/rounding',
                            ]
                        },
                        {
                            title: 'Комбинации',
                            children: [
                                ['/ru/combinatorics/', 'Вступление']
                            ]
                        },
                        {
                            title: 'Неправильные числа',
                            children: [
                                ['/ru/irrational/', 'Вступление'],
                                '/ru/irrational/exponents',
                                '/ru/irrational/logarithms',
                            ]
                        },
                        {
                            title: 'Буквы вместо чисел',
                            children: [
                                ['/ru/variables/', 'Алгебра'],
                                '/ru/variables/polynomials'
                            ]
                        },
                        {
                            title: 'Взаимосвязи',
                            children: [
                                ['/ru/relations/', 'О взаимосвязях'],
                                '/ru/relations/functions/basics',
                                '/ru/relations/functions/linear',
                                '/ru/relations/functions/simultaneous-equations',
                                '/ru/relations/functions/quadratic',
                                '/ru/relations/functions/principles',
                                '/ru/relations/trigonometry/basics',
                            ]
                        },
                        {
                            title: 'Анализ',
                            children: [
                                ['/ru/analysis/', 'Вступление'],
                                '/ru/analysis/limits/',
                                '/ru/analysis/differentiation/',
                                '/ru/analysis/differentiation/extremes',
                                '/ru/analysis/integration/',
                                '/ru/analysis/integration/parts',
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
        }
    },
    plugins: [
        ['mathjax', {
            target: 'chtml',
            macros: {
                '~=': '\\approx',
                "...": "\\dots",
                "***": "\\cdots",
                "*": "\\cdot",
                ":": "\\div",
                "\\deg": "^\\circ",
                "(": "\(",
                ")": "\)",
                "{}/{}": "\\dfrac{}{}"
            },
        }],
    ],
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.set({ typographer: true })
            // md.use(require("@iktakahiro/markdown-it-katex"))
        }
    },
    head: [
        // ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css' }],
        ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css' }],
        ['script', { type: 'text/javascript', src: 'https://cindyjs.org/dist/latest/Cindy.js' }],
    ]
}
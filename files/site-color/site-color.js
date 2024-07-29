window.addEventListener("load", windowLoad);

function windowLoad() {
    // HTML
    const htmlBlock = document.documentElement;

    // Отримуем збережену тему
    const saveUserTheme = localStorage.getItem('user-theme');

    // Робота з системними наластуваннями
    let userTheme;
    if (window.matchMedia) {
        userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        !saveUserTheme ? changeTheme() : null;
    });

    // Зміна теми по кліку
    const themeButton = document.querySelector('.page__theme');
    const resetButton = document.querySelector('.page__reset');
    if (themeButton) {
        themeButton.addEventListener('click', function (e) {
            if (resetButton) {
                resetButton.classList.add('active');
            }
            changeTheme(true);
        });
    }
    if (resetButton) {
        resetButton.addEventListener('click', function (e) {
            if (resetButton) {
                resetButton.classList.remove('active');
            }
            localStorage.setItem('user-theme', '');
        });
    }

    // Функція додавання классу теми
    function setThemeClass() {
        if (saveUserTheme) {
            htmlBlock.classList.add(saveUserTheme);
            if (resetButton) {
                resetButton.classList.add('active');
            }
        } else {
            htmlBlock.classList.add(userTheme);
        }
    }
    // Додаємо класс теми
    setThemeClass();

    // Функція зміни теми
    function changeTheme(saveTheme = false) {
        let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
        let newTheme;

        if (currentTheme === 'light') {
            newTheme = 'dark';
        } else if (currentTheme === 'dark') {
            newTheme = 'light';
        }
        htmlBlock.classList.remove(currentTheme);
        htmlBlock.classList.add(newTheme);
        saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
    }

    if (themeButton) {
        if (themeButton.classList.contains('hidden')) {
            themeButton.classList.remove('hidden')
        }
    }
}
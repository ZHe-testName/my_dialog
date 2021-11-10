export const getTheme = () => {
    return localStorage.getItem('applicationt_theme') || 'dark';
};

export const setTheme = (theme) => {
    localStorage.setItem('application_theme', theme);

    if (theme === 'dark'){
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    }else{
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }
};
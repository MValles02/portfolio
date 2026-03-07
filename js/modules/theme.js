const SELECTORS = {
    THEME_TOGGLE: 'theme-toggle',
    PORTFOLIO_PREVIEW: 'portfolio-preview'
};

export const THEMES = {
    DARK: 'dark',
    LIGHT: 'light'
};

export const STORAGE_KEYS = {
    THEME: 'theme'
};

const ATTRS = {
    THEME: 'data-theme',
    ARIA_LABEL: 'aria-label'
};

export function getPreferredTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (savedTheme) return savedTheme;
    return globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT;
}

export function setTheme(theme) {
    const htmlElement = document.documentElement;
    const themeToggle = document.getElementById(SELECTORS.THEME_TOGGLE);
    const portfolioPreview = document.getElementById(SELECTORS.PORTFOLIO_PREVIEW);

    htmlElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEYS.THEME, theme);

    if (themeToggle) {
        const nextTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
        themeToggle.setAttribute(ATTRS.ARIA_LABEL, `Switch to ${nextTheme} mode`);
    }

    if (portfolioPreview) {
        portfolioPreview.src = theme === THEMES.DARK 
            ? portfolioPreview.dataset.darkSrc 
            : portfolioPreview.dataset.lightSrc;
    }
}

export function initTheme() {
    const themeToggle = document.getElementById(SELECTORS.THEME_TOGGLE);

    if (!themeToggle) {
        console.error('Theme toggle button not found');
        return;
    }

    const initialTheme = getPreferredTheme();
    setTheme(initialTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.dataset.theme;
        const newTheme = currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
        setTheme(newTheme);
    });

    console.log('Theme module initialized');
}

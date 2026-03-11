import { initTheme } from './modules/theme.js';
import { initNavigation } from './modules/navigation.js';

function initCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCurrentYear();
    initNavigation();
});
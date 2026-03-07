import { getPreferredTheme, setTheme, THEMES, STORAGE_KEYS } from '../js/modules/theme.js';

// --- Mocks ---
const storage = new Map();
globalThis.localStorage = {
    getItem: (key) => storage.get(key) || null,
    setItem: (key, value) => storage.set(key, value),
    clear: () => storage.clear()
};

globalThis.matchMedia = (query) => ({
    matches: query.includes('dark'),
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
});

const mockElement = {
    dataset: {},
    setAttribute: function(name, value) { this[name] = value; },
    src: ''
};

globalThis.document = {
    documentElement: mockElement,
    getElementById: (id) => mockElement
};

// --- Test Utilities ---
function assert(condition, message) {
    if (!condition) {
        throw new Error(`FAIL: ${message}`);
    }
    console.log(`PASS: ${message}`);
}

// --- Tests ---
console.log('Running theme.js tests...');

try {
    // Test 1: getPreferredTheme returns 'dark' when system preference is dark and no local storage is set
    localStorage.clear();
    const theme1 = getPreferredTheme();
    assert(theme1 === THEMES.DARK, "getPreferredTheme returns 'dark' for dark system preference");

    // Test 2: getPreferredTheme returns 'light' when local storage is set to 'light'
    localStorage.setItem(STORAGE_KEYS.THEME, THEMES.LIGHT);
    const theme2 = getPreferredTheme();
    assert(theme2 === THEMES.LIGHT, "getPreferredTheme returns 'light' when localStorage is set to 'light'");

    // Test 3: setTheme updates document.documentElement.dataset.theme
    setTheme(THEMES.DARK);
    assert(document.documentElement.dataset.theme === THEMES.DARK, "setTheme updates document theme dataset");
    assert(localStorage.getItem(STORAGE_KEYS.THEME) === THEMES.DARK, "setTheme updates localStorage");

    console.log('\nAll tests passed successfully!');
} catch (error) {
    console.error(error.message);
    process.exit(1);
}
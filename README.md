# Mateo Valles - Portfolio

A highly optimized, zero-framework developer portfolio designed with pure semantic HTML5, vanilla CSS variables, and strict neo-brutalist design principles. This project showcases modern frontend architecture focused on system stability, performance, and clean code.

## Prerequisites and Installation

This project is built using purely vanilla web technologies (`HTML5`, `CSS3`, `JavaScript ES6`) and requires zero build tools, bundlers, or configuration. There are no dependencies to install.

- **Prerequisites**: Any modern web browser.
- **Installation**: Simply clone this repository to your local machine:
  ```bash
  git clone https://github.com/MValles02/Portfolio.git
  cd Portfolio
  ```

## How to Run Locally

Because the project utilizes native ES6 JavaScript modules, it is best run through a local web server to avoid CORS restrictions on local `file://` protocols.

## Architecture and Project Structure

The portfolio is designed for raw speed, maximum accessibility, and straightforward maintainability without the overhead of external libraries or frameworks.

- `index.html`: The singular entry point containing the semantic HTML structure. Includes an inline script in the `<head>` for early theme initialization to prevent Flash of Unstyled Content (FOUC).
- `css/`: Styling is separated into logical, modular vanilla CSS files:
  - `variables.css`: Global CSS custom properties acting as a design system and theme token registry.
  - `reset.css`: A basic modern CSS reset for consistent cross-browser baseline rendering.
  - `main.css`: Global typography rules and foundational layout constraints.
  - `components.css`: Scoped styling for individual UI components (buttons, cards, headers).
- `js/`: Native Vanilla JavaScript handling client-side interactivity (like dark mode toggling):
  - `main.js`: The main application script, imported as an ES module.
  - `modules/`: Subdirectory encouraging modular script architecture. The `theme.js` module now dynamically updates image assets based on the active theme.
- `assets/`: Directory for static assets, including project images and the downloadable CV. Favicon link type updated to `image/png`.
- `.gitignore`: Strictly configured to ignore `.agent/` and other non-essential files, keeping the repository pristine and optimized for direct deployment via platforms like Cloudflare Pages.

## Testing

The project includes a lightweight testing suite for core logic (e.g., theme switching) that runs in a standard Node.js environment without external dependencies.

To run the tests, execute:
```bash
node test/theme.test.mjs
```
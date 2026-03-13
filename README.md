# React Todo App

A beautiful, modern React-based Todo Application built with a glassmorphism UI, animated gradients, and Lottie animations. This app runs entirely in the browser using standalone React, ReactDOM, and Babel, with no complex build steps required for basic usage.

## Features

- **Modern UI**: Glassmorphism design with a dynamic, smoothly animating gradient background.
- **Task Management**: Add, edit, and delete tasks easily.
- **Timestamps**: Automatically captures and displays the creation date and time for each task.
- **Persistent Storage**: Saves your tasks to the browser's `localStorage` so they aren't lost when you refresh the page.
- **Animations**: Integrates Lottie web player for engaging, lightweight animations.
- **Responsive**: Look great on both desktop and mobile screens.

## Technologies Used

- **HTML5 & Vanilla CSS**: For structure and styling.
- **React 18**: Using CDN links for component-based UI development.
- **Babel Standalone**: In-browser JSX compilation.
- **LottieFiles**: For high-quality, lightweight animations.
- **FontAwesome**: For vector icons.
- **Google Fonts**: Custom 'Poppins' font family.

## Getting Started

### Prerequisites
You only need a modern web browser to view this application.
Node.js and npm are optional but recommended for local server hosting.

### Quick Start (No Setup)
1. Clone the repository or download the files.
2. Double-click on `index.html` to open it in your default web browser.

### Using Local Server (Recommended)
If you prefer to run the app using a local development server with hot-reloading:

1. Ensure you have Node.js and npm installed.
2. Open your terminal in the project directory.
3. Start the development server:
   ```bash
   npm run dev
   ```
4. The application will open automatically in your browser (usually at `http://127.0.0.1:5174/` or `http://localhost:5174/`). The server will automatically refresh the page when you save changes to the files.

## Project Structure

- `index.html`: The main entry point containing the HTML structure and external dependencies (React, Babel, Lottie).
- `styles.css`: Contains all custom styling, including the background animations and UI components.
- `app.js`: The React application logic, components, and state management.
- `package.json`: Configuration file for npm scripts (e.g., running the local server).

## Customization
You can easily change the Lottie animation by finding the `<lottie-player>` tag in `app.js` and replacing the `src` attribute with a JSON URL from [LottieFiles](https://lottiefiles.com/).

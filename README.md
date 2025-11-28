# 1MDM Seller Portal Clone

This is a responsive, high-fidelity replication of the 1MDM Seller landing page, built using React and Tailwind CSS. It features a modern design, interactive video elements, and a fully responsive layout optimized for all devices.

## Features

- **Responsive Navigation**: Adaptive navbar with a mobile hamburger menu and sticky positioning on scroll.
- **Interactive Video Section**: Custom video player with a branded overlay, play button animation, and aspect-ratio locking (16:9).
- **Modern UI/UX**:
  - Gradient hero sections
  - Hover effects on feature cards
  - Testimonial carousel layout
  - Tailwind CSS for styling
- **TypeScript**: Fully typed components for better maintainability.

## Project Structure

- `index.html`: Application entry point.
- `index.tsx`: React root mounting point.
- `App.tsx`: Main application layout component.
- `components/`: Contains all UI sections (Navbar, Hero, VideoSection, etc.).

## How to Run Locally

Since this project uses TypeScript and JSX (`.tsx`), it requires a build tool like Vite to run locally. It cannot be opened directly in a browser.

1.  **Create a Project**:
    ```bash
    npm create vite@latest 1mdm-clone -- --template react-ts
    cd 1mdm-clone
    npm install
    ```

2.  **Add Dependencies**:
    ```bash
    npm install lucide-react
    ```

3.  **Copy Files**:
    - Replace the `src/` content with the files provided here (excluding `index.html`).
    - Move `index.html` to the root (merging with Vite's index.html), ensuring the script tag points to `/src/index.tsx`.
    - Add the Tailwind CDN script to the `<head>` of `index.html`.

4.  **Run**:
    ```bash
    npm run dev
    ```

## Deployment

To deploy this live:

1.  **GitHub**: Push your configured Vite project to GitHub.
2.  **Vercel/Netlify**: Connect your repository. These platforms will automatically detect Vite and build the project for production.

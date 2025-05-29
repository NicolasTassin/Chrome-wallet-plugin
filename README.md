# Chrome Wallet Plugin

This project is a Chrome extension built with React, TypeScript, and Vite. It provides a wallet plugin UI as a browser extension popup, with background and content scripts for Chrome extension functionality.

## Project Architecture

```
/ (root)
├── public/
│   └── manifest.json
├── src/
│   ├── background/
│   │   └── index.ts        # Background service worker (main logic for extension events)
│   ├── content/
│   │   └── index.ts        # Content script (runs in the context of web pages)
│   ├── popup/
│   │   ├── App.tsx         # Main React component for popup
│   │   ├── App.css         # Popup component styles
│   │   ├── index.html      # Popup HTML entry (Chrome loads this file as the popup UI; contains <div id="root"></div> for React)
│   │   └── index.tsx       # Popup React entry point (mounts the React app into index.html at #root)
│   └── index.css           # Global styles
├── vite.config.ts
└── ...
```

- **public/manifest.json**: Chrome extension manifest, references built files for popup, background, and content scripts.
- **src/background/index.ts**: Background service worker logic (runs in the background, handles extension events).
- **src/content/index.ts**: Content script injected into web pages.
- **src/popup/**: All popup UI code, built with React.
- **src/index.css**: Global styles shared across extension UIs.

## Development & Testing

### 1. Install dependencies
```bash
npm install
```

### 2. Build the extension
```bash
npm run build
```
This will output the production-ready extension to the `dist/` folder.

### 3. Load the extension in Chrome
1. Open `chrome://extensions/` in your browser.
2. Enable **Developer mode** (toggle in the top right).
3. Click **Load unpacked** and select the `dist/` folder in your project.
4. The extension should now appear in your Chrome extensions bar.

### 4. Test the extension
- Click the extension icon to open the popup UI (React app).
- Interact with the popup to test wallet connect/disconnect.
- Use the background and content scripts as needed for your extension features.

## Notes
- If you make changes to the code, rebuild (`npm run build`) and reload the extension in Chrome.
- For development with hot reload, you can use Vite's dev server for the popup UI, but Chrome extension features require a full build.

---

For any questions, check the code comments or ask the project maintainer.

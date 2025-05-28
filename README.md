# Chrome Crypto Wallet Extension

A secure and user-friendly cryptocurrency wallet Chrome extension built with React, TypeScript, and ethers.js.

## Features

- Connect to Ethereum wallet
- View wallet address and balance
- Secure key management
- Transaction signing
- Modern UI with Tailwind CSS

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Loading the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked" and select the `dist` directory from this project
4. The extension should now be installed and visible in your Chrome toolbar

## Project Structure

```
├── src/
│   ├── popup/           # Extension popup UI
│   ├── background/      # Background scripts
│   ├── content/         # Content scripts
│   └── store/           # Redux store and slices
├── public/              # Static assets
└── dist/               # Built extension
```

## Security Considerations

- Never store private keys in plain text
- Use secure storage mechanisms
- Implement proper error handling
- Follow security best practices for key management

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT
# Installation

## Download

Download the latest release from [GitHub Releases](https://github.com/getcaja/caja/releases).

::: info
Caja is currently available for **macOS** only. Windows and Linux support is planned.
:::

## Build from Source

```bash
# Clone the repo
git clone https://github.com/getcaja/caja.git
cd caja

# Install dependencies
npm install

# Run in development
npm run tauri dev

# Build for production
npm run tauri build
```

::: info Prerequisites
Building from source requires [Node.js](https://nodejs.org/) 18+, [Rust](https://rustup.rs/), and the [Tauri v2 prerequisites](https://v2.tauri.app/start/prerequisites/) for your platform.
:::

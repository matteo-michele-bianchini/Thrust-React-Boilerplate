# 🏗️ Thrust-React-Boilerplate
A complete and modern React boilerplate.

Built on top of the official [React Router template](https://github.com/remix-run/react-router-templates/tree/main/default) — extended with a developer friendly, production-ready stack.

## 🎥 Demo

<video src="https://github.com/user-attachments/assets/caa5eb28-b282-424f-8a5f-89bd08e0f64f" width="600" autoplay loop muted></video>

https://github.com/user-attachments/assets/caa5eb28-b282-424f-8a5f-89bd08e0f64f


## Getting Started - added features

### Installation

Install the dependencies:

```bash
npm install
```

### Development
Launch a single tab dev environment with both unit ([Testing Library](https://testing-library.com/)) and e2e ([Playwright](https://playwright.dev/)) tests:

```bash
npm run dev:init
```
### macOs only
Same effect but opens three macOS terminal tabs (works in macOS Terminal only. Not from VS Code terminal):

```bash
npm run dev:init:macOS
```

Add this option to also open VS Code.

```bash
npm run dev:init:macOS -- --vscode
```
### Testing
Unit testing
```bash
npm run test:unit
```
E2e testing
```bash
npm run test:e2e
```

### Git PreCommit

 You get Git pre commit checks and tests using [Husky](https://github.com/typicode/husky) by default.

To avoid pre commit checks:
```bash
git commit -n -m "This commit is not tested"
```
### 🚀 Features

|  |  |  |
|:----:|:------|:-------------|
| ⚡ | **[Vite](https://vitejs.dev/)** + **[TypeScript](https://www.typescriptlang.org/)** | Lightning-fast dev server with HMR and type safety |
| 🧭 | **[React Router](https://reactrouter.com/)** | Modern routing with data APIs, loaders, and mutations |
| 🌐 | **[Redux Toolkit](https://redux-toolkit.js.org/)** | Scalable global state with persistence |
| 🧠 | **[RTK Query](https://redux-toolkit.js.org/rtk-query/overview)** + **[MSW](https://mswjs.io/)** | Data fetching with mock server |
| 🎨 |**[Tailwind CSS](https://tailwindcss.com/)** + **[shadcn/ui](https://ui.shadcn.com/)** | Utility-first styling and accessible UI components.<br>Dark mode ready |
| ✅ | **[Vitest](https://vitest.dev/)** + **[Testing Library](https://testing-library.com/)**  + **[Playwright](https://playwright.dev/)**| Unit and end-to-end testing |
| { }  | **[ESLint](https://eslint.org/)** | Code analysis and auto-formatting |

## Other commands

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```
---
Built with ❤️ by [Matteo](https://github.com/matteo-michele-bianchini).

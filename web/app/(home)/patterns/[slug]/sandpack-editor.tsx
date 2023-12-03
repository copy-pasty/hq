"use client";

/**
 * Next.js 14 (or 13 for that matter) doesn't work with sandpack.
 *
 * Enable editor when this issue is resolved:
 * https://github.com/codesandbox/sandpack/issues/955
 */

import { Sandpack } from "@codesandbox/sandpack-react";

export function SandpackEditor() {
  return (
    <Sandpack
      theme="dark"
      files={nextjsTemplate}
      options={{
        activeFile: "/pages/index.js",
      }}
      customSetup={{
        entry: "/pages/index.js",
        environment: "node",
      }}
    />
  );
}

const commonFiles = {
  "/styles.css": {
    code: `body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}`,
  },
};

const nextjsTemplate = {
  ...commonFiles,
  "/pages/_app.js": {
    code: `import '../styles.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}`,
  },
  "/pages/index.js": {
    code: `export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
  
`,
  },
  "/next.config.js": {
    code: `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
}

module.exports = nextConfig
`,
  },
  "/package.json": {
    code: JSON.stringify({
      name: "my-app",
      version: "0.1.0",
      private: true,
      scripts: {
        dev: "NEXT_TELEMETRY_DISABLED=1 next dev",
        build: "next build",
        start: "next start",
        lint: "next lint",
      },
      dependencies: {
        next: "13.3.2",
        react: "18.2.0",
        "react-dom": "18.2.0",
        "@next/swc-wasm-nodejs": "13.3.2",
      },
    }),
  },
};

const nextjsTemplate2 = {
  "/app/page.tsx": {
    code: `export default function HomePage() {
  return <h1>Hello world</h1>;
}
  `,
  },
  "/app/layout.tsx": {
    code: `import { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}    
`,
  },
  "/next.config.js": {
    code: `/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  forceSwcTransforms: true
}

module.exports = nextConfig;
`,
  },
  //   "/next-env.d.ts": {
  //     code: `/// <reference types="next" />
  // /// <reference types="next/image-types/global" />

  // // NOTE: This file should not be edited
  // // see https://nextjs.org/docs/basic-features/typescript for more information.
  // `,
  //   },
  "/tsconfig.json": {
    code: `{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
  },
  "include": ["next-env.d.ts"],
  "exclude": ["node_modules"]
}`,
  },
  "/package.json": {
    code: JSON.stringify({
      private: true,
      main: "/app/page.tsx",
      scripts: {
        dev: "next dev",
        build: "next build",
        start: "next start",
        lint: "next lint",
      },
      dependencies: {
        next: "14.0.3",
        react: "18.2.0",
        "react-dom": "18.2.0",
        zod: "3.22.4",
      },
      devDependencies: {
        "@types/node": "20.10.2",
        "@types/react": "18.2.41",
        "@types/react-dom": "18.2.17",
        typescript: "5.3.2",
      },
    }),
  },
};

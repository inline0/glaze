import { RootLayout } from "onedocs";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import "../app.css";
import config from "../../onedocs.config";

const socialCard = "https://glaze.dev/og.jpg";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: config.title },
      {
        name: "description",
        content: "The utility-based animation framework for the web.",
      },
      {
        name: "og:description",
        content: "The utility-based animation framework for the web.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: socialCard },
      { name: "twitter:site:domain", content: "glaze.dev" },
      { name: "twitter:url", content: "https://glaze.dev" },
      { name: "og:image", content: socialCard },
      { name: "apple-mobile-web-app-title", content: "Glaze" },
    ],
    links: [
      { rel: "icon", href: config.icon ?? "/icon.png" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootDocument,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <style
          dangerouslySetInnerHTML={{
            __html: `:root{--color-fd-border:hsla(0,0%,80%,50%);--color-fd-primary:hsl(0,0%,9%)}.dark{--color-fd-border:hsla(0,0%,40%,20%);--color-fd-primary:hsl(0,0%,98%)}@media(prefers-color-scheme:dark){:root:not(.light){--color-fd-border:hsla(0,0%,40%,20%);--color-fd-primary:hsl(0,0%,98%)}}@layer base{*,::before,::after{border-color:var(--color-fd-border)}}`,
          }}
        />
        {process.env.NODE_ENV === "production" ? (
          <script
            defer
            data-domain="glaze.dev"
            src="https://plausible.io/js/script.js"
          />
        ) : null}
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { RootProvider } from "fumadocs-ui/provider/next";
import { FontHead } from "onedocs";
import { createMetadata } from "onedocs/metadata";
import config from "../../onedocs.config";
import "./globals.css";

export const metadata = createMetadata(config, {
  baseUrl: "https://glaze.inline0.dev",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <FontHead />
        <script
          async
          src="https://plausible.io/js/pa-ojSsvoWfnUpKliI0WlVmp.js"
        />
        <script>
          {`window.plausible=window.plausible||function()
          {(plausible.q = plausible.q || []).push(arguments)}
          ,plausible.init=plausible.init||function(i){(plausible.o = i || {})};
          plausible.init()`}
        </script>
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

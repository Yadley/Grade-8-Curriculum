import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { ReactLenis } from "lenis/react";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "African Literature Hub";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "African Literature Hub · Grade 8 English" },
      {
        name: "description",
        content:
          "Supplementary instructional packages for Grade 8 English teachers under the Revised K to 10 Curriculum. Ten African literary works with lesson paths, vocabulary, and intercultural bridges.",
      },
      { name: "theme-color", content: "#FBF6EE" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500;1,9..144,600&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <ReactLenis
          root
          options={{
            autoRaf: true,
            anchors: { offset: -72 },
            lerp: 0.085,
            allowNestedScroll: true,
            stopInertiaOnNavigate: true,
          }}
        >
          <AuthProvider>
            <Outlet />
          </AuthProvider>
        </ReactLenis>
        <Scripts />
      </body>
    </html>
  ),
});

export { APP_NAME };

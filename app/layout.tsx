import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Apoya a VOX – Iniciativa Ciudadana por España | Vota VOX",
    template: "%s | VotaVOX — Iniciativa Independiente",
  },
  description:
    "Únete a miles de españoles que apoyan a VOX. Descubre las razones para votar VOX: unidad, seguridad, familia y libertad. Iniciativa independiente.",
  keywords: [
    "vox españa",
    "votar vox",
    "apoyo a vox",
    "razones vox",
    "vox propuestas",
    "vox inmigración",
    "vox unidad",
  ],
  authors: [{ name: "Simpatizantes de VOX — Iniciativa Independiente" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: { "es-ES": SITE_CONFIG.url },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Apoya a VOX – Iniciativa Ciudadana por España",
    description:
      "Únete a miles de españoles que apoyan a VOX. Razones para votar VOX: unidad, seguridad, familia y libertad.",
    images: [
      {
        url: "/archivo/images/espana_unida_con_vox.jpg",
        width: 1200,
        height: 630,
        alt: "Apoya a VOX – Iniciativa Ciudadana por España",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apoya a VOX – Iniciativa Ciudadana por España",
    description:
      "Únete a miles de españoles que apoyan a VOX. Descubre las razones para votar VOX.",
    images: ["/archivo/images/espana_unida_con_vox.jpg"],
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Apoyo a VOX - Iniciativa Ciudadana",
  url: SITE_CONFIG.url,
  description:
    "Iniciativa independiente de simpatizantes para fomentar el voto a VOX en España.",
  inLanguage: "es-ES",
  publisher: {
    "@type": "Organization",
    name: "Iniciativa Ciudadana Independiente",
    url: SITE_CONFIG.url,
    description: "No afiliada a VOX ni a instituciones oficiales.",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VotaVOX — Iniciativa Ciudadana Independiente",
  url: SITE_CONFIG.url,
  description:
    "Iniciativa ciudadana independiente de simpatizantes. Sitio no oficial. No vinculado al partido VOX ni a ninguna institución.",
  disclaimer: SITE_CONFIG.disclaimer,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-ES" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/mapa_peninsula_iberica_espana.png"
        />
        <link
          rel="apple-touch-icon"
          href="/mapa_peninsula_iberica_espana.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Saltar al contenido principal
        </a>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}

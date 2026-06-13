import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

const themeInitScript = `
  try {
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", theme === "dark" || (!theme && prefersDark));
    document.documentElement.classList.toggle("light", theme === "light");
  } catch {}
`;

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio | Farah Azman",
  description: "Professional portfolio of Farah Azman",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Portfolio | Farah Azman",
    description: "Professional portfolio of Farah Azman",
    siteName: "Farah Azman",
    type: "website",
    url: "https://farahazman.example.com",
  },
  twitter: {
    card: "summary",
    title: "Portfolio | Farah Azman",
    description: "Professional portfolio of Farah Azman",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <SmoothScrollProvider>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Navbar />
          <div id="main-content" className="flex-1 pt-[76px]">{children}</div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

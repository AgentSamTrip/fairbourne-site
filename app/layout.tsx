import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fairbourne Capital",
  description: "A private investment office.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${inter.variable}`}>
      <body>
        <header className="border-b border-[var(--color-rule)]">
          <nav className="mx-auto flex max-w-[680px] items-center justify-between px-6 py-6">
            <Link href="/" className="no-underline">
              <Image
                src="/fairbourne-logo.jpg"
                alt="Fairbourne Capital"
                width={140}
                height={60}
                style={{ height: "48px", width: "auto" }}
                priority
              />
            </Link>
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link href="/about" className="text-[var(--color-ink)] no-underline hover:text-[var(--color-navy)]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-[var(--color-ink)] no-underline hover:text-[var(--color-navy)]">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--color-ink)] no-underline hover:text-[var(--color-navy)]">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="mx-auto max-w-[680px] px-6 py-20">{children}</main>
        <footer className="mt-24 border-t border-[var(--color-rule)]">
          <div className="mx-auto max-w-[680px] px-6 py-10 text-xs text-[var(--color-muted)] leading-6">
            <p>
              Fairbourne Capital is a private investment office. Content on this site is published for
              informational purposes only and does not constitute investment advice, an offer, or a
              solicitation. Fairbourne Capital is not authorised or regulated by the Financial Conduct
              Authority.
            </p>
            <p className="mt-4">© {new Date().getFullYear()} Fairbourne Capital.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

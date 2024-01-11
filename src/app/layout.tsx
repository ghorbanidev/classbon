import QueryProvider from "@/providers/react-query-provider";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import "./globals.css";
import { Figtree, Vazirmatn } from "next/font/google"
import NextTopLodaer from "nextjs-toploader"

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree"
})

const Vazir = Vazirmatn({
  display: "swap",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazir"
})

// Local Font Start

// const yourLocalFontName = localFont({
//   src: [
//     {
//       path: "../../public/fonts/YourFont",
//       weight: "100",
//       style: "normal"
//     },
//     {
//       path: "../../public/fonts/YourFont",
//       weight: "300",
//       style: "normal"
//     },
//     {
//       path: "../../public/fonts/YourFont",
//       weight: "400",
//       style: "normal"
//     },
//     {
//       path: "../../public/fonts/YourFont",
//       weight: "600",
//       style: "normal"
//     },
//     {
//       path: "../../public/fonts/YourFont",
//       weight: "700",
//       style: "normal"
//     },
//     {
//       path: "../../public/fonts/YourFont",
//       weight: "900",
//       style: "normal"
//     },
//   ],

//   variable: "--font-yekanbakh"
// })

// Local Font End


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" className={`dark ${figtree.variable} ${Vazir.variable}`}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <NextTopLodaer showSpinner={false} color="var(--color-prima)" />
        <QueryProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}

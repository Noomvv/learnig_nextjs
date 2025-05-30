import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({
  weight: ["400", "700"], // Укажите нужные веса
  subsets: ["latin"],
  display: "swap", // Рекомендуется для улучшения рендеринга шрифта
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}

import localFont from "next/font/local"
import "./scss/main.scss"

//Components
import Header from "./components/header/header"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const ubuntuRegular = localFont({
  src: "./fonts/UbuntuMono-Regular.woff",
  variable: "--font-ubuntu-regular",
  weight: "400"
})
const ubuntuBold = localFont({
  src: "./fonts/UbuntuMono-Bold.woff",
  variable: "--font-ubuntu-bold",
  weight: "700"
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntuRegular.variable} ${ubuntuBold.variable}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}

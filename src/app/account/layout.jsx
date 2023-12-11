import { Montserrat } from "next/font/google"
import "./../globals.scss"

import { Providers } from "@/Components/Providers"
const MontserratFont = Montserrat({ subsets: ["latin"] })

import Header from "@/Sections/Header"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function AccountLayout({ children }) {
  return (
    <html lang="en">
      <body className={MontserratFont.className}>
        <Providers>
          <Header isLogined={true} />
          <main className="main account">{children}</main>
        </Providers>
      </body>
    </html>
  )
}

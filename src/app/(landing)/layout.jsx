import { Montserrat } from "next/font/google"
import "./../globals.scss"
import Header from "@/Sections/Header"
import Footer from "@/Sections/Footer"
import { Providers } from "@/Components/Providers"

const MontserratFont = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function LandingLayout({ children }) {
  return (
    <html lang="en">
      <body className={MontserratFont.className}>
        <Providers>
          <Header isLanding={true} />
          <main className="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

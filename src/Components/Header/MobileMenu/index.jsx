import { scroller } from "react-scroll"
import Button from "@/Components/Button"
import styles from "./MobileMenu.module.scss"
import Link from "next/link"

const MobileMenu = ({ items, isShow, toggleVisibility }) => {
  const handleClickMobileMenuItem = (target) => {
    scroller.scrollTo(target, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -70,
    })
    toggleVisibility()
  }

  return (
    <div
      className={`${styles["mobile-menu"]} ${isShow ? styles["active"] : ""}`}
    >
      <div className={styles["mobile-menu__wrapper"]}>
        <div className={styles["mobile-menu__nav"]}>
          {items &&
            items.map((item) => {
              const title =
                item.find((field) => field.name === "title")?.value || ""
              const handle =
                item.find((field) => field.name === "handle_to")?.value || ""

              return (
                <div
                  onClick={() => handleClickMobileMenuItem(handle)}
                  key={`${handle}-mobile`}
                  className={styles["mobile-menu__nav-item"]}
                >
                  {title}
                </div>
              )
            })}
        </div>
        <div>
          <Link href={"/account/login"}>
            <Button variant="blue" label={"Зарегистрироваться"} />
          </Link>

          <div className={styles["mobile-menu__login"]}>
            <span>У вас есть аккаунт?</span>{" "}
            <Link href="/account/login">
              <u>Войти</u>
            </Link>
            <span className={styles["mobile-menu__login-icon"]}>
              <img src="/icons/login.svg" alt="login icon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu

import i18n from "i18next"
import Backend from "i18next-http-backend"
import { StrictMode, Suspense, lazy } from "react"
import { createRoot } from "react-dom/client"
import { initReactI18next, useTranslation } from "react-i18next"

import Logo from "../components/Logo"
import { API_BASE_URL, cN } from "../constants"
import hammerAnimation from "../constants/hammer.json"
import "./index.css"

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "fr", // if you're using a language detector, do not define the lng option
    fallbackLng: ["fr", "en", "ru"],

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },

    backend: {
      loadPath: `${API_BASE_URL}/i18n/{{lng}}`,
      crossDomain: true,
    },
  })

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Error500 />
  </StrictMode>
)

const Lottie = lazy(() => import("lottie-react"))

export function Error500() {
  const [t] = useTranslation()

  return (
    <div
      className={cN(
        "relative w-screen h-screen overflow-hidden bg-stone-50 dark:bg-stone-600 text-stone-800 dark:text-stone-50",
        "py-6 lg:py-16 px-8 lg:px-[8vw] 2xl:px-[calc(5rem_+_3vw)] 3xl:px-[8vw]"
      )}
    >
      <div className="flex sticky z-20">
        <Logo />
      </div>
      <div className="absolute inset-0 overflow-hidden flex justify-center items-center">
        <Suspense fallback={<div>Loading...</div>}>
          <Lottie
            animationData={hammerAnimation}
            className="flex max-h-full overflow-hidden text-stone-200 dark:text-stone-800"
          />
        </Suspense>
      </div>
      <div className="absolute inset-0 overflow-hidden flex flex-col items-center justify-center">
        <h1 className="pb-24 font-archivo text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl whitespace-nowrap">
          {t("error.500", "Erreur 500")}
        </h1>
      </div>
    </div>
  )
}

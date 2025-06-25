"use client"

import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
      <footer className="py-8 border-t border-border grid-bg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm font-medium text-foreground">
                {t("name.1")} <span className="text-primary">{t("name.2")}</span>
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs text-muted-foreground">
                © {currentYear} Simeon Sabev. {t("footer.rights")}
              </p>
            </div>
          </div>
        </div>
      </footer>
  )
}

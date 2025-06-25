export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border grid-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm font-medium text-foreground">
              SIMEON <span className="text-primary">SABEV</span>
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs text-muted-foreground">© {currentYear} Simeon Sabev. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

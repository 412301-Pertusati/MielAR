import { ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary-foreground">
                  <path
                    d="M12 2C12 2 7 4 7 8C7 10 8 11 8 13C8 15 7 16 7 18C7 20 9 22 12 22C15 22 17 20 17 18C17 16 16 15 16 13C16 11 17 10 17 8C17 4 12 2 12 2Z"
                    fill="currentColor"
                  />
                  <ellipse cx="12" cy="12" rx="2" ry="3" fill="white" opacity="0.3" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-bold text-foreground">MielAR</span>
            </div>

            <nav className="hidden items-center gap-6 md:flex">
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <a
                href="#productos"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Productos
              </a>
              <a
                href="#productores"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Productores
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Ingresar
            </Button>
            <Button variant="outline" size="icon" className="relative bg-transparent">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

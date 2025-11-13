export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
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
              <span className="font-serif text-xl font-bold text-foreground">MielAR</span>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              Marketplace de miel artesanal del Valle de Calamuchita y Sierras Chicas. Conectando productores con
              consumidores.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#productos" className="text-muted-foreground hover:text-primary transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#productores" className="text-muted-foreground hover:text-primary transition-colors">
                  Productores
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Soporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Envíos
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Vender en MielAR
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 MielAR. Todos los derechos reservados. Miel artesanal de Córdoba, Argentina.</p>
        </div>
      </div>
    </footer>
  )
}

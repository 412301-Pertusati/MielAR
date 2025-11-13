import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-8">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Del productor a tu mesa
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl">
                Comprá miel artesanal directamente de productores regionales
              </h1>
              <p className="text-lg text-muted-foreground text-pretty md:text-xl">
                Descubrí la auténtica miel del Valle de Calamuchita y Sierras Chicas. Trazabilidad garantizada, calidad
                artesanal.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 text-base">
                Explorar productos
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                Conocé los productores
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-muted lg:aspect-[4/3]">
              <img
                src="/apicultor-trabajando-con-colmenas-en-sierras-argen.jpg"
                alt="Apicultor trabajando con colmenas"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl border border-border bg-card p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary">
                    <path
                      d="M9 11L12 14L22 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-muted-foreground">Artesanal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

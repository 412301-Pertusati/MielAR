import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, MapPin } from "lucide-react"

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Miel de Azahar",
      producer: "Apícola El Manantial",
      location: "Santa Rosa de Calamuchita",
      price: 3200,
      image: "/miel-artesanal-frasco-azahar-luz-natural.jpg",
      badge: "Más vendido",
    },
    {
      id: 2,
      name: "Miel Multifloral",
      producer: "Colmenar Las Sierras",
      location: "Villa General Belgrano",
      price: 2800,
      image: "/miel-multifloral-frasco-cristal-rustico.jpg",
    },
    {
      id: 3,
      name: "Miel de Eucalipto",
      producer: "Miel Serrana",
      location: "La Cumbrecita",
      price: 3500,
      image: "/miel-eucalipto-frasco-vidrio-etiqueta-artesanal.jpg",
    },
    {
      id: 4,
      name: "Miel Orgánica",
      producer: "Bio Miel Valle",
      location: "Yacanto de Calamuchita",
      price: 4200,
      image: "/miel-organica-certificada-frasco-premium.jpg",
      badge: "Certificada",
    },
  ]

  return (
    <section id="productos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">Productos Destacados</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Explorá nuestra selección de mieles artesanales de la región. Cada frasco cuenta la historia de su
            productor.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                {product.badge && (
                  <div className="absolute left-3 top-3 z-10 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {product.badge}
                  </div>
                )}
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg text-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.producer}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{product.location}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <div className="text-2xl font-bold text-foreground">${product.price.toLocaleString("es-AR")}</div>
                    <div className="text-xs text-muted-foreground">Frasco 500g</div>
                  </div>
                  <Button size="icon" className="h-10 w-10 shrink-0">
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Ver todos los productos
          </Button>
        </div>
      </div>
    </section>
  )
}

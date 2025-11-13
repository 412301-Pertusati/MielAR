import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Award } from "lucide-react"

export function FeaturedProducers() {
  const producers = [
    {
      id: 1,
      name: "Apícola El Manantial",
      location: "Santa Rosa de Calamuchita",
      experience: "25 años de experiencia",
      image: "/apicultor-argentino-con-colmenas-sierras.jpg",
      products: 12,
    },
    {
      id: 2,
      name: "Colmenar Las Sierras",
      location: "Villa General Belgrano",
      experience: "15 años de experiencia",
      image: "/apicultora-mujer-trabajando-abejas-naturaleza.jpg",
      products: 8,
    },
    {
      id: 3,
      name: "Miel Serrana",
      location: "La Cumbrecita",
      experience: "30 años de experiencia",
      image: "/productor-miel-artesanal-campo-argentino.jpg",
      products: 15,
    },
    {
      id: 4,
      name: "Bio Miel Valle",
      location: "Yacanto de Calamuchita",
      experience: "Certificación orgánica",
      image: "/apicultor-organico-certificado-sierras-cordoba.jpg",
      products: 6,
    },
  ]

  return (
    <section id="productores" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">Productores Destacados</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Conocé a los apicultores que mantienen viva la tradición de la miel artesanal en nuestras sierras.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {producers.map((producer) => (
            <Card
              key={producer.id}
              className="group overflow-hidden border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={producer.image || "/placeholder.svg"}
                  alt={producer.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-3">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-foreground text-balance">{producer.name}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span className="text-pretty">{producer.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-primary">
                    <Award className="h-4 w-4 shrink-0" />
                    <span>{producer.experience}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="text-sm text-muted-foreground">{producer.products} productos</div>
                  <Button variant="ghost" size="sm">
                    Ver perfil
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

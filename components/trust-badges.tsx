import { QrCode, Shield, Truck } from "lucide-react"

export function TrustBadges() {
  const badges = [
    {
      icon: QrCode,
      title: "Trazabilidad QR",
      description: "Conocé el origen de tu miel",
    },
    {
      icon: Shield,
      title: "Pago Seguro",
      description: "Mercado Pago integrado",
    },
    {
      icon: Truck,
      title: "Envío Provincial",
      description: "Llegamos a toda Córdoba",
    },
  ]

  return (
    <section className="border-y border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div key={index} className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Separator } from "@/components/ui/separator"
import { CardDemo } from "../cards/cards"
import { CardDemo2 } from "../cards/cards2"
import { CardDemo3 } from "../cards/cards3"
import { CardDemo4 } from "../cards/cards4"

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm md:text-2xl leading-none font-medium">VINIL DA TAYLOR</h4>
        <p className="text-muted-foreground text-sm">
        Coleções de vinis da Taylor Swift disponíveis 
        </p>
      </div>

    <div className="my-5  flex gap-8">
      <CardDemo /> 
      <CardDemo2 />
      <CardDemo3 />
      <CardDemo4 />
    </div>

      <Separator className="my-4" />
     
    </div>
  )
}

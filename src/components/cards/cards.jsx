import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className={"text-2xl font-bold"}>Metodologia agil </CardTitle>
      </CardHeader>
      <CardContent>
        <img src="https://sankhya.com.br/wp-content/uploads/2022/12/Valores-do-manifesto-agil.png" className="w-60 mx-auto"/>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full cursor-pointer">
          R$50,00
        </Button>
        
      </CardFooter>
    </Card>
  )
}

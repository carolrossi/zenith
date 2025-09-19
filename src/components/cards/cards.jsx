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
        <CardTitle className={"text-2xl font-bold"}>Canva Premium </CardTitle>
      </CardHeader>
      <CardContent>
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/canva-icon.png" className="w-60 mx-auto"/>
        <p className="mt-5 text-gray-500">Crie designs com recursos e elementos ilimitados.</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full cursor-pointer">
        R$29,99/mês - 44% OFF
        </Button>
        
      </CardFooter>
    </Card>
  )
}

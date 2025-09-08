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

export function CardDemo3() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className={"text-2xl font-bold"}>Midnights (Lavender Edition)</CardTitle>
      </CardHeader>
      <CardContent>
        <img src="https://universalmusic.vtexassets.com/arquivos/ids/180054-1200-auto?v=638911545613300000&width=1200&height=auto&aspect=true" className="w-68 m mx-auto"/>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full cursor-pointer">
          R$50,00
        </Button>
        
      </CardFooter>
    </Card>
  )
}

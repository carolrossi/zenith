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

export function CardDemo4() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className={"text-2xl font-bold"}>Combo Pacote Office</CardTitle>
      </CardHeader>
      <CardContent>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg/648px-Microsoft_Office_logo_%282013%E2%80%932019%29.svg.png" className="w-50 m mx-auto"/>
        <p className="mt-5 text-gray-500"> Word, Excel e PowerPoint originais com licença.</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full cursor-pointer">
        R$149,99 - 58% OFF
        </Button>
        
      </CardFooter>
    </Card>
  )
}

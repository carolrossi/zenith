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
        <CardTitle className={"text-2xl font-bold"}>Trello Premium</CardTitle>
      </CardHeader>
      <CardContent>
      <img src="https://images.icon-icons.com/2407/PNG/512/trello_icon_146085.png" className="w-60 mx-auto"/>
      <p className="mt-5 text-gray-500"> Gerencie tarefas com automações e quadros extras.</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full cursor-pointer">
        R$44,99/mês - 37% OFF
        </Button>
        
      </CardFooter>
    </Card>
  )
}

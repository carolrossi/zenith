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

export function CardDemo2() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className={"text-2xl font-bold"}>Notion Pro </CardTitle>
      </CardHeader>
      <CardContent>
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" className="w-60 mx-auto"/>
      <p className="mt-5 text-gray-500">Organize ideias, tarefas e projetos com eficiência.</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full cursor-pointer">
        R$49,99/mês - 41% OFF
        </Button>
        
      </CardFooter>
    </Card>
  )
}

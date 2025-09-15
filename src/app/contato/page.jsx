import Contact02Page from "@/components/contact-02/contact-02"
import { NavigationMenuDemo } from "@/components/ui/header/page"
import { Header } from "@radix-ui/react-accordion"


export default function Contato() {
    return(
        <>
        <header className="flex justify-center mt-5">
        <NavigationMenuDemo />
        </header>

        <Contact02Page />
        </>
    )
}
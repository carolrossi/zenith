import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact02Page = () => (
  <div className=" flex items-center justify-center py-10">
    <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
      <b className="text-muted-foreground uppercase font-semibold text-sm">
        Entre em Contato
      </b>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
        Converse com nossa equipe amigável!
      </h2>
      <p className="mt-3 text-base sm:text-lg text-muted-foreground">
        Adoraríamos ouvir você. Preencha este formulário ou envie-nos um e-mail.
      </p>
      <div className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          <div>
            <div
              className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MailIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">E-mail</h3>
            <p className="my-2.5 text-muted-foreground">
              Nossa equipe amigável está aqui para ajudar.
            </p>
            <Link
              className="font-medium text-primary"
              href="mailto:contato@zenithapp.com">
              contato@zenithapp.com
            </Link>
          </div>
          <div>
            <div
              className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MessageCircle />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Chat ao vivo</h3>
            <p className="my-2.5 text-muted-foreground">
              Nossa equipe amigável está aqui para ajudar.
            </p>
            <Link className="font-medium text-primary" href="#">
              Iniciar novo chat
            </Link>
          </div>
          <div>
            <div
              className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Escritório</h3>
            <p className="my-2.5 text-muted-foreground">
              Venha nos visitar em nossa sede.
            </p>
            <Link
              className="font-medium text-primary"
              href="https://map.google.com"
              target="_blank">
              Av. Paulista, 1000 <br /> São Paulo - SP, 01310-100
            </Link>
          </div>
          <div>
            <div
              className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <PhoneIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Telefone</h3>
            <p className="my-2.5 text-muted-foreground">
              Seg a Sex das 8h às 18h.
            </p>
            <Link
              className="font-medium text-primary"
              href="tel:+5511999999999">
              +55 (11) 99999-9999
            </Link>
          </div>
        </div>

        {/* Form */}
        <Card className="bg-accent shadow-none py-0">
          <CardContent className="p-6 md:p-8">
            <form>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="firstName">Nome</Label>
                  <Input
                    placeholder="Seu nome"
                    id="firstName"
                    className="mt-2 bg-white h-10 shadow-none" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input
                    placeholder="Seu sobrenome"
                    id="lastName"
                    className="mt-2 bg-white h-10 shadow-none" />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    id="email"
                    className="mt-2 bg-white h-10 shadow-none" />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Como podemos ajudar?"
                    className="mt-2 bg-white shadow-none"
                    rows={6} />
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <Checkbox id="acceptTerms" className="bg-background" />
                  <Label htmlFor="acceptTerms" className="gap-0">
                    Você concorda com nossos
                    <Link href="#" className="underline ml-1">
                      termos e condições
                    </Link>
                    <span>.</span>
                  </Label>
                </div>
              </div>
              <Button className="mt-6 w-full" size="lg">
                Enviar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default Contact02Page;
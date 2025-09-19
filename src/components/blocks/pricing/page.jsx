"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CircleCheck, CircleHelp } from "lucide-react";
import { useState } from "react";

const tooltipContent = {
  templates: "Acesso a diversos templates de planilhas, agendas e planejadores.",
  integrations: "Conecte-se com suas plataformas favoritas como Notion, Canva e Google Workspace.",
  storage: "Armazenamento seguro na nuvem para todos os seus arquivos e projetos.",
};

const YEARLY_DISCOUNT = 20;
const plans = [
  {
    name: "Básico",
    price: 100,
    description:
      "Ideal para quem está começando a organizar sua rotina e projetos.",
    features: [
      { title: "5 templates básicos" },
      { title: "Até 3 planilhas simultâneas" },
      { title: "1 integração básica", tooltip: tooltipContent.integrations },
      { title: "5GB de armazenamento", tooltip: tooltipContent.storage },
      { title: "Suporte por email" },
    ],
  },
  {
    name: "Profissional",
    price: 180,
    isRecommended: true,
    description:
      "Perfeito para profissionais que buscam máxima produtividade.",
    features: [
      { title: "20+ templates premium" },
      { title: "Planilhas e metas ilimitadas" },
      { title: "5 integrações premium", tooltip: tooltipContent.integrations },
      { title: "50GB de armazenamento", tooltip: tooltipContent.storage },
      { title: "Suporte prioritário 24/7" },
      { title: "Acesso a novos recursos" },
    ],
    isPopular: true,
  },
  {
    name: "Empresarial",
    price: 220,
    description:
      "Para equipes que precisam de colaboração e gestão avançada.",
    features: [
      { title: "Todos os templates premium" },
      { title: "Integrações ilimitadas", tooltip: tooltipContent.integrations },
      { title: "200GB de armazenamento", tooltip: tooltipContent.storage },
      { title: "Gestão de equipes e permissões" },
      { title: "Suporte dedicado com gerente de conta" },
      { title: "Personalização de branding" },
    ],
  },
];

const Pricing04 = () => {
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState("monthly");

  return (
    <>
    
    <div
      className=" bg-accent flex flex-col items-center justify-center  py-7 px-6">
      <h1
        className="text-5xl sm:text-6xl font-semibold text-center tracking-tighter">
        Nossos Planos
      </h1>
      <Tabs
        value={selectedBillingPeriod}
        onValueChange={setSelectedBillingPeriod}
        className="mt-8">
        <TabsList className="h-11 bg-background border rounded-full">
          <TabsTrigger
            value="monthly"
            className="px-4 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer">
            Mensal
          </TabsTrigger>
          <TabsTrigger
            value="yearly"
            className="px-4 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer">
            Anual (Economize {YEARLY_DISCOUNT}%)
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div
        className="mt-12 sm:mt-16 max-w-(--breakpoint-lg) mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn("relative p-6 bg-background border px-8", {
              "shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)] py-14 z-1 px-10 lg:-mx-2 overflow-hidden":
                plan.isPopular,
            })}>
            {plan.isPopular && (
              <Badge
                className="absolute top-10 right-10 rotate-45 rounded-none px-10 uppercase translate-x-1/2 -translate-y-1/2">
                Mais Popular
              </Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">
              R$
              {selectedBillingPeriod === "monthly"
                ? plan.price
                : plan.price * ((100 - YEARLY_DISCOUNT) / 100)}
              <span className="ml-1.5 text-sm text-muted-foreground font-normal">
                /mês
              </span>
            </p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>

            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className="w-full mt-6 rounded-full text-base cursor-pointer">
              Começar Agora <ArrowUpRight className="w-4 h-4" />
            </Button>
            <Separator className="my-8" />
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-1.5">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                  {feature.title}
                  {feature.tooltip && (
                    <Tooltip>
                      <TooltipTrigger className="cursor-help">
                        <CircleHelp className="h-4 w-4 mt-1 text-gray-500" />
                      </TooltipTrigger>
                      <TooltipContent>{feature.tooltip}</TooltipContent>
                    </Tooltip>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Pricing04;
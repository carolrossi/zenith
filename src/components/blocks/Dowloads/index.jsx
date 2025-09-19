import { Download, Monitor, Smartphone, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";

const Download2 = ({
    heading = "Disponível em Todos os Lugares",
    description = "Escolha sua plataforma e comece a usar nosso aplicativo imediatamente. Disponível em todos os dispositivos principais e sistemas operacionais.",
    platforms = {
        desktop: {
            title: "Computador",
            subtitle: "PC/Mac",
            description: "Solução completa para desktop.",
            buttonText: "Baixar",
            url: "#",
        },
        ios: {
            title: "Celular",
            subtitle: "iOS",
            description: "Desenvolvido para dispositivos iOS.",
            url: "#",
        },
        android: {
            title: "Celular / Tablet",
            subtitle: "Android",
            description: "Otimizado para o ecossistema Android.",
            url: "#",
        },
    },
}) => {
    return (
        <section className="bg-[#e0e7ff] py-32">
            <div className="">
                {/* Header Section */}
                <div className="mb-20 text-center">
                    <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        {heading}
                    </h2>
                    <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg">
                        {description}
                    </p>
                </div>

                {/* Download Options - Minimal Grid */}
                <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-3">
                    {/* Desktop */}
                    <div className="text-center">
                        <div className="bg-background mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-sm">
                            <Monitor className="h-10 w-10" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">
                            {platforms.desktop?.subtitle}
                        </h3>
                        <p className="text-muted-foreground mb-6 text-sm">
                            {platforms.desktop?.description}
                        </p>
                        <Button size="lg" asChild>
                            <a href={platforms.desktop?.url}>
                                <Download className="h-4 w-4" />
                                {platforms.desktop?.buttonText}
                            </a>
                        </Button>
                    </div>

                    {/* iOS */}
                    <div className="text-center">
                        <div className="bg-background mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-sm">
                            <Smartphone className="h-10 w-10" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">
                            {platforms.ios?.subtitle}
                        </h3>
                        <p className="text-muted-foreground mb-6 text-sm">
                            {platforms.ios?.description}
                        </p>
                        <a href={platforms.ios?.url} className="mx-auto block w-fit">
                            <img
                                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/appstore.png"
                                alt="Baixar na App Store"
                                className="h-10"
                            />
                        </a>
                    </div>

                    {/* Android */}
                    <div className="text-center">
                        <div className="bg-background mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-sm">
                            <Tablet className="h-10 w-10" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">
                            {platforms.android?.subtitle}
                        </h3>
                        <p className="text-muted-foreground mb-6 text-sm">
                            {platforms.android?.description}
                        </p>
                        <a href={platforms.android?.url} className="mx-auto block w-fit">
                            <img
                                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/googleplay.png"
                                alt="Disponível no Google Play"
                                className="h-10"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Download2 };
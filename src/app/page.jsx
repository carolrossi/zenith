import { SeparatorDemo } from "@/components/separator/separator";

import { NavigationMenuDemo } from "@/components/ui/header/page";

export default function Home() {
  return (
    <>
      <header className="flex justify-center">
        <img src="https://macmagazine.com.br/wp-content/uploads/2022/02/11-Apple-Logo-Current-600x600.png" className="w-12 " />
        <NavigationMenuDemo />
      </header>

      <main className="mx-auto container py-10">
       
        <SeparatorDemo />

      </main>
    </>
  );
}

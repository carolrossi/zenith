import { Hero47 } from "@/components/blocks/Hero";
import { SeparatorDemo } from "@/components/separator/separator";
import Testimonial04 from "@/components/testimonial-04/testimonial-04";

import { NavigationMenuDemo } from "@/components/ui/header/page";

export default function Home() {
  return (
    <>
      <header className="flex justify-center mt-5">
        {/* <img src="https://macmagazine.com.br/wp-content/uploads/2022/02/11-Apple-Logo-Current-600x600.png" className="w-12 " /> */}
        <NavigationMenuDemo />
      </header>

      <main className="mx-auto container py-10">

        <Hero47 />
       
        <SeparatorDemo />

        <Testimonial04 />

      </main>


    </>
  );
}

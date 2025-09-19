import { Download2 } from "@/components/blocks/Dowloads";
import { Hero47 } from "@/components/blocks/Hero";
import Footer05Page from "@/components/footer-05/footer-05";
import Navbar04Page from "@/components/navbar-04/navbar-04";
import { SeparatorDemo } from "@/components/separator/separator";
import Testimonial04 from "@/components/testimonial-04/testimonial-04";



export default function Home() {
    return (
        <>

            <header>
                <Navbar04Page />
            </header>


            <main className="mx-auto container py-10">

                <Hero47 />

                <SeparatorDemo />

                <Testimonial04 />


            </main>

                <Download2 />

                <Footer05Page />

        </>
    );
}

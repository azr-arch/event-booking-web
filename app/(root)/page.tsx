import FAQ from "@/components/shared/section/faq";
import Features from "@/components/shared/section/features";
import Header from "@/components/shared/header";
import { Hero } from "@/components/shared/section/hero";
import HowItWorks from "@/components/shared/section/how-it-works";
import Footer from "@/components/shared/footer";

export default function RootPage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <FAQ />
            </main>
            <Footer />
        </>
    );
}

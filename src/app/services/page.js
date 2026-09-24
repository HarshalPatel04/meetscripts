import ServicesHero from "@/components/services/ServicesHero";
import ServicesExplorer from "@/components/services/ServicesExplorer";
import ServicesSystem from "@/components/services/ServicesSystem";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
    return (
        <main>
            <ServicesHero />
            <ServicesExplorer />
            <ServicesSystem />
            <ServicesCTA />
        </main>
    );
}
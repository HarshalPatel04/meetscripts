import { notFound } from "next/navigation";

import { services } from "@/data/services";

import ServicesHero from "@/components/services/ServicesHero";
import ServiceDeliverables from "@/components/services/ServiceDeliverables";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServicePageCTA from "@/components/services/ServicePageCTA";
import ServiceNavigation from "@/components/services/ServiceNavigation";
import ServiceOverview from "@/components/services/ServiceOverview";

export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const service = services.find(
        (item) => item.slug === slug
    );

    if (!service) {
        return {
            title: "Service | MEETSCRIPTS TECHNOLOGIES",
        };
    }

    return {
        title: `${service.title} | MEETSCRIPTS TECHNOLOGIES`,
        description: service.description,
    };
}

export default async function ServicePage({ params }) {
    const { slug } = await params;

    const serviceIndex = services.findIndex(
        (item) => item.slug === slug
    );

    if (serviceIndex === -1) {
        notFound();
    }

    const service = services[serviceIndex];

    const previous =
        serviceIndex > 0
            ? services[serviceIndex - 1]
            : null;

    const next =
        serviceIndex < services.length - 1
            ? services[serviceIndex + 1]
            : null;

    return (
        <main>
            <ServicesHero service={service} />

            <ServiceOverview service={service} />

            <ServiceDeliverables service={service} />

            <ServiceProcess service={service} />

            <ServicePageCTA service={service} />

            <ServiceNavigation
                previous={previous}
                next={next}
            />
        </main>
    );
}
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import CaseStudyHero from "@/components/work/CaseStudyHero";
import CaseStudyOverview from "@/components/work/CaseStudyOverview";
import CaseStudyGallery from "@/components/work/CaseStudyGallery";
import CaseStudyDetails from "@/components/work/CaseStudyDetails";
import CaseStudyCTA from "@/components/work/CaseStudyCTA";
import CaseStudyNavigation from "@/components/work/CaseStudyNavigation";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const project = projects.find(
        (item) => item.slug === slug
    );

    if (!project) {
        return {
            title: "Work | MEETSCRIPTS TECHNOLOGIES",
        };
    }

    return {
        title: `${project.title} — MEETSCRIPTS TECHNOLOGIES`,
        description: project.description,
    };
}

export default async function CaseStudyPage({ params }) {
    const { slug } = await params;

    const projectIndex = projects.findIndex(
        (item) => item.slug === slug
    );

    if (projectIndex === -1) {
        notFound();
    }

    const project = projects[projectIndex];

    const previous =
        projectIndex > 0
            ? projects[projectIndex - 1]
            : null;

    const next =
        projectIndex < projects.length - 1
            ? projects[projectIndex + 1]
            : null;

    return (
        <main>
            <CaseStudyHero project={project} />

            <CaseStudyOverview project={project} />

            <CaseStudyGallery project={project} />

            <CaseStudyDetails project={project} />

            <CaseStudyCTA project={project} />

            <CaseStudyNavigation
                previous={previous}
                next={next}
            />
        </main>
    );
}
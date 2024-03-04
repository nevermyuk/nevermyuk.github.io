import ExperienceComponent from "@/components/ExperienceComponent";
import { Mdx } from "@/components/MdxComponents";
import ProjectCards from "@/components/ProjectCards";
import SocialsComponent from "@/components/SocialsComponent";
import { Meteors } from "@/components/ui/meteor";
import { allPages } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

function getHomePage() {
  const page = allPages.find((page) => page.slug === "/pages/home");
  return page;
}

export async function generateMetadata(): Promise<Metadata> {
  const page = getHomePage();

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function HomePage() {
  const page = getHomePage();
  if (!page) {
    notFound();
  }
  return (
    <>
      <div className="relative">
        <div className="w-full max-w-4xl mx-auto overflow-hidden">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <article className="prose dark:prose-invert relative z-10 p-4">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {page.title}
              </h1>
              {page.description && (
                <p className="text-xl">{page.description}</p>
              )}
              <Mdx code={page.body.code} />
            </article>
            <SocialsComponent />
            <Meteors number={20} />
          </div>
        </div>
      </div>

      <h2 className="scroll-m-20 mt-4 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Experience
      </h2>
      <ExperienceComponent />
      <h2
        className="scroll-m-20 mt-4 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
        id="projects"
      >
        Projects
      </h2>
      <ProjectCards />
    </>
  );
}

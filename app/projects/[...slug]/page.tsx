import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { Mdx } from "@/components/MdxComponents";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { IconWorld } from "@tabler/icons-react";
import { Metadata } from "next";
import Link from "next/link";

interface ProjectProps {
  params: {
    slug: string[];
  };
}

async function getProjectFromParams(params: ProjectProps["params"]) {
  const slug = params?.slug?.join("/");
  const project = allProjects.find((project) => project.slugAsParams === slug);

  if (!project) {
    null;
  }

  return project;
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const project = await getProjectFromParams(params);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export async function generateStaticParams(): Promise<
  ProjectProps["params"][]
> {
  return allProjects.map((project) => ({
    slug: project.slugAsParams.split("/"),
  }));
}

export default async function ProjectPage({ params }: ProjectProps) {
  const project = await getProjectFromParams(params);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      <h1 className="mb-2">{project.title}</h1>
      {project.description && (
        <p className="text-xl mt-0">{project.description}</p>
      )}
      <div className="flex items-center space-x-4">
        {project.repository && (
          <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
            <Link
              href={project.repository}
              target="_blank"
              className="p-4 relative flex flex-col "
            >
              <SiGithub />
            </Link>
          </span>
        )}
        {project.url && (
          <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
            <Link
              href={project.url}
              target="_blank"
              className="p-4 relative flex flex-col "
            >
              <IconWorld />
            </Link>
          </span>
        )}
      </div>

      <hr className="my-4" />
      <Mdx code={project.body.code} />
    </article>
  );
}

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

interface ProjectLinkProps {
  href: string;
  IconComponent: React.ElementType;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ href, IconComponent }) => (
  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm border rounded-full text-zinc-200 border-zinc-500 hover:bg-accent hover:text-accent-foreground">
    <Link href={href} target="_blank" className="p-4 relative flex flex-col">
      <IconComponent />
    </Link>
  </span>
);

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
          <ProjectLink href={project.repository} IconComponent={SiGithub} />
        )}
        {project.url && (
          <ProjectLink href={project.url} IconComponent={IconWorld} />
        )}
      </div>

      <hr className="my-4" />
      <Mdx code={project.body.code} />
    </article>
  );
}

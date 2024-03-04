import { allProjects } from "@/.contentlayer/generated";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { ColoredSkeleton } from "@/components/ColoredSkeleton";

const ProjectPage = () => {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {allProjects.map((project, i) => (
        <BentoGridItem
          key={project._id}
          title={project.title}
          description={project.description}
          header={<ColoredSkeleton />}
          link={project.slug}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
};

export default ProjectPage;

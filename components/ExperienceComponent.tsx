// components/ExperienceComponent.tsx

import { Experience, allExperiences } from "contentlayer/generated"; // Make sure the path matches your project structure
import { Mdx } from "./MdxComponents";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  const startDate = new Date(experience.startDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
  const endDate = experience.endDate
    ? new Date(experience.endDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
    : "Present";

  return (
    <div className="py-4">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {experience.role} 🔧 {experience.company}
      </h3>
      <h4 className=" text-xl font-semibold tracking-tight">
        {startDate} — {endDate}
      </h4>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {experience.serviceType}
      </h4>
      <article className="py-6 prose dark:prose-invert">
        <Mdx code={experience.body.code} />
      </article>
      {experience.technology.length ? (
        <div className="flex flex-wrap items-center gap-2 mt-4">
          {experience.technology.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      ) : null}
      <Separator className="mt-4" />
    </div>
  );
};

const ExperienceComponent = () => {
  const sortedExperiences = allExperiences.sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  return (
    <>
      {sortedExperiences.map((experience, index) => (
        <ExperienceItem key={index} experience={experience} />
      ))}
    </>
  );
};

export default ExperienceComponent;

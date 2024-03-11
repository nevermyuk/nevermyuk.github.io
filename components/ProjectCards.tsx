"use client";
import { allProjects } from "@/.contentlayer/generated";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "./ui/badge";

interface ProjectItem {
  title: string;
  description: string;
  link: string;
  technology: string[];
}

interface ProjectCardsProp {
  items: ProjectItem[];
  className?: string;
}

export const HoverEffectCards: React.FC<ProjectCardsProp> = ({
  items,
  className,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="h-full w-full p-2 overflow-hidden border  dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
            <CardHeader>
              <CardTitle className="tracking-wide">{item.title}</CardTitle>
              <CardDescription className="tracking-wide leading-relaxed h-20 overflow-ellipsis ">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              {item.technology.length ? (
                <div className="flex gap-2 mt-4 flex-wrap">
                  {item.technology.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

const ProjectCards = () => {
  const transformedProjects = allProjects.map((project) => ({
    title: project.title,
    description: project.description,
    link: project.slug,
    technology: project.technology,
  }));

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffectCards items={transformedProjects} />
    </div>
  );
};

export default ProjectCards;

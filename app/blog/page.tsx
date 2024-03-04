import WorkInProgress from "@/app/components/WorkInProgress";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogPage = () => {
  return <WorkInProgress />;
};

export default BlogPage;

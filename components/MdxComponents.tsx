import { MdxImage as Image } from "@/components/MdxImage";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  Image,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}

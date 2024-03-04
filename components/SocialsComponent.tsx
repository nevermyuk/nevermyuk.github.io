import { SiGithub, SiGmail, SiLinkedin } from "@icons-pack/react-simple-icons";
import Link from "next/link";

const socials = [
  {
    icon: <SiLinkedin size={20} />,
    href: "https://www.linkedin.com/in/zequanong/",
    label: "Linkedin",
    handle: "zequanong",
  },
  {
    icon: <SiGithub size={20} />,
    href: "https://github.com/nevermyuk",
    label: "Github",
    handle: "nevermyuk",
  },
  {
    icon: <SiGmail size={20} />,
    href: "mailto:zequanong@gmail.com",
    label: "Email",
    handle: "gmail",
  },
];

const SocialsComponent = () => {
  return (
    <div className="flex justify-center items-center space-x-4 my-4 mx-auto">
      {socials.map((s) => (
        <Link
          key={s.href}
          href={s.href}
          target="_blank"
          className="flex flex-col items-center text-center"
        >
          <span className="text-lg text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition duration-300 ease-in-out">
            {s.icon}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            {s.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SocialsComponent;

"use client";
import Link from "next/link";

export const navItems = [
  { pageName: "home", href: "/" },
  { pageName: "blog", href: "/blog" },
  { pageName: "projects", href: "/projects" },
  { pageName: "contact", href: "/contact" },
];

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10 my-16">
            {navItems.map(({ pageName, href }) => {
              return (
                <Link
                  key={pageName}
                  href={href}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                >
                  {pageName}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default Navbar;

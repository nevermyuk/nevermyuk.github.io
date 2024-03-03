"use client";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden ">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left" />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        quan
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">in development</h2>
      </div>
    </div>
  );
}

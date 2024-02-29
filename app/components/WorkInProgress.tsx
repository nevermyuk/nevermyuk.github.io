const WorkInProgress = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="text-center animate-fade-in-up">
        <h1 className="text-4xl sm:text-6xl md:text-9xl text-zinc-300 font-bold cursor-default mb-4">
          Work in Progress
        </h1>
        <p className="text-md md:text-lg text-zinc-400">1 + 1 = 2</p>
      </div>
    </div>
  );
};

export default WorkInProgress;

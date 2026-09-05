const BackgroundFX = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute top-[-15%] left-[-10%] w-[550px] h-[550px] rounded-full bg-primary/10 blur-[130px]" />
      <div className="absolute top-[35%] right-[-15%] w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[140px]" />
      <div className="absolute bottom-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
    </div>
  );
};

export default BackgroundFX;

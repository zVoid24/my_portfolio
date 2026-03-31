import { useEffect, useRef, useState } from "react";

const MouseGlow = () => {
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const targetRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setDotPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    const animate = () => {
      const lerp = 0.08;
      ringRef.current.x += (targetRef.current.x - ringRef.current.x) * lerp;
      ringRef.current.y += (targetRef.current.y - ringRef.current.y) * lerp;
      setRingPos({ x: ringRef.current.x, y: ringRef.current.y });
      animRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      cancelAnimationFrame(animRef.current);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Ring - follows with drag/delay */}
      <div
        className="pointer-events-none fixed z-50"
        style={{
          left: ringPos.x,
          top: ringPos.y,
          transform: "translate(-50%, -50%)",
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid hsl(185 80% 55% / 0.45)",
        }}
      />
      {/* Dot - instant, follows cursor exactly */}
      <div
        className="pointer-events-none fixed z-50"
        style={{
          left: dotPos.x,
          top: dotPos.y,
          transform: "translate(-50%, -50%)",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "hsl(185 80% 60%)",
          boxShadow: "0 0 8px hsl(185 80% 50% / 0.5)",
        }}
      />
    </>
  );
};

export default MouseGlow;

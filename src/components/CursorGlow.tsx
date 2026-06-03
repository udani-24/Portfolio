import { useEffect, useState, useCallback } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorDot, setCursorDot] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    requestAnimationFrame(() => {
      setCursorDot({ x: e.clientX, y: e.clientY });
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover detection
    const handleTargetHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.hoverable') ||
        target.closest('.design-card') ||
        target.closest('.glow-card') ||
        target.closest('.glow-btn') ||
        target.closest('.tag')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mouseover', handleTargetHover);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleTargetHover);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main glow */}
      <div
        className="cursor-glow"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
      />
      {/* Secondary smaller glow */}
      <div
        className="fixed pointer-events-none z-0"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(59, 130, 246, 0.06) 40%, transparent 70%)',
          transition: 'opacity 0.3s',
          opacity: isVisible ? 1 : 0,
        }}
      />
      {/* Cursor dot */}
      <div
        className={`cursor-dot ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${cursorDot.x}px`,
          top: `${cursorDot.y}px`,
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
    </>
  );
}

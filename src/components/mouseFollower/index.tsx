import { useEffect, useState, useRef } from "react";

function CuteEyeFollower() {
  const [angle, setAngle] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const eyeRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // Check if device is mobile/touch device
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current || isMobile) return;

      const eye = eyeRef.current.getBoundingClientRect();
      const eyeX = eye.left + eye.width / 2;
      const eyeY = eye.top + eye.height / 2;

      const dx = e.clientX - eyeX;
      const dy = e.clientY - eyeY;
      const rad = Math.atan2(dy, dx);
      const deg = (rad * 180) / Math.PI;

      setAngle(deg);
    };

    // Mobile looking around animation
    let lookAroundInterval: NodeJS.Timeout;
    if (isMobile) {
      lookAroundInterval = setInterval(() => {
        const randomAngle = Math.random() * 360;
        setAngle(randomAngle);
      }, 2000 + Math.random() * 3000); // Look around every 2-5 seconds
    }

    // Random blinking
    const blinkInterval = setInterval(() => {
      if (!isHovering) { // Don't blink when hovering
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
      }
    }, 3000 + Math.random() * 2000);

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      clearInterval(blinkInterval);
      if (lookAroundInterval) clearInterval(lookAroundInterval);
    };
  }, [isHovering, isMobile]);

  return (
    <div 
      className="group w-15 h-15 cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <svg 
        ref={eyeRef} 
        viewBox="0 0 120 120" 
        className={`w-full h-full drop-shadow-lg transition-transform duration-300 ${
          isHovering ? 'scale-80' : 'scale-100'
        }`}
      >
        {/* Outer eye shape with gradient */}
        <defs>
          <radialGradient id="eyeGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#f8f9fa" />
            <stop offset="100%" stopColor="#e9ecef" />
          </radialGradient>
          <radialGradient id="irisGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#4dabf7" />
            <stop offset="50%" stopColor="#339af0" />
            <stop offset="100%" stopColor="#1c7ed6" />
          </radialGradient>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#00000020"/>
          </filter>
        </defs>

        {/* Eyelashes - top */}
        <g stroke="#03045E" strokeWidth="2" strokeLinecap="round">
          <line x1="45" y1="25" x2="42" y2="15" />
          <line x1="60" y1="20" x2="60" y2="8" />
          <line x1="75" y1="25" x2="78" y2="15" />
          <line x1="35" y1="35" x2="30" y2="28" />
          <line x1="85" y1="35" x2="90" y2="28" />
        </g>

        {/* Main eye shape */}
        <ellipse 
        className="group-hover:fill-[#34347C]"
          cx="60" 
          cy="60" 
          rx="45" 
          ry={isBlinking || isHovering ? "1" : "35"} 
          fill="url(#eyeGradient)" 
          stroke="#03045E" 
          strokeWidth="3"
          filter="url(#shadow)"
          style={{ transition: 'ry 0.3s ease-out' }}
        />

        {/* Iris */}
        {!isBlinking && !isHovering && (
          <g transform="translate(60, 60)" style={{ 
            transition: isMobile ? 'all 0.8s ease-in-out' : 'all 0.1s ease-out' 
          }}>
            <circle
              r="18"
              fill="#34347C"
              transform={`rotate(${angle}) translate(12, 0)`}
            />
            
            {/* Pupil */}
            <circle
              r="8"
              fill="#1a1a1a"
              transform={`rotate(${angle}) translate(12, 0)`}
            />
            
            {/* Eye shine/highlight */}
            <circle
              r="3"
              fill="#ffffff"
              opacity="0.9"
              transform={`rotate(${angle}) translate(12, 0) translate(-2, -2)`}
            />
            <circle
              r="1.5"
              fill="#ffffff"
              opacity="0.7"
              transform={`rotate(${angle}) translate(12, 0) translate(3, 3)`}
            />
          </g>
        )}

        {/* Bottom eyelashes */}
        <g stroke="#03045E" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
          <line x1="40" y1="85" x2="38" y2="92" />
          <line x1="55" y1="90" x2="55" y2="98" />
          <line x1="65" y1="90" x2="65" y2="98" />
          <line x1="80" y1="85" x2="82" y2="92" />
        </g>

        {/* Heart when eye is closed */}
        {(isBlinking) && (
          <g transform="translate(60, 60)" opacity="0.8">
            <path
              d="M0,-8 C-4,-12 -10,-12 -10,-6 C-10,-2 0,4 0,4 C0,4 10,-2 10,-6 C10,-12 4,-12 0,-8 Z"
              fill="#34347C"
            />
            
          </g>
        )}

      </svg>
    </div>
  );
}

export default CuteEyeFollower;
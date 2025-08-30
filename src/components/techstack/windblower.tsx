const WindBlower = () => {
    return (
        <div className="flex justify-center items-center">
            <svg 
                viewBox="0 0 200 120" 
                className="w-32 h-20 animate-pulse"
            >
                {/* Wind blower base */}
                <ellipse 
                    cx="100" 
                    cy="110" 
                    rx="80" 
                    ry="8" 
                    fill="#25282B" 
                    opacity="0.3"
                />
                
                {/* Main blower body */}
                <path 
                    d="M50 100 Q50 80 70 80 L130 80 Q150 80 150 100 L150 110 Q150 120 130 120 L70 120 Q50 120 50 110 Z" 
                    fill="#25282B" 
                    stroke="#d8a013" 
                    strokeWidth="2"
                />
                
                {/* Blower front grille */}
                <circle 
                    cx="150" 
                    cy="95" 
                    r="15" 
                    fill="#d8a013" 
                    stroke="#25282B" 
                    strokeWidth="2"
                />
                
                {/* Grille lines */}
                <g stroke="#25282B" strokeWidth="1.5" opacity="0.7">
                    <line x1="140" y1="85" x2="160" y2="85" />
                    <line x1="140" y1="90" x2="160" y2="90" />
                    <line x1="140" y1="95" x2="160" y2="95" />
                    <line x1="140" y1="100" x2="160" y2="100" />
                    <line x1="140" y1="105" x2="160" y2="105" />
                </g>
                
                {/* Handle */}
                <rect 
                    x="60" 
                    y="85" 
                    width="8" 
                    height="20" 
                    rx="4" 
                    fill="#25282B"
                />
                
                {/* Wind effect lines */}
                <g stroke="#d8a013" strokeWidth="2" strokeLinecap="round" opacity="0.6">
                    <path 
                        d="M165 85 Q180 85 185 80" 
                        fill="none"
                        className="animate-[windFlow_1s_ease-in-out_infinite]"
                    />
                    <path 
                        d="M165 95 Q185 95 190 90" 
                        fill="none"
                        className="animate-[windFlow_1.2s_ease-in-out_infinite]"
                        style={{ animationDelay: '0.2s' }}
                    />
                    <path 
                        d="M165 105 Q180 105 185 110" 
                        fill="none"
                        className="animate-[windFlow_1.1s_ease-in-out_infinite]"
                        style={{ animationDelay: '0.4s' }}
                    />
                </g>
                
                {/* Power button */}
                <circle 
                    cx="80" 
                    cy="95" 
                    r="4" 
                    fill="#d8a013" 
                    className="animate-pulse"
                />
            </svg>
            
            <style>{`
                @keyframes windFlow {
                    0%, 100% {
                        opacity: 0.3;
                        stroke-dasharray: 0 10;
                    }
                    50% {
                        opacity: 0.8;
                        stroke-dasharray: 5 5;
                    }
                }
            `}</style>
        </div>
    );
};

export default WindBlower;
const WindParticles = () => {
    return (
        <>
            {/* Wind particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-5 bg-[#d8a013] rounded-full opacity-100"
                        style={{
                            left: `${(i * 7) % 100}%`,
                            bottom: `-${(i * 11) % 30}px`,
                            animationDelay: `${(i * 0.4) % 3}s`,
                            animation: `windUp ${3 + ((i * 0.3) % 2)}s linear infinite`
                        }}
                    />
                ))}
            </div>

            <style>{`
                @keyframes windUp {
                    0% {
                        transform: translateY(0) translateX(0);
                        opacity: 0;
                    }
                    20% {
                        opacity: 0.5;
                    }
                    100% {
                        transform: translateY(-400px) translateX(30px);
                        opacity: 0;
                    }
                }
            `}</style>
        </>
    );
};

export default WindParticles;
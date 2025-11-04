export default function Marquee() {
  return (
    <div className="overflow-hidden bg-black py-4">
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .marquee-content {
          animation: scroll 20s linear infinite;
        }
        
        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div style={{ 
        display: 'flex', 
        overflow: 'hidden', 
        userSelect: 'none',
        width: '100%'
      }}>
        <div 
          className="marquee-content"
          style={{ 
            display: 'flex', 
            flexShrink: 0,
            minWidth: '100%',
            willChange: 'transform'
          }}
        >
          <MarqueeItem />
          <MarqueeItem />
        </div>
      </div>
    </div>
  );
}

function MarqueeItem() {
  const items = Array(6).fill(null);
  
  return (
    <>
      {items.map((_, i) => (
        <div 
          key={i} 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            padding: '0 2rem',
            flexShrink: 0
          }}
        >
          <a 
            href="https://www.ireland-guide.com/article/2025-georgina-campbell-irish-food-and-hospitality-awards.15544.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <p style={{ 
              margin: 0, 
              fontSize: '0.875rem',
              textTransform: 'lowercase'
            }}>
              georgina campbell fine dining restaurant of the year 2025 •
            </p>
          </a>
        </div>
      ))}
    </>
  );
}
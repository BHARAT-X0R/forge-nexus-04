import React from 'react';

interface SkillGraphProps {
  skills: Array<{
    name: string;
    level: number;
    color: string;
  }>;
  size?: number;
}

const SkillGraph: React.FC<SkillGraphProps> = ({ skills, size = 200 }) => {
  const center = size / 2;
  const radius = size * 0.35;
  const angleStep = (2 * Math.PI) / skills.length;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg 
        width={size} 
        height={size} 
        className="transform rotate-[-90deg]"
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Background web */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale, index) => (
          <polygon
            key={index}
            points={skills.map((_, i) => {
              const angle = i * angleStep;
              const x = center + Math.cos(angle) * radius * scale;
              const y = center + Math.sin(angle) * radius * scale;
              return `${x},${y}`;
            }).join(' ')}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="1"
            opacity={0.3}
          />
        ))}

        {/* Grid lines */}
        {skills.map((_, index) => {
          const angle = index * angleStep;
          const x = center + Math.cos(angle) * radius;
          const y = center + Math.sin(angle) * radius;
          return (
            <line
              key={index}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="hsl(var(--border))"
              strokeWidth="1"
              opacity={0.3}
            />
          );
        })}

        {/* Skill area */}
        <polygon
          points={skills.map((skill, i) => {
            const angle = i * angleStep;
            const level = skill.level / 100;
            const x = center + Math.cos(angle) * radius * level;
            const y = center + Math.sin(angle) * radius * level;
            return `${x},${y}`;
          }).join(' ')}
          fill="url(#skillGradient)"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          opacity={0.7}
          className="animate-skill-pulse"
        />

        {/* Skill points */}
        {skills.map((skill, index) => {
          const angle = index * angleStep;
          const level = skill.level / 100;
          const x = center + Math.cos(angle) * radius * level;
          const y = center + Math.sin(angle) * radius * level;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="4"
              fill={skill.color}
              stroke="white"
              strokeWidth="2"
              className="animate-pulse-glow"
            />
          );
        })}

        {/* Gradient definitions */}
        <defs>
          <radialGradient id="skillGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--primary-glow))" stopOpacity="0.2" />
          </radialGradient>
        </defs>
      </svg>

      {/* Skill labels */}
      {skills.map((skill, index) => {
        const angle = index * angleStep;
        const labelRadius = radius * 1.2;
        const x = center + Math.cos(angle) * labelRadius;
        const y = center + Math.sin(angle) * labelRadius;
        
        // Convert back from rotated coordinate system
        const displayX = x;
        const displayY = size - y; // Flip Y because we rotated the SVG
        
        return (
          <div
            key={skill.name}
            className="absolute text-xs font-medium text-foreground transform -translate-x-1/2 -translate-y-1/2 text-center"
            style={{
              left: `${displayX}px`,
              top: `${displayY}px`,
              minWidth: '60px'
            }}
          >
            <div className="px-2 py-1 glass-card rounded-full border border-white/10">
              {skill.name}
            </div>
            <div className="text-primary text-xs mt-1 font-bold">
              {skill.level}%
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillGraph;
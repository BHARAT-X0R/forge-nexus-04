import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectFeed from '@/components/ProjectFeed';
import SkillGraph from '@/components/SkillGraph';

// Mock skills data for demonstration
const mockSkills = [
  { name: 'React', level: 85, color: 'hsl(190 95% 60%)' },
  { name: 'IoT', level: 92, color: 'hsl(280 95% 70%)' },
  { name: 'AI/ML', level: 78, color: 'hsl(320 95% 60%)' },
  { name: 'Hardware', level: 65, color: 'hsl(190 100% 75%)' },
  { name: '3D Design', level: 71, color: 'hsl(280 100% 85%)' },
  { name: 'Python', level: 89, color: 'hsl(210 95% 60%)' }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProjectFeed />
      
      {/* Skills Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text font-dynamic">Your Skill</span>
            <br />
            <span className="text-foreground font-dynamic">DNA Graph</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visualize your expertise and watch it grow as you contribute to projects
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="glass-card p-8 rounded-2xl">
            <SkillGraph skills={mockSkills} size={400} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Users, Rocket } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const FloatingCard = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <div 
    className="glass-card p-4 rounded-xl hover-tilt animate-float backdrop-blur-xl border border-white/10"
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      {/* Floating Project Cards */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingCard delay={0}>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
            <span className="text-sm text-foreground/80">AI Voice Assistant</span>
          </div>
        </FloatingCard>
        
        <FloatingCard delay={1}>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse-glow" />
            <span className="text-sm text-foreground/80">IoT Garden Monitor</span>
          </div>
        </FloatingCard>
        
        <FloatingCard delay={2}>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary-glow rounded-full animate-pulse-glow" />
            <span className="text-sm text-foreground/80">Robotic Arm Controller</span>
          </div>
        </FloatingCard>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="gradient-text font-dynamic">Build, Break,</span>
            <br />
            <span className="text-foreground font-dynamic">Reinvent—</span>
            <br />
            <span className="gradient-text font-dynamic">Together.</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The futuristic platform where makers, coders, designers, and inventors 
            collaborate on the next generation of IoT, AI, robotics, and breakthrough projects.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 py-6">
            <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-foreground">10K+ Makers</span>
            </div>
            <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <Rocket className="w-5 h-5 text-secondary" />
              <span className="text-foreground">2K+ Projects</span>
            </div>
            <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5 text-primary-glow" />
              <span className="text-foreground">AI Powered</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Start Creating
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl">
              Explore Projects
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
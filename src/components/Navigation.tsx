import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Bell, User, Zap } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text font-dynamic">
              MakerOS
            </span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects, makers, skills..."
                className="w-full pl-10 pr-4 py-2 bg-glass/50 border border-white/10 rounded-full text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="hover-tilt">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="neon" size="sm" className="hidden sm:flex">
              Start Project
            </Button>
            <Button variant="glass" size="icon" className="hover-tilt">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
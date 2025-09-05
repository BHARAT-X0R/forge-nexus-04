import React from 'react';
import ProjectCard from './ProjectCard';
import { Sparkles, TrendingUp, Clock, Users } from 'lucide-react';

// Mock data for demonstration
const mockProjects = [
  {
    id: '1',
    title: 'AI-Powered Smart Garden Monitor',
    description: 'Building an IoT system that uses computer vision to monitor plant health and automatically adjusts watering schedules. Looking for hardware experts!',
    author: {
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      skills: ['IoT', 'Python', 'Computer Vision', 'Arduino']
    },
    tags: ['IoT', 'AI', 'Agriculture', 'Sustainability'],
    likes: 147,
    comments: 23,
    collaborators: 4,
    timeAgo: '2 hours ago',
    status: 'seeking-help' as const,
    progress: 65
  },
  {
    id: '2',
    title: 'Robotic Coffee Brewing Assistant',
    description: 'Creating a precision robotic arm that can brew the perfect cup of coffee every time. Currently working on the grind consistency algorithm.',
    author: {
      name: 'Sarah Kim',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150',
      skills: ['Robotics', 'Mechanical Engineering', 'C++', '3D Printing']
    },
    tags: ['Robotics', 'Automation', 'Food Tech'],
    likes: 89,
    comments: 15,
    collaborators: 2,
    timeAgo: '4 hours ago',
    status: 'building' as const,
    progress: 78
  },
  {
    id: '3',
    title: 'Voice-Controlled Home Security System',
    description: 'Completed project featuring facial recognition, voice commands, and real-time alerts. Open-sourcing the entire codebase!',
    author: {
      name: 'Marcus Johnson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      skills: ['Machine Learning', 'React', 'Node.js', 'Computer Vision']
    },
    tags: ['Security', 'AI', 'Voice Tech', 'Open Source'],
    likes: 234,
    comments: 67,
    collaborators: 8,
    timeAgo: '6 hours ago',
    status: 'completed' as const,
    progress: 100
  },
  {
    id: '4',
    title: 'Biometric Wellness Tracker',
    description: 'Developing a non-invasive health monitoring device using advanced sensors. Need expertise in signal processing and medical device regulations.',
    author: {
      name: 'Dr. Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150',
      skills: ['Biomedical Engineering', 'Signal Processing', 'Python', 'Hardware Design']
    },
    tags: ['Healthcare', 'Sensors', 'Biotech', 'Wearables'],
    likes: 156,
    comments: 34,
    collaborators: 6,
    timeAgo: '8 hours ago',
    status: 'seeking-help' as const,
    progress: 45
  }
];

const FilterButton = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <button className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
    active 
      ? 'bg-primary text-primary-foreground shadow-glow' 
      : 'glass-card text-muted-foreground hover:text-foreground hover:bg-glass/60'
  }`}>
    <Icon className="w-4 h-4" />
    <span className="text-sm font-medium">{label}</span>
  </button>
);

const ProjectFeed = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          <span className="gradient-text font-dynamic">Discover Amazing</span>
          <br />
          <span className="text-foreground font-dynamic">Projects</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore cutting-edge projects from our global community of makers and innovators
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <FilterButton icon={Sparkles} label="For You" active />
        <FilterButton icon={TrendingUp} label="Trending" />
        <FilterButton icon={Clock} label="Recent" />
        <FilterButton icon={Users} label="Collaborative" />
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {mockProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <button className="glass-card px-8 py-3 rounded-full text-foreground hover:bg-glass/60 hover:shadow-glow transition-all">
          Load More Projects
        </button>
      </div>
    </section>
  );
};

export default ProjectFeed;
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share2, Zap, Users, Clock } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    author: {
      name: string;
      avatar: string;
      skills: string[];
    };
    tags: string[];
    likes: number;
    comments: number;
    collaborators: number;
    timeAgo: string;
    status: 'building' | 'completed' | 'seeking-help';
    progress: number;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'building':
        return 'text-primary';
      case 'completed':
        return 'text-secondary';
      case 'seeking-help':
        return 'text-primary-glow';
      default:
        return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'building':
        return <Zap className="w-4 h-4" />;
      case 'completed':
        return <Users className="w-4 h-4" />;
      case 'seeking-help':
        return <Clock className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="glass-card p-6 rounded-xl hover-tilt group cursor-pointer transition-all duration-300 hover:shadow-glow border border-white/10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img 
            src={project.author.avatar} 
            alt={project.author.name}
            className="w-10 h-10 rounded-full border-2 border-primary/30"
          />
          <div>
            <h4 className="font-semibold text-foreground font-dynamic">{project.author.name}</h4>
            <p className="text-sm text-muted-foreground">{project.timeAgo}</p>
          </div>
        </div>
        
        <div className={`flex items-center space-x-1 ${getStatusColor(project.status)}`}>
          {getStatusIcon(project.status)}
          <span className="text-xs font-medium capitalize">{project.status.replace('-', ' ')}</span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-foreground font-dynamic group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Progress Bar */}
        {project.progress > 0 && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-primary font-medium">{project.progress}%</span>
            </div>
            <div className="w-full bg-glass/50 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-primary rounded-full transition-all duration-500"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Skills */}
        <div className="flex flex-wrap gap-1">
          {project.author.skills.slice(0, 3).map((skill, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
            >
              {skill}
            </span>
          ))}
          {project.author.skills.length > 3 && (
            <span className="px-2 py-1 bg-glass/50 text-muted-foreground text-xs rounded-full">
              +{project.author.skills.length - 3}
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full border border-secondary/20"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
            <Heart className="w-4 h-4" />
            <span className="text-sm">{project.likes}</span>
          </button>
          
          <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">{project.comments}</span>
          </button>
          
          <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
            <Users className="w-4 h-4" />
            <span className="text-sm">{project.collaborators}</span>
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Share2 className="w-4 h-4" />
          </Button>
          <Button variant="neon" size="sm">
            {project.status === 'seeking-help' ? 'Help Out' : 'Collaborate'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
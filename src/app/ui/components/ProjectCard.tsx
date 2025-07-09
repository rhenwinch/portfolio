import Image from 'next/image';
import { useState, useEffect } from 'react';

const getIconForPlatform = (platform: string) => {
  const iconStyle = {
    filter: 'brightness(0) saturate(100%) invert(78%) sepia(27%) saturate(1180%) hue-rotate(346deg) brightness(99%) contrast(94%)'
  };
  
  const iconMap: { [key: string]: React.ReactNode } = {
    'GitHub': <Image src="/contact/contact-github.svg" alt="GitHub" width={16} height={16} style={iconStyle} />,
    'Website': <Image src="/globe.svg" alt="Website" width={16} height={16} style={iconStyle} />,
    // 'App Store': <span className="text-lg">📱</span>,
    // 'Play Store': <span className="text-lg">🤖</span>,
  };
  
  // Return the icon if found, otherwise return a default link icon
  return iconMap[platform] || <Image src="/globe.svg" alt="Link" width={16} height={16} style={iconStyle} />;
};

const getGitHubRepoFromUrl = (url: string): { owner: string; repo: string } | null => {
  const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
  if (match) {
    return { owner: match[1], repo: match[2] };
  }
  return null;
};

const generateGitHubOpenGraphUrl = (owner: string, repo: string): string => {
  // Use current timestamp as hash for updated images
  const hash = Date.now().toString(36);
  return `https://opengraph.githubassets.com/${hash}/${owner}/${repo}`;
};

interface ProjectCardProps {
  name: string;
  description: string;
  dateAccomplished: string;
  techStack: string[];
  preview?: string;
  availableOn?: {
    label: string;
    url: string;
  }[];
  onImageClick?: () => void;
  isOpenForContributions?: boolean;
}

export default function ProjectCard({
  name,
  description,
  dateAccomplished,
  techStack,
  preview,
  availableOn = [],
  onImageClick,
  isOpenForContributions = false
}: ProjectCardProps) {
  const [githubPreview, setGithubPreview] = useState<string | null>(null);

  useEffect(() => {
    const getGitHubPreview = () => {
      if (preview) return; // Skip if we already have an image preview
      
      // Look for GitHub link in availableOn
      const githubLink = availableOn.find(link => 
        link.url.includes('github.com') && 
        (link.label.toLowerCase().includes('github') || link.label.toLowerCase().includes('repository'))
      );
      
      if (githubLink) {
        const repoInfo = getGitHubRepoFromUrl(githubLink.url);
        if (repoInfo) {
          const openGraphUrl = generateGitHubOpenGraphUrl(repoInfo.owner, repoInfo.repo);
          setGithubPreview(openGraphUrl);
        }
      }
    };

    getGitHubPreview();
  }, [availableOn, preview]);

  const previewImageSrc = preview || githubPreview;
  const shouldShowClickable = preview; // Only make clickable if it's an actual image preview
  
  // Get GitHub link for navigation when clicking on GitHub preview
  const githubLink = availableOn.find(link => 
    link.url.includes('github.com') && 
    (link.label.toLowerCase().includes('github') || link.label.toLowerCase().includes('repository'))
  );

  const handleImageClick = () => {
    if (shouldShowClickable && onImageClick) {
      onImageClick();
    } else if (githubPreview && githubLink) {
      window.open(githubLink.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-black/25 rounded-2xl p-4 sm:p-6 border border-white/10 flex flex-col group shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-black/40 hover:border-white/20 relative h-full">
      {/* Open for Contributions Tag */}
      {isOpenForContributions && (
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg">
            <span className="flex items-center gap-1">
              Open for Contributions!
            </span>
          </div>
        </div>
      )}
      
      {previewImageSrc ? (
        <div className="mb-4 sm:mb-6 rounded-xl overflow-hidden bg-black/30 border border-white/15 relative backdrop-blur-sm">
          <Image 
            src={previewImageSrc} 
            alt={`${name} preview`}
            width={400}
            height={200}
            className={`w-full h-48 sm:h-60 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer`}
            onClick={handleImageClick}
          />
          {githubPreview && !preview && (
            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 text-xs text-white/80 bg-black/60 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/20">
              <span className="hidden sm:inline">GitHub Preview</span>
              <span className="sm:hidden">GitHub</span>
            </div>
          )}
        </div>
      ) : null}
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2 sm:gap-0">
        <h3 className="text-lg sm:text-xl font-bold text-white/95">{name}</h3>
        <span className="text-xs text-white/70 bg-black/40 px-2 py-1 rounded-full border border-white/20 self-start sm:self-auto">{dateAccomplished}</span>
      </div>
      
      <p className="text-white/85 text-sm leading-relaxed mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs bg-orange-300/20 text-orange-300 rounded-full backdrop-blur-sm border border-orange-300/30 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="mt-auto">
        {availableOn.length > 0 ? (
          <div>
            <p className="text-white/70 text-sm mb-2 sm:mb-3 font-medium">Available on</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {availableOn.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 bg-black/20 text-white hover:bg-black/40 rounded-xl transition-all duration-200 backdrop-blur-sm border border-white/15 hover:border-white/30 hover:scale-105"
                  title={link.label}
                >
                  {getIconForPlatform(link.label)}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-white/50 text-sm italic">Not publicly available</p>
        )}
      </div>
    </div>
  );
}

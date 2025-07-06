import Card from "@/components/Card";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300); // Wait for animation to complete
  };

  const projects = [
    {
      name: "Flixclusive",
      preview: "/projects/flixclusive-preview.png",
      description: "A jetpack compose media3 player application with a dynamic plugin system for extensibility. It currently has 40k+ downloads and once got featured in GitHub Kotlin trending page. ",
      dateAccomplished: "Jun 2023 - Present",
      techStack: ["Android", "Jetpack Compose", "Media3 / ExoPlayer", "Flow / Coroutines", "Hilt", "Kotlin", "MVVM", "OkHttp / Retrofit", "Serialization", "Room", "DataStore", "CI/CD"],
      availableOn: [
        { label: "GitHub", url: "https://github.com/flixclusiveorg/Flixclusive" }
      ]
    },
    {
      name: "Track a Habit",
      preview: "/projects/tah-preview.png",
      description: "A modern mobile application designed to help users track and manage their habits effectively. It features a user-friendly interface, customizable habit tracking, and insightful analytics.",
      dateAccomplished: "May 2025 - Jun 2025",
      techStack: ["Android", "Jetpack Compose", "Google Drive API", "Biometrics", "WorkManager", "DataStore", "Room", "Material3", "Flow / Coroutines", "Hilt", "Kotlin", "MVVM", "OkHttp/Retrofit", "Testing", "CI/CD"],
      availableOn: [
        { label: "GitHub", url: "https://github.com/rhenwinch/track-a-habit" }
      ],
      isOpenForContributions: true
    },
    {
      name: "Auto-SMMO",
      preview: "/projects/autosmmo-preview.png",
      description: "An android-platform version of SMMO BOT that automates the process of playing the game SimpleMMO, allowing users to focus on other tasks while the bot handles in-game activities.",
      dateAccomplished: "Mar 2023 - Apr 2023",
      techStack: ["Android", "Jetpack Compose", "Room", "Material3", "Flow / Coroutines", "Hilt", "Kotlin", "MVVM", "OkHttp/Retrofit", "WebView", "Automation & Scripting", "CI/CD", "Game"],
      availableOn: [
        { label: "GitHub", url: "https://github.com/rhenwinch/Auto-SMMO" }
      ],
      isOpenForContributions: true
    },
    {
      name: "LaundryMIS",
      preview: "/projects/lmis-preview.png",
      description: "A software engineering project that provides a comprehensive solution for managing laundry operations. It includes features for tracking orders, managing inventory, and generating reports.",
      dateAccomplished: "Aug 2023 - Jun 2024",
      techStack: ["Android", "React Native", "Firebase", "Redux", "Twilio API", "TypeScript"],
      availableOn: []
    },
    {
      name: "Dagitab",
      preview: "/projects/dagitab-preview.png",
      description: "A web application tool for forecasting the 24-hour ahead electricity load in Luzon.",
      dateAccomplished: "Jan 2024 - Dec 2024",
      techStack: ["Web", "TypeScript", "Python", "Full-stack", "React", "Vite", "Heroku", "Tailwind", "Material-UI", "Zustand", "Recharts", "Flask", "TensorFlow", "TensorFlow Lite"],
      availableOn: [
        { label: "Web", url: "https://dagitab.vercel.app" }
      ]
    },
    {
      name: "Tourist Forecasting Web Tool",
      description: "A web application tool for forecasting the tourist arrivals in the Philippines.",
      dateAccomplished: "May 2025 - Present",
      techStack: ["Web", "TypeScript", "Python", "Full-stack", "React", "Vite", "Tailwind", "Material-UI", "Zustand", "Recharts", "Flask", "Prophet"],
      availableOn: [
        { label: "GitHub", url: "https://github.com/aranes-rc/ph-tourist-arrivals-forecast" }
      ]
    },
    {
      name: "NFT Generator",
      preview: "/projects/nftgenerator-preview.png",
      description: "A commission-based web application that allows users to generate unique NFTs using customizable templates and assets. It features a user-friendly interface, asset management, and a preview system.",
      dateAccomplished: "May 2022",
      techStack: ["Web", "JavaScript", "Python", "Full-stack", "React", "Canvas API", "Express", "Bootstrap"],
      availableOn: []
    },
    {
      name: "Tetris in C",
      description: "A humble attempt at creating a Tetris game using C. It features classic Tetris gameplay with a simple console interface.",
      dateAccomplished: "Dec 2022",
      techStack: ["C", "CLI", "Game"],
      availableOn: [
        { label: "GitHub", url: "https://github.com/rhenwinch/TetrisInC" }
      ]
    },
    {
      name: "SMMO Bot",
      description: "A bot that automates the process of playing the game SimpleMMO with Telegram integration for CAPTCHA verification.",
      dateAccomplished: "May 2025 - Jun 2025",
      techStack: ["Automation & Scripting", "Python", "Pillow", "Telegram API"],
      availableOn: [
        { label: "GitHub", url: "https://github.com/chocomochi/SimpleMMOBot" }
      ],
      isOpenForContributions: true
    },
    {
      name: "Flixclusive's Provider Docs",
      preview: "/projects/providerdocs-preview.png",
      description: "Documentation for the Flixclusive provider/plugin system, providing detailed guides and API references for developers to create plugins for the Flixclusive media player.",
      dateAccomplished: "Oct 2024 - Present",
      techStack: ["Web", "Next.js", "Neato", "TypeScript", "MDX", "GitHub Pages"],
      availableOn: [
        { label: "GitHub", url: "https://github.com/flixclusiveorg/provider-docs" },
        { label: "Web", url: "https://flixclusiveorg.github.io/provider-docs" }
      ],
      isOpenForContributions: true
    },
    {
      name: "Grand Eden Oasis",
      preview: "/projects/geoasis-preview.png",
      description: "A web development college project that provides a platform for users to explore and book accommodations in a fictional resort called Grand Eden Oasis. It features a user-friendly interface, booking management, and an admin dashboard.",
      dateAccomplished: "Mar 2023 - May 2023",
      techStack: ["Web", "PHP", "Xampp", "HTML", "CSS", "JavaScript"],
      availableOn: [
        { label: "GitHub", url: "https://github.com/chocomochi/grand-eden-oasis" },
      ]
    },
    {
      name: "Discord Coin Ticker",
      description: "A very complicated backend API that manages Discord bots to provide real-time cryptocurrency price updates. It fetches data from CoinGecko and allows users to track specified coins.",
      dateAccomplished: "Jan 2022",
      techStack: ["Automation & Scripting", "Flask", "Axios", "Python", "Node.js", "Discord.js", "CoinGecko API"],
      availableOn: [
        { label: "GitHub", url: "https://github.com/chocomochi/discord-coin-ticker" },
      ]
    },
  ];

  return (
    <>
      <Card className="p-6 max-w-4xl">
        <Header title="Projects" className="mb-6" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              preview={project.preview}
              description={project.description}
              dateAccomplished={project.dateAccomplished}
              techStack={project.techStack}
              availableOn={project.availableOn}
              onImageClick={project.preview ? () => openModal(project.preview!, project.name) : undefined}
              isOpenForContributions={project.isOpenForContributions}
            />
          ))}
        </div>
      </Card>

      {/* Modal Portal */}
      {selectedImage && typeof document !== 'undefined' && createPortal(
        <div 
          className={`fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
            isModalOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeModal}
          style={{ margin: 0 }}
        >
          <div className={`relative max-w-4xl max-h-[90vh] w-full transition-transform duration-300 ${
            isModalOpen ? 'scale-100' : 'scale-95'
          }`}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 cursor-pointer bg-black/50 rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

import BackgroundItem from "@/components/BackgroundItem";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HistoryItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string | string[];
  skills?: string[];
}

const EXPERIENCE_DATA: HistoryItem[] = [

  {
    title: "Android Developer Intern",
    company: "White Widget",
    duration: "Mar 2026 - present",
    location: "QC, Philippines",
    description: [],
    skills: ["Android", "Mobile"]
  },
  {
    title: "Mobile Developer",
    company: "ED3N Ventures",
    duration: "Sept 2025 - Mar 2026",
    location: "Makati, Philippines",
    description: [
      "Improved a cross-platform mobile application",
      "Leveraged Xcode for iOS development",
      "Grasped a brief knowledge about Swift",
      "Surfed through play store policies and app store policies difficulties",
      "Learned the nature of MongoDB and Nest.js",
      "Utilized Flutter for the first time for mobile development"
    ],
    skills: ["Mobile", "Flutter", "Android", "iOS"]
  },
  {
    title: "Full-Stack Developer Intern",
    company: "ROC.PH",
    duration: "Feb 2025 - May 2025",
    location: "Remote",
    description: [
      "Became a group leader for a UI/UX team of 3 interns",
      "Led a group of 5 intern developers in building a full-stack web application for the company's HRIS",
      "Leveraged GitHub and Figma for version control and collaboration",
      "Redesigned the company's webpage to improve user experience and aesthetics",
      "Developed good foundation on WordPress plugin development and theme customization",
      "Learned and implemented best practices in Laravel and Tailwind CSS",
      "Conducted code reviews and provided mentorship to junior developers"
    ],
    skills: ["WordPress", "UI/UX", "PHP", "Laravel", "Team Leadership", "Tailwind", "HRIS", "Startup", "Web"]
  },
  {
    title: "Software Developer",
    company: "Freelance",
    duration: "2020 - Present",
    location: "Remote",
    description: [
      "Started programming journey with PHP, building on foundational HTML/CSS knowledge",
      "Progressed to JavaScript, which made learning Python and other languages significantly easier",
      "Leveraged programming skills to create automation bots and quality-of-life scripts for daily tasks",
      "Learned Android development in 2022, specializing in Jetpack Compose and modern architecture",
      "Created Flixclusive, a media player app with 40k+ downloads that trended on GitHub Kotlin",
      "Actively take on thesis and school project commissions, helping students with their academic work",
      "Collaborated with open-source communities and managed contributions from multiple developers"
    ],
    skills: ["PHP", "JavaScript", "Python", "Android", "Jetpack Compose", "Kotlin", "Automation", "Open Source", "Academic Projects"]
  },
  {
    title: "NFT Discord Developer/Mod",
    company: "Freelance",
    duration: "Jun 2021 - Jun 2022",
    location: "Remote",
    description: [
      "Became a Discord developer and moderator for various NFT projects",
      "Developed and managed Discord bots for community engagement and moderation",
      "Implemented automated systems for user verification and role assignment",
      "Maintained community guidelines and rules",
      "Engaged with community members to foster a positive environment",
      "Created an NFT generator web application using React and Canvas API",
    ],
    skills: ["Discord", "NFT", "Node.js", "React", "Canvas API", "Community Management", "QoL", "Automation & Scripting"]
  }
];

const EDUCATION_DATA: HistoryItem[] = [
  {
    title: "Bachelor of Science in Computer Science",
    company: "Our Lady of Fatima University (OLFU) - Quezon City",
    duration: "2022 - 2025",
    location: "Lagro, QC",
    description: [
      "Developed basic foundation for C",
      "Focused on software engineering and system design",
      "Participated in programming competitions including UMak's 2023 IT Olympics and OLFU's Annual Code-fest",
      "Gained experience in AI/ML and data analysis due to thesis compliance",
      "Received a certificate from University of the Philippines for presenting a thesis paper in 25th RDaFest SFCon",
      "Was a Dean's Lister in 2023 until I was considered as an irregular student",
    ],
    skills: ["System Design", "AI/ML", "Data Analysis", "Thesis Presentation", "Dean's Lister"]
  },
  {
    title: "Bachelor of Science in Computer Science",
    company: "Technological Institute of the Philippines (TIP) - Quezon City",
    duration: "2021 - 2022",
    location: "Cubao, QC",
    description: [
      "Completed a STEM bridging program for Computer Science",
      "Developed strong foundation for C++ and Java OOP",
      "Was a VPAA's Lister before transferring to OLFU"
    ],
    skills: ["OOP", "Java", "C++", "VPAA's Lister"]
  },
  {
    title: "Senior High School - HUMSS",
    company: "Commonwealth High School",
    duration: "2019 - 2021",
    location: "Commonwealth, QC",
    description: "Specialized in Humanities and Social Sciences (HUMSS) with a focus on creative writing, critical thinking, and public speaking.",
    skills: ["Critical Thinking", "Creative Writing", "Public Speaking"]
  },
  {
    title: "Junior High School - ICT",
    company: "Commonwealth High School",
    duration: "2015 - 2019",
    location: "Commonwealth, QC",
    description: [
      "Developed strong foundation on computer hardware and software",
      "Learned basic programming concepts and web development",
    ],
    skills: ["Computer Fundamentals", "HTML", "CSS", "Web Development"]
  }
];

export default function Background() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    setIsLoaded(true);
  }, []);

  return (
    <Card className="p-6 w-fill">
      <div 
        className={`
          transition-all duration-500 ease-in-out
          ${isLoaded 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
          }
        `}
      >
        <Header title="Background" className="mb-8" />
        
        <div className="space-y-12">
          {/* Experience Section */}
          <section className="timeline">
            <div 
              className="title-wrapper flex items-center gap-4 mb-5 animate-fadeIn"
              style={{
                animationDelay: '0.1s',
                animationDuration: '0.6s',
                animationFillMode: 'both'
              }}
            >
              <div className="bg-black/25 rounded-xl border border-white/0 flex items-center justify-center p-3 backdrop-blur-sm shadow-md">
                <Image 
                  alt="Experience"
                  src="corporate.svg"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-bold text-white">Experience</h2>
            </div>
            <ol className="timeline-list">
              {EXPERIENCE_DATA.map((item, index) => (
                <div
                  key={`experience-${index}`}
                  className="animate-fadeIn"
                  style={{
                    animationDelay: `${0.2 + index * 0.08}s`,
                    animationDuration: '0.6s',
                    animationFillMode: 'both'
                  }}
                >
                  <BackgroundItem
                    title={item.title}
                    company={item.company}
                    duration={item.duration}
                    location={item.location}
                    description={item.description}
                    skills={item.skills}
                    isLast={index === EXPERIENCE_DATA.length - 1}
                  />
                </div>
              ))}
            </ol>
          </section>

          {/* Education Section */}
          <section className="timeline">
            <div 
              className="title-wrapper flex items-center gap-4 mb-5 animate-fadeIn"
              style={{
                animationDelay: `${0.2 + EXPERIENCE_DATA.length * 0.08 + 0.1}s`,
                animationDuration: '0.6s',
                animationFillMode: 'both'
              }}
            >
              <div className="bg-black/25 rounded-xl border border-white/0 flex items-center justify-center p-3 backdrop-blur-sm shadow-md">
                <Image 
                  alt="Education"
                  src="education.svg"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-bold text-white">Education</h2>
            </div>
            <ol className="timeline-list">
              {EDUCATION_DATA.map((item, index) => (
                <div
                  key={`education-${index}`}
                  className="animate-fadeIn"
                  style={{
                    animationDelay: `${0.2 + EXPERIENCE_DATA.length * 0.08 + 0.2 + index * 0.08}s`,
                    animationDuration: '0.6s',
                    animationFillMode: 'both'
                  }}
                >
                  <BackgroundItem
                    title={item.title}
                    company={item.company}
                    duration={item.duration}
                    location={item.location}
                    description={item.description}
                    skills={item.skills}
                    isLast={index === EDUCATION_DATA.length - 1}
                  />
                </div>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </Card>
  );
}

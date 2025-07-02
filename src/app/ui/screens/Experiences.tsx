import Card from "@/components/Card";

export default function Experiences() {
  return (
    <Card className="p-6 max-w-4xl">
      <h2 className="text-2xl font-bold text-orange-300 mb-6">Experiences</h2>
      <div className="space-y-6">
        <div className="border-l-2 border-orange-300/30 pl-6 relative">
          <div className="absolute w-3 h-3 bg-orange-300 rounded-full -left-[7px] top-1"></div>
          <h3 className="text-lg font-semibold text-white mb-1">Senior Frontend Developer</h3>
          <p className="text-orange-300/80 text-sm mb-2">Tech Company Inc. • 2023 - Present</p>
          <p className="text-white/70 mb-3">
            Leading frontend development for multiple high-traffic web applications. Mentoring junior developers 
            and implementing best practices for code quality and performance optimization.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded">React</span>
            <span className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded">Next.js</span>
            <span className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded">TypeScript</span>
            <span className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded">Team Leadership</span>
          </div>
        </div>
        
        <div className="border-l-2 border-orange-300/30 pl-6 relative">
          <div className="absolute w-3 h-3 bg-orange-300/60 rounded-full -left-[7px] top-1"></div>
          <h3 className="text-lg font-semibold text-white mb-1">Frontend Developer</h3>
          <p className="text-orange-300/80 text-sm mb-2">Digital Agency • 2021 - 2023</p>
          <p className="text-white/70 mb-3">
            Developed responsive web applications for various clients. Collaborated with designers and 
            backend developers to create seamless user experiences.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded">JavaScript</span>
            <span className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded">Vue.js</span>
            <span className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded">SASS</span>
            <span className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded">REST APIs</span>
          </div>
        </div>
        
        <div className="border-l-2 border-orange-300/30 pl-6 relative">
          <div className="absolute w-3 h-3 bg-orange-300/40 rounded-full -left-[7px] top-1"></div>
          <h3 className="text-lg font-semibold text-white mb-1">Junior Web Developer</h3>
          <p className="text-orange-300/80 text-sm mb-2">Startup Co. • 2020 - 2021</p>
          <p className="text-white/70 mb-3">
            Started my professional journey building landing pages and small web applications. 
            Gained foundational experience in modern web development practices.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded">HTML/CSS</span>
            <span className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded">JavaScript</span>
            <span className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded">WordPress</span>
            <span className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded">Git</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

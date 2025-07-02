import Card from "@/components/Card";

export default function Projects() {
  return (
    <Card className="p-6 max-w-4xl">
      <h2 className="text-2xl font-bold text-orange-300 mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-2">Project One</h3>
          <p className="text-white/70 mb-3">
            A modern web application built with Next.js and TypeScript. Features include responsive design, 
            server-side rendering, and optimized performance.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 text-xs bg-orange-300/20 text-orange-300 rounded">Next.js</span>
            <span className="px-2 py-1 text-xs bg-orange-300/20 text-orange-300 rounded">TypeScript</span>
            <span className="px-2 py-1 text-xs bg-orange-300/20 text-orange-300 rounded">Tailwind</span>
          </div>
        </div>
        
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-2">Project Two</h3>
          <p className="text-white/70 mb-3">
            An interactive dashboard with real-time data visualization. Built with React and modern 
            charting libraries for an engaging user experience.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 text-xs bg-orange-300/20 text-orange-300 rounded">React</span>
            <span className="px-2 py-1 text-xs bg-orange-300/20 text-orange-300 rounded">D3.js</span>
            <span className="px-2 py-1 text-xs bg-orange-300/20 text-orange-300 rounded">Node.js</span>
          </div>
        </div>
        
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-2">Project Three</h3>
          <p className="text-white/70 mb-3">
            A mobile-first e-commerce platform with seamless user experience and robust backend architecture.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 text-xs bg-orange-300/20 text-orange-300 rounded">React Native</span>
            <span className="px-2 py-1 text-xs bg-orange-300/20 text-orange-300 rounded">Express</span>
            <span className="px-2 py-1 text-xs bg-orange-300/20 text-orange-300 rounded">MongoDB</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

import Card from "@/components/Card";
import Header from "@/components/Header";

export default function AboutMe() {
  return (
    <Card className="p-6 max-w-4xl">
      <Header title="About Me" className="mb-6" />
      <div className="text-white font-normal leading-relaxed">
        <p className="mb-4">
          I&apos;m a passionate Android developer with 3 years of specialized experience and 5+ years in programming overall. What drives me most is creating intuitive, solution-focused mobile applications that solve real problems. My development philosophy centers on robust software architecture, proper development processes, and thoughtful UI/UX design to ensure long-term scalability and maintainability.
        </p>
        <p className="mb-4">
          I&apos;m committed to following industry best practices and staying current with community recommendations and documentation. I have a persistent approach to problem-solving and enjoy tackling complex challenges until they&apos;re resolved. I&apos;m always open to collaborations and excited to work on projects that inspire innovative solutions.
        </p>

        <Header title="What I Do" className="mt-20 mb-6 text-xl" hasDivider={false} />
      </div>
    </Card>
  );
}

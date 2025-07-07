import Card from "@/components/Card";
import Header from "@/components/Header";
import SkillCard from "@/components/SkillCard";

interface Skill {
  title: string;
  src: string;
}

const WHAT_I_DO: Skill[] = [
  { title: "Android Development", src: "/skills/android.svg" },
  { title: "Full-Stack Web Development", src: "/skills/webdev.svg" },
  { title: "UI/UX Design", src: "/skills/ui.svg" },
  { title: "Automation & Scripting", src: "/skills/bot.svg" },
];

const WHAT_I_KNOW: Skill[] = [
  { title: "Kotlin", src: "/skills/kotlin.svg" },
  { title: "Java", src: "/skills/java.svg" },
  { title: "Jetpack Compose", src: "/skills/jetpack-compose.svg" },
  { title: "Views", src: "/skills/views.svg" },
  { title: "Hit/Dagger", src: "/skills/hilt.svg" },
  { title: "Retrofit/Okhttp", src: "/skills/okhttp.png" },
  { title: "LiveData, Flow & Coroutines", src: "/skills/flow.svg" },
  { title: "Datastore", src: "/skills/datastore.svg" },
  { title: "Room", src: "/skills/room.svg" },
  { title: "Firebase", src: "/skills/firebase.svg" },
  { title: "JUnit/Strikt & Mockk", src: "/skills/test.svg" },
  { title: "TypeScript", src: "/skills/typescript.svg" },
  { title: "JavaScript", src: "/skills/javascript.svg" },
  { title: "PHP", src: "/skills/php.svg" },
  { title: "Python", src: "/skills/python.svg" },
  { title: "React/React Native", src: "/skills/react.svg" },
  { title: "Laravel", src: "/skills/laravel.svg" },
  { title: "TailwindCSS", src: "/skills/tailwindcss.svg" },
];

const WHAT_TO_LEARN: Skill[] = [
  { title: "Compose Internals & Multiplatform", src: "/skills/jetpack-compose.svg" },
  { title: "Swift", src: "/skills/swift.svg" },
  { title: "Flutter", src: "/skills/flutter.svg" },
  { title: "Golang", src: "/skills/golang.svg" },
  { title: "Docker", src: "/skills/docker.svg" },
  { title: "Game Development", src: "/skills/gamedev.svg" },
];

export default function AboutMe() {
  return (
    <Card className="p-6 w-fill">
      <Header title="About Me" className="mb-6" />
      <div className="text-white font-normal leading-relaxed">
        <p className="mb-4 text-white/80">
          I&apos;m a passionate Android developer with 3 years of specialized experience and 5+ years in programming overall. What drives me most is creating intuitive, solution-focused mobile applications that solve real problems. My development philosophy centers on robust software architecture, proper development processes, and thoughtful UI/UX design to ensure long-term scalability and maintainability.
        </p>
        <p className="mb-4 text-white/80">
          I&apos;m committed to following industry best practices and staying current with community recommendations and documentation. I have a persistent approach to problem-solving and enjoy tackling complex challenges until they&apos;re resolved. I&apos;m always open to collaborations and excited to work on projects that inspire innovative solutions.
        </p>

        <Header title="What I Do" className="mt-20 mb-6 text-xl" hasDivider={false} />

        <div className="flex flex-row flex-wrap gap-6">
          {WHAT_I_DO.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              src={skill.src}
            />
          ))}
        </div>

        <Header title="What I Know" className="mt-20 mb-6 text-xl" hasDivider={false} />

        <div className="flex flex-row flex-wrap gap-6">
          {WHAT_I_KNOW.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              src={skill.src}
            />
          ))}
        </div>

        <Header title="What to Learn" className="mt-20 mb-6 text-xl" hasDivider={false} />

        <div className="flex flex-row flex-wrap gap-6">
          {WHAT_TO_LEARN.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              src={skill.src}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}

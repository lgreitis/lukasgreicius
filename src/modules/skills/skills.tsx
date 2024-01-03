const skills = [
  "JavaScript",
  "TypeScript",
  "C#",
  "PHP",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Firebase",
  "MongoDB",
  "Redis",
  "Tailwind CSS",
  "Three.js",
];

interface SkillProps {
  name: string;
}

const Skill: React.FC<SkillProps> = ({ name }) => {
  return (
    <div className="flex-grow basis-1/6 rounded-xl border border-neutral-800 bg-black px-6 py-3 text-center">
      {name}
    </div>
  );
};

const Skills = () => {
  return (
    <div className="flex justify-center px-6 pb-6 pt-12">
      <div className="flex max-w-7xl flex-col items-center gap-4">
        <h3 className="text-3xl font-semibold">Skills</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <Skill name={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

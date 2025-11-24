import Skill from "./Skill";

const skillsData = [
  { skill: "React", level: "intermediate", color: "lightblue" },
  { skill: "HTML+CSS", level: "intermediate", color: "orange" },
  { skill: "JavaScript", level: "intermediate", color: "yellow" },
  { skill: "Python", level: "advanced", color: "orangered" },
];

export default function SkillList() {
  const skills = skillsData.map(({ skill, level, color }) => (
    <Skill key={skill} skill={skill} level={level} color={color} />
  ));

  return <div className="skill-list">{skills}</div>;
}

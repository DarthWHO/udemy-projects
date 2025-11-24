export default function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>
        {props.skill} {props.emoji}
      </span>
    </div>
  );
}

export default function FlashCardItem({ item, selected, handleClick }) {
  return (
    <div
      className={item.id == selected ? "selected" : ""}
      onClick={() => handleClick(item.id)}
    >
      {item.id == selected ? item.answer : item.question}
    </div>
  );
}

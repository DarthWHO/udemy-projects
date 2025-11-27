export default function AccordionItem({
  num,
  question,
  openFaq,
  onOpen,
  children,
}) {
  return (
    <div className={openFaq === num ? "item open" : "item"} onClick={onOpen}>
      <p className="number">{num < 9 ? `0${num}` : { num }}</p>
      <p className="title">{question}</p>
      <p className="icon">{openFaq === num ? "-" : "+"}</p>
      {openFaq === num && <div className="content-box">{children}</div>}
    </div>
  );
}

export default function DateCounterMessage({ count }) {

  const currentDate = new Date()
  const targetDate = new Date(currentDate)
  targetDate.setDate(currentDate.getDate() + count)

  const messageBegin = count === 0 ? "Today is " : count > 0 ? `${count} day(s) from today is ` : `${Math.abs(count)} day(s) ago was `

  return (
    <p className="message">
      {messageBegin}{targetDate.toDateString()}
    </p>
  );
}
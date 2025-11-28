export default function TipDisplay({bill, children}) {
  return bill !== 0 && <h3>{children}</h3>;
}

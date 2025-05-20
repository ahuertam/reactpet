export default function Info({ turn = 0, stats }) {
    let { life, hunger, dirty, bored } = stats;
    return (
      <div>
        <span>Vida: {life} </span>
        <span>Edad: {turn} dias </span>
        <span>Hambre: {hunger} %</span>
        <span>Suciedad: {dirty} % </span>
        <span>Aburrimiento: {bored} %</span>
      </div>
    );
  }
  
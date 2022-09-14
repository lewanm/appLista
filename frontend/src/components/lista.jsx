export default function SetList(props) {
  const { list } = props;
  return (
    <div className="container">
      <span className="tittle">{list.name}</span>
      <div className="buttons">
        <button className="button">👀</button>
        <button className="button">📝</button>
        <button className="button">❌</button>
      </div>
    </div>
  );
}

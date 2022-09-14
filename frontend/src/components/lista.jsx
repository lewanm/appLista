export default function SetList({list}) {
  //const { list } = props;
  return (
    <div className="container">
      <span className="tittle">{list.name}</span>
      <div className="buttons">
        <button className="button">👀</button>
        <button className="button">📝</button>
        <button className="button-delete">❌</button>
      </div>
    </div>
  );
}

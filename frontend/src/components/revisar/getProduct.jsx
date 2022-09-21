export default function GetProduct({ product }) {
  return (
    <ul>
      <li>
        <label htmlFor={product.name}>{product.name}</label>
        <input type="checkbox" name={product.name} id={product.id} />
      </li>
    </ul>
  );
}

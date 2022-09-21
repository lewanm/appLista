export default function SetProduct({ product }) {
  //como es mejor? asi o separar un componente category y otro product?
  return (
    <div className="card">
      <p className="item2">{product.icon}</p>
      <p className="">{product.name}</p>
    </div>
  );
}

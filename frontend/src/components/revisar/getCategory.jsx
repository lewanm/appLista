import GetProduct from "./getProduct";

export default function getCategory({ category }) {
  return (
    <div>
      <h2>{category.name}</h2>
      {category.products.map((product) => (
        <GetProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

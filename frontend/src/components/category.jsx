import SetProduct from "./products";

export default function SetCategory({ category }) {
  return (
    <section>
      <span className="tittle2">{category.name}</span>
      <article className="container2">
        {category.products.map((product) => (
          <SetProduct key={product.id} product={product} />
        ))}
      </article>
    </section>
  );
}

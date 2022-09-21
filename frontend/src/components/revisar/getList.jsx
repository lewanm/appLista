import GetCategory from "./getCategory";

export default function GetList({ list }) {
  //en que carajos lo enmarco, esta bien un div?
  return (
    <div>
      <h1>{list.name}</h1>
      {list.categories.map((category) => (
        <div key = {category.id}>
          {category.products.length > 0 && (
            <GetCategory category={category} />
          )}
        </div>
      ))}
    </div>
  );
}

export default function SetProduct({product}) {
//reemplaza la imagen por {product.imagen} despues
//<img className="item2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="placeholder"></img>
    return (
        <p className="item2">{product.icon}</p>
    );
  }
  
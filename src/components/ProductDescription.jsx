export default function ProductDescription({ title, price, quantity, image }) {
  return (
    <div class="main">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title.split(" ")[0]}</h3>
          <p className="product-price">Price : ${price}</p>
          <p className="product-price">Quantity : {quantity}</p>
        </div>
      </div>
    </div>
  );
}

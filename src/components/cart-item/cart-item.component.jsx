import {
  CartItemContainer,
  Img,
  ItemDetails,
  Name,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} * ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

import { TbShoppingCart } from 'react-icons/tb';
import { useCartContext } from '../../../contexts/CartContext';

function CartWidget() {
  const { totalProducts } = useCartContext();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <TbShoppingCart size={23} style={{ marginRight: '5px' }} />
      <span style={{ color: "#ff6961"}}>{totalProducts || ''}</span>
    </div>
  );
}

export default CartWidget;
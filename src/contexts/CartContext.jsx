import React, {useState, useContext} from 'react'
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

function CartProvider({ children }) {

const [cart, setCart] = useState([])

const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
        setCart(cart.map((product) => {
            return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
        }))
    } else {
    setCart([...cart, { ...item, quantity }])
    }
}
const clearCart = () => {setCart([])}
const isInCart = (id) => cart.find(item => item.id === id) ? true : false
const remove = (id) => { setCart(cart.filter(item => item.id !== id))}
const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
const totalProducts = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <CartContext.Provider value={{
        addProduct,
        clearCart,
        isInCart,
        remove,
        totalPrice,
        totalProducts,
        cart
    }}>
        {children}
    </CartContext.Provider>
  )
}
export default CartProvider;
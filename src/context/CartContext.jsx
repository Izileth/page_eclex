import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const INITIAL_ITEMS = [
  {
    id: 'rit-01',
    name: 'Aurum Radiance Elixir',
    subtitle: '24k Gold & Botanical Squalane',
    price: 340,
    quantity: 1,
    image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/712a67d6-94df-4ab8-afc3-0f67694a5d8a/Leonardo_Kino_XL_Hyperrealistic_3D_digital_sculpture_of_a_myst_2.jpg'
  },
  {
    id: 'rit-02',
    name: 'Nocturne Sculpt Balm',
    subtitle: 'Midnight Peptides & Rare Jasmine',
    price: 280,
    quantity: 1,
    image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/d0093578-d817-4a80-8667-570d2d43f4c4/AlbedoBase_XL_Hyperrealistic_3D_digital_sculpture_of_a_mysteri_1.jpg'
  }
];

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('eclex_cart');
      return saved ? JSON.parse(saved) : INITIAL_ITEMS;
    } catch {
      return INITIAL_ITEMS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('eclex_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

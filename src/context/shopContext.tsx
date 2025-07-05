import React, { useState, createContext } from "react";
import itemData from "../data/menu-data.json";

export interface ShopContextType {
  cartItems: Record<number, number>;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  updateCartItemAmount: (newAmount: number, itemId: number) => void;
  getTotalValue: React.ReactNode;
}

export const ShopContext = createContext<ShopContextType | null>(null);

interface ShopContextProviderProps {
  children: React.ReactNode;
}

const getDefaultCart = () => {
  let cart: Record<number, number> = {};
  for (let i = 1; i < itemData.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider: React.FC<ShopContextProviderProps> = (props) => {
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] =
    useState<Record<number, number>>(getDefaultCart());

  const getTotalValue = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = itemData.find((product) => product.id === Number(item));
        if (itemInfo !== undefined) {
          totalAmount += cartItems[item] * itemInfo.price;
        } 
      }
    }
    return totalAmount;
  }

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemAmount = (newAmount: number, itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        openCart,
        setOpenCart,
        updateCartItemAmount,
        getTotalValue: getTotalValue()
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

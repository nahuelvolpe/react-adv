import { useState } from "react";
import { ProductInCart, onChangeArgs } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      //Si no, borrar el producto
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;

      // if (count === 0) {
      //   //Otra forma de eliminar un elemento de un array de objetos:
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      //   console.log(toDelete);

      //   return rest;
      // }

      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};

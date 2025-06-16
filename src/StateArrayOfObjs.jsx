import React from "react";
import { useState } from "react";

const StateArrayOfObjs = () => {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);

	const incrementCount = (id) => {
		setCart(prevCart =>
		  prevCart.map(item =>
			item.id === id ? { ...item, count: item.count + 1 } : item
		  )
		);
	  };
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <div>
      <h2>Корзина товаров</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} >
              <span>{item.title} - Количество: {item.count}</span>
              <button onClick={() => incrementCount(item.id)}>+1</button>
              <button onClick={() => removeItem(item.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearCart}>Очистить корзину</button>
    </div>
  );
};

export default StateArrayOfObjs;

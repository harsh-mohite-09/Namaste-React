import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import { IMG_SRC } from "../config";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems);
  const dispatch = useDispatch();
  return (
    <div className="ml-5">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">
          Your Cart - {cartItems.length} items{" "}
        </h1>
        <div className="mr-5">
          <button
            className="font-normal text-lg bg-red-200 hover:bg-red-300 p-1 rounded-lg"
            onClick={() => dispatch(removeItem())}
          >
            Delete item
          </button>
          <button
            className="font-normal text-lg bg-red-400 hover:bg-red-600 ml-1 p-1 rounded-lg"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      </div>

      <ol className="w-[900px] bg-red-100 p-5 rounded-xl">
        <li className="my-2 flex w-full justify-between font-bold text-xl">
          <div>Item</div>
          <div className="mr-5">Price</div>
        </li>
        {cartItems.map((item) => (
          <li className="my-2 flex w-full justify-between items-center">
            <div className="flex items-center">
              <img
                src={
                  item?.cloudinaryImageId === "" ||
                  item?.cloudinaryImageId === undefined
                    ? "https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png"
                    : `${IMG_SRC}${item?.cloudinaryImageId}`
                }
                alt="food item"
                className="w-[150px] h-[100px] rounded-lg object-cover"
              />
              <div className="ml-2 text-xl">{item.name}</div>
            </div>
            <div className="mr-5 text-lg">{item.price / 100}</div>
          </li>
        ))}
        <li className="my-5 flex w-full justify-between font-bold text-xl">
          <div>Total</div>
          <div className="mr-5">
            {cartItems.reduce((acc, el) => acc + Math.floor(el.price / 100), 0)}
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Cart;

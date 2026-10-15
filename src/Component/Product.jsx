import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-hot-toast'
import { add, remove } from '../redux/slice/CartSlice.jsx'
function Product({ post }) {

  const cart = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();
  function AddToCartHandler() {
    dispatch(add(post));
    toast.success("item added to the cart");
  }
  function removeFromCartHandler() {
    dispatch(remove(post.id));
    toast.error("item removed from cart");
  }
  return (
    <div className="  min:h-[400px]  bg-white  shadow-md hover:shadow-2xl flex flex-col items-center justify-between hover:scale-110
       gap-3 p-4 ease-in transition duration-300 mt-10 ml-5 rounded-xl border ">
      <div>
        <p className="text-grey-700 w-40  mt-1 text-lg font-semibold text-left ">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-grey-400 font-normal text-[12px] ">{post.description.split(" ").slice(0, 10).join(" ")+"..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} alt=""
        className="h-full w-full" />
      </div>
      <div className="flex flex-row items-center justify-between w-full p-1">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
        <div >
          {
            cart.some((cartItem) => cartItem.id === post.id) ?
              (
                <button onClick={removeFromCartHandler}
                className="border-2 rounded-md text-grey-700 font-semibold 
                 hover:bg-gray-700 transition hover:text-white duration-200 ease-in text-[15px] p-2 "
                >Remove item</button>
              ) :
              (
                <button onClick={AddToCartHandler}
                className="border-2 rounded-md text-grey-700 font-semibold 
                 hover:bg-gray-700 transition hover:text-white duration-200 ease-in text-[15px] p-2 ">Add to card</button>
              )
          }
        </div>
      </div>

    </div>

  )
}
export default Product;
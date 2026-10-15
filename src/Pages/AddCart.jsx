import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import CartItem from "./CartItem.jsx"
function AddCart() {
    const cart = useSelector((state) => state.CartSlice);
    const totalAmount = cart.reduce((total, item) => total + item.price, 0);
    const navigate=useNavigate();
  function  checkItemHandler(){
           navigate('/');
  }
    return (
        <div className="flex  flex-row items-center justify-center h-full md-w-[80%]">
            {
                cart.length > 0 ?
                    (
                        <div className="flex items-center border-2 h-full mt-4 gap-4 md:max-w-[70%] justify-evenly">

                            <div className="w-[65%]" >{
                                cart.map((Item) => (<CartItem key={Item.id} Item={Item} />))
                            }

                            </div>
                            <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
                                <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
                                    <div className="flex flex-col gap-5 ">
                                        <div className="font-semibold text-xl text-green-800 ">Your Cart</div>
                                        <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
                                        <p className="text-xl">
                                            <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-md text-lg ">Total Amount:
                                        <span className="font-bold">${totalAmount.toFixed(2)}</span>
                                    </p>
                                    <button
                                    onClick={checkItemHandler}
                                        className="w-full text-lg font-bold bg-green-500 text-slate-50 text-center mx-auto 
                                    rounded-md transition ease-in mt-2">Checkout Now</button>
                                </div>
                            </div>


                        </div>

                    ) :
                    (
                        <div className="min-h-[80vh] w-[100%] flex flex-col items-center justify-center">
                            <h1 className="text-gray-700 font-semibold text-xl mb-2">Your Cart is Empty! </h1>
                            <NavLink to={"/"}>
                                <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600
                                 font-semibold hover:text-green-700 p-3 px-10 tracking-wider" >Shop Now</button>
                            </NavLink>

                        </div>

                    )
            }

        </div>
    );
};
export default AddCart;
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from '../redux/slice/CartSlice.jsx'
import { toast } from 'react-hot-toast';
function CardItem({ Item }) {

    const dispatch = useDispatch();
    function removeCartHandler() {
        dispatch(remove(Item.id));
        toast.error("item removed from cart")
    }
    return (
        <article className="p-2 gap-2 flex flex-col items-center justify-center">
            <div className="flex items-center p-4 ml-4  justify-center gap-3 ">
                <div className="h-full ">
                    <img  src={Item.image} alt={Item.title} />
                </div>
                <div className="flex flex-col gap-3">
                    <div >
                        <h2 className="text-black font-bold text-lg tracking-tighter">{Item.title}</h2>
                        <p className="text-md mt-4 ">{Item.description}</p>

                    </div>
                    <div className=" relative flex flex-row items-center justify-between p-2 ">
                        <p className="mt-2 font-bold text-green-500">${Number(Item.price).toFixed(2)}</p>
                        <div className=" relative rounded-full p-2 h-10 w-10 flex items-center justify-center bg-red-400 object-cover">
                            <button
                                type="button"
                                onClick={removeCartHandler}
                                className="text-red-700 absolute"
                            >
                                <RiDeleteBin2Line size={20} />
                            </button>
                        </div>
                    </div>

                </div>

            </div>

            <div className="w-full h-0.5 bg-black"></div>
        </article>

    )
}
export default CardItem;
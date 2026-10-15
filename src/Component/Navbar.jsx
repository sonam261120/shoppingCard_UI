import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "./logo.jpeg";
function Navbar() {
   const cart = useSelector((state) => state.CartSlice)
   return (
      <div>
         <nav className=" relative h-[50px] flex flex-row items-center mr bg-slate-900 justify-between">
            <div className="">
               <NavLink to="/">
                  <img src={logo}
                     className=" h-10 w-30 -top-1 mt-2 absolute"
                     alt="" />
               </NavLink>
            </div>

            <div className="flex items-center justify-center font-medium text-slate-100 mr-5 space-x-6">
               <NavLink to="/">
                  <p>Home</p>
               </NavLink>


               <NavLink to="/AddCart">
                  <div className="relative">
                     <TiShoppingCart />

                     {cart.length > 0 &&
                        <span
                           className="absolute  rounded-full -top-1 -right-2 bg-green-600 text-xs w-4 h-4
                        flex justify-center items-center animate">
                           {cart.length}</span>

                     }
                  </div>
               </NavLink>
            </div>
         </nav>
      </div>
   )
}
export default Navbar;
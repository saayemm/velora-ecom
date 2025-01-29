import { Link, NavLink } from "react-router"
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
        <div className="text-4xl text-green-800 font-bold">VELORA</div>

        <div>
            <ul className="hidden sm:flex gap-5 text-sm">
                <NavLink to='/' className="flex flex-col items-center gap-1">
                    <p>Home</p>
                    <hr className="w-3/4 border-none h-[1px] bg-emerald-800 hidden"/>
                </NavLink>
                <NavLink to='/collection' className="flex flex-col items-center gap-1">
                    <p>Collection</p>
                    <hr className="w-3/4 border-none h-[1px] bg-emerald-800 hidden"/>
                </NavLink>
                <NavLink to='/about' className="flex flex-col items-center gap-1">
                    <p>About</p>
                    <hr className="w-3/4 border-none h-[1px] bg-emerald-800 hidden"/>
                </NavLink>
                <NavLink to='/contact' className="flex flex-col items-center gap-1">
                    <p>Contact</p>
                    <hr className="w-3/4 border-none h-[1px] bg-emerald-800 hidden"/>
                </NavLink>
            </ul>
        </div>

        <div className="flex items-center gap-2 text-xl text-black">
            <span className="cursor-pointer">{<IoSearchOutline />}</span>
            <div className="group relative">
                <span className="cursor-pointer">{<CgProfile />}</span>
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-xl ">
                        <p className="cursor-pointer hover:text-black">My Profile</p>
                        <p className="cursor-pointer hover:text-black">Orders</p>
                        <p className="cursor-pointer hover:text-black">Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className="relative">
                <span>{<IoCartOutline />}</span>
                <span className="absolute right-[-8px] bottom-[-1px] w-4 p-[2px] text-center loading-4 bg-black text-white rounded-full text-[8px]">5</span>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
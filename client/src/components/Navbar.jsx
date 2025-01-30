import { Link, NavLink } from "react-router"
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";


const Navbar = () => {

    const [visible, setVisible] = useState(false)

  return (
    <div className="flex justify-between items-center px-[1vw] mt-4">
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

        <div className="flex items-center gap-4 text-xl text-black">
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
            <span onClick={()=>setVisible(true)} className="w-r cursor-pointer sm:hidden ml-2"><FiMenu /></span>
        </div>
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className="flex flex-col text-gray-600">
                <div onClick={()=>setVisible(false)} className="flex items-center gap-2 p-3 cursor-pointer">
                    <span><IoIosArrowBack /></span>
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className='px-8 py-2 font-semibold' to='/'>Home</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='px-8 py-2 font-semibold' to='/collection'>Collection</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='px-8 py-2 font-semibold' to='/about'>About</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='px-8 py-2 font-semibold' to='/contact'>Contact</NavLink>
            </div>
        </div>
    </div>
  ) 
}

export default Navbar
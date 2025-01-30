import heroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className="sm:flex justify-center mt-6 bg-[#FE99B7] text-white gap-8 rounded-sm">
        <div className="flex flex-col  gap-2 justify-center sm:w-1/2 w-full pl-12 pt-12 pb-12">
            <div className="flex items-center gap-1">
                <div className="w-[120px] h-[1px] bg-white"></div>
                <p className="uppercase">our bestsellers</p>
            </div>
            <h1 className="text-6xl font-normal  mb-4">Find your <br /> signature style</h1>
            <p className="text-xl">Step into a new era of fashion with designs <br />that push boundaries and set trends</p>
           <div>
           <button className="bg-black rounded-xl cursor-pointer px-6 py-2 text-white uppercase mt-4">Shop Now</button>
           </div>
        </div>

        <div className="sm:w-1/2 w-full flex justify-end ">
            <img src={heroImage} alt="" />
        </div>
    </div>
  )
}

export default Hero
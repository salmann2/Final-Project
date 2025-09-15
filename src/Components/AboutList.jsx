import { TiTick } from "react-icons/ti";

function AboutList () {
    return (
        <>
        <h1 className="text-center font-mono text-7xl mt-10 text-orange-500">About Us</h1>

     <div className="flex justify-around mt-20">

      <img className="w-[380px] h-[400px] rounded-[25px] shadow-lg " src="https://i.pinimg.com/1200x/62/00/13/62001342f1dbe654726c7f8741a839b4.jpg" alt="" />


        
          <div className="mt-8 mr-10">

            <h1 className="font-bold text-5xl">Our Expects Chef</h1>
            <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />  Impedit mollitia repellat maxime blanditiis tenetur numquam.</p>
        
            <div className="flex gap-3 mt-5 mr-3">
            <h2 className="h-6 w-6 mt-0.5 bg-orange-400 rounded-full pt-0.5 pl-0.5 text-xl text-white"><TiTick /></h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>

            </div>

             <div className="flex gap-3 mt-5 mr-3">
            <h2 className="h-6 w-6 mt-0.5 bg-orange-400 rounded-full pt-0.5 pl-0.5 text-xl text-white"><TiTick /></h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>

             <div className="flex gap-3 mt-5 mr-3">
            <h2 className="h-6 w-6 mt-0.5 bg-orange-400 rounded-full pt-0.5 pl-0.5 text-xl text-white"><TiTick /></h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>


        </div>


      </div>
        </>
    )
}

export default AboutList
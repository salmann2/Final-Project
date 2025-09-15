function HomeList () {
    return (
        <>
        
       <div className="flex justify-around px-7 py-20">

        <div>

        <h1 className="text-6xl font-bold text-[#ff7b00]">We provide the <br/> best food for you</h1>
        <p className="mt-10 text-1xl">Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> Aliquid, doloribus eum! Omnis debitis voluptas tempora.</p>
        <button className="w-[100px] h-[40px] hover:bg-[#ff7b00] rounded-[25px] text-l shadow-lg mt-15 border-1 border-[#ff7b00]">Menu</button>
        <button className="w-[120px] h-[40px] rounded-[25px] text-l shadow-lg bg-[#ff7b00] text-white ml-3">Book a Table</button>

        </div>

        <div className="">
            <img className="w-[390px] h-[410px] rounded-[20px] shadow-lg" src="https://i.pinimg.com/1200x/d1/f3/9b/d1f39b0ad2cbb84d97d4fbdf4efe8945.jpg" alt="" />
        </div>
       </div>
         
        
        </>
    )
}


export default HomeList
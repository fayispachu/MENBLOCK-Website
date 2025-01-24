import homeimg from "./assets/home1.png";

function Home() {
  return (
    <>
      <div className="w-[100%] h-[85vh] text-center  bg-[#C2EFD4] justify-center flex">
        <div className=" w-[88%] flex flex-row py-10 justify-between">
          <div className="text-left pt-3 w-[50%]">
            {" "}
            <h1 className=" text-[#224F34] text-6xl font-[Rufina] ">
              Discover and
            </h1>
            <h1 className=" text-[#224F34] text-6xl font-[Rufina]  ">
              Find Your Own
            </h1>
            <h1 className=" text-[#224F34] text-6xl font-[Rufina]  ">
              Fashion!
            </h1>
            <div className="py-6">
              {" "}
              <ul className="text-[#267D49] text-left text-lg font-medium font-[Poppins]">
                <li className="">Explore our curated collection of stylish</li>
                <li className="">clothig and accesories tailored to your</li>
                <li className="">unique taste</li>
              </ul>
            </div>
            <button className="bg-[#224F34] text-white py-3 px-8 font-[Poppins] drop-shadow-2xl hover:  shadow-zinc-900 shadow  ">
              EXPLORE NOW
            </button>
          </div>

          <div className="w-[30%] h-full relative ">
            {" "}
            <div className="bg-[#6BC785] absolute right-1 rounded-3xl rounded-ss-full    w-96 h-96 flex justify-center ">
              <img className="w-72 pt-7   " src={homeimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

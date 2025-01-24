import exclusive from "../assets/exiq.png";

function Exclusive() {
  return (
    <>
      <div className="flex justify-center items-center w-[100%] h-[100vh]">
        <div className="w-[80%] bg-[#C2EFD4] flex flex-row h-[60vh] ">
          <div className="w-[50%] ">
            {" "}
            <img className="w-96 pt-1" src={exclusive} alt="" />
          </div>
          <div className="flex flex-col text-left w-[35%] gap-5  py-14">
            <h1 className="text-[#224F34] font-[Rockwell-Extra-Bold] text-4xl  font-bold">
              Exclusive Offer
            </h1>
            <p className="font-[Poppins] font-medium text-[#224F34] ">
              Unlock the ultimate style upgrade with our exclusive offer Enjoy
              savings of up to 40% off on our latest New Arrivals
            </p>
            <div className=" flex flex-row gap-5">
              {" "}
              <div className="w-16 h-16 bg-white flex text-center justify-center flex-col ">
                <p className="font-[Poppins] font-semibold text-3xl text-[#224F34] ">
                  06
                </p>
                <p className=" font-[Poppins] font-medium">Days</p>
              </div>
              <div className="w-16 h-16 bg-white flex text-center justify-center flex-col ">
                <p className="font-[Poppins] font-semibold text-3xl text-[#224F34] ">
                  06
                </p>
                <p className=" font-[Poppins] font-medium">Hours</p>
              </div>
              <div className="w-16 h-16 bg-white flex text-center justify-center flex-col ">
                <p className="font-[Poppins] font-semibold text-3xl text-[#224F34] ">
                  06
                </p>
                <p className=" font-[Poppins] font-medium">Minutes</p>
              </div>
            </div>
            <button className="p-4 mt-4 bg-[#224F34] w-40 font-medium font-[Poppins] text-white">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exclusive;

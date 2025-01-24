import leftarrow from "../assets/leftarrow.png";

import rightarrow from "../assets/rightarrow.png";
function Feedback() {
  return (
    <>
      <div className="w-[100%] h-[100vh] bg-slate-50 ">
        <div className=" text-center flex justify-between flex-col items-center">
          <h1 className="font-[Roboto-Slab] font-medium text-[#224F34] text-4xl pt-16">
            Feedback Corner
          </h1>
          <div className="flex flex-row gap-10 justify-center items-center pt-28  ">
            <div className="  drop-shadow-2xl border pt-16 w-96 p-3 h-60 flex flex-col  ">
              {" "}
              <h1 className="text-[#224F34]  font-semibold font-[Roboto-Serif] text-2xl">
                Emily Wilson
              </h1>{" "}
              <p className=" text-[#224F34]">
                The customer experience was exceptional from start to finish.
                The website is user-friendly, the checkout process was smooth,
                and the clothes I ordered fit perfectly. Im beyond satisfied!
              </p>
            </div>
            <div className=" drop-shadow-2xl  border pt-16 w-96 p-3 h-60 flex flex-col  ">
              {" "}
              <h1 className="text-[#224F34]  font-semibold font-[Roboto-Serif] text-2xl">
                Emily Wilson
              </h1>{" "}
              <p className=" text-[#224F34]">
                The customer experience was exceptional from start to finish.
                The website is user-friendly, the checkout process was smooth,
                and the clothes I ordered fit perfectly. Im beyond satisfied!
              </p>
            </div>
            <div className=" drop-shadow-2xl border pt-16  w-96 p-3 h-60 flex flex-col  ">
              {" "}
              <h1 className="text-[#224F34]  font-semibold font-[Roboto-Serif] text-2xl">
                Emily Wilson
              </h1>{" "}
              <p className=" text-[#224F34]">
                The customer experience was exceptional from start to finish.
                The website is user-friendly, the checkout process was smooth,
                and the clothes I ordered fit perfectly. Im beyond satisfied!
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-10 pt-20 ">
            <button className="bg-white w-10 justify-center items-center  pl-2 drop-shadow-lg h-10">
              <img src={leftarrow} alt="" />
            </button>
            <button className="bg-white flex justify-center items-center drop-shadow-lg w-10 h-10">
              <img src={rightarrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;

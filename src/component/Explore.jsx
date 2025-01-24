function Explore() {
  return (
    <>
      <div className="w-[100%] h-[100vh]">
        <div className="text-center">
          {" "}
          <h1 className="text-[#224F34] text-5xl font-bold font-[Roboto-Slab] pt-12">
            Best Selling
          </h1>
          <p className="text-[#224F34] font-[Poppins] pt-5">
            Get in on the trend with our curated selection of best-selling
            styles.
          </p>
        </div>
        <div className=" gap-5 flex flex-row justify-center pt-6 ">
          <div className="text-center flex flex-col gap-3">
            {/* Card */}
            <div className="bg-[#93B9A2] w-72 h-80"></div>
            <h3 className="font-semibold font-[Poppins]  text-[#373737]">
              Regular Fit Long Sleeve Top
            </h3>{" "}
            <span className="flex flex-row gap-x-5  justify-center">
              <p>$111</p>| <p>*4.5</p>
            </span>
          </div>
          <div className="text-center items-center flex flex-col gap-3">
            {/* Card */}
            <div className="bg-[#A9D4BA] w-72 h-80"></div>
            <h3 className="font-semibold font-[Poppins] text-[#373737]">
              Regular Fit Long Sleeve Top
            </h3>{" "}
            <span className="flex flex-row gap-x-5  justify-center">
              <p>$111</p>| <p>*4.5</p>
            </span>
            <button className="w-32 mt-3 py-2 px-5 border">See all </button>
          </div>{" "}
          <div className="text-center flex flex-col gap-5">
            <div className="text-center flex flex-col gap-3">
              {/* Card */}
              <div className="bg-[#A3F3BE] w-72 h-80"></div>
              <h3 className="font-semibold font-[Poppins] text-[#373737]">
                Regular Fit Long Sleeve Top
              </h3>{" "}
              <span className="flex flex-row gap-x-5  justify-center">
                <p>$111</p>| <p>*4.5</p>
              </span>
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Explore;

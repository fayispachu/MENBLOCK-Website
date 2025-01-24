import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twiter from "../assets/twiter.png";
function Footer() {
  return (
    <>
      <footer className="bg-[#224F34]">
        <div className="bg-[#224F34] w-[100%]  justify-center h-[50vh] flex flex-row  pt-20 gap-44">
          <div className=" ">
            {" "}
            <h1 className="text-white font-[Elephant] text-2xl ">MEN BLOCK</h1>
            <p className="text-[Roboto-Slab] font-medium text-white pt-5">
              Social Media
            </p>
            <span className="flex flex-row gap-5 pt-5">
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="" />
              <img src={twiter} alt="" />
            </span>
          </div>

          <div className="text-white gap-3 flex flex-col ">
            <h1 className="text-[Roboto-Slab] font-medium text-xl">SHOPE</h1>
            <ul className="text-[Poppins] font-medium flex flex-col gap-3">
              <li>Products</li>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>
          <div className="text-white gap-3 flex flex-col ">
            <h1 className="text-[Roboto-Slab] font-medium text-xl">COMPANY</h1>
            <ul className="text-[Poppins] font-medium flex flex-col gap-3">
              <li>About us</li>
              <li>Contact</li>
              <li>News</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="text-white gap-6 flex flex-col ">
            <h1 className="text-[Roboto-Slab] font-medium text-xl">
              STAY UP TO DATE
            </h1>
            <label className="bg-[#A3F3BE] " htmlFor="">
              {" "}
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-[#224F34] border p-2 pl-3 pr-12 border-[#A3F3BE]"
              />
              <span className="p-4">Submit</span>
            </label>
          </div>
        </div>
        <div className="flex flex-row gap-5  items-center justify-center pb-16 font-[Poppins]  font-semibold text-white">
          <hr className="bg-[#A3F3BE] text-[#A3F3BE]   w-[70%]" />
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

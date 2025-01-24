import carticon from "../assets/cart.png";

function Navbar() {
  return (
    <>
      <div className="py-7   bg-[#C2EFD4] flex flex-row items-center ">
        <h1 className="pl-20 text-[#224F34] font-[Elephant] text-2xl ">
          MEN BLOCK
        </h1>
        <ul className="text-[#224F34] font-[Poppins] font-medium flex flex-row   gap-6 pl-72">
          <li>HOME</li>
          <li>SHOPE</li>
          <li>FEATURES</li>
          <li>CONTACT</li>
        </ul>
        <img className="pl-56" src={carticon} alt="Cart" />
        <button className="ml-10 text-[#224F34] bg-[#C2EFD4] py-2 px-7 outline  outline-[#224F34] outline-2 rounded-sm ">
          LOGIN
        </button>
      </div>
    </>
  );
}

export default Navbar;

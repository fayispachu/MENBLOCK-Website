function Product() {
  return (
    <>
      <div className=" bg-white ">
        <div className="flex justify-center pt-20">
          {" "}
          <h1 className="text-[#224F34] font-[Roboto-Slab]  text-4xl">
            Our Products
          </h1>
        </div>

        <div className="pt-12 flex justify-center">
          <ul className="flex flex-row gap-14">
            <li>SALE</li>
            <li>HOT</li>
            <li>NEW ARRIVALS</li>
            <li>ACCESORIES</li>
          </ul>
        </div>

        <div className="flex flex-row gap-10 justify-center text-center pt-10">
          <div className="flex justify-center flex-col">
            <div className="bg-slate-200 w-60 h-72"></div>
            <h1>shirt name</h1>
            <span className="flex flex-row gap-x-5  justify-center">
              <p>$111</p>| <p>*4.5</p>
            </span>
          </div>
          <div className="flex justify-center flex-col">
            <div className="bg-slate-200 w-60 h-72"></div>
            <h1>shirt name</h1>
            <span className="flex flex-row gap-x-5  justify-center">
              <p>$111</p>| <p>*4.5</p>
            </span>
          </div>
          <div className="flex justify-center flex-col">
            <div className="bg-slate-200 w-60 h-72"></div>
            <h1>shirt name</h1>
            <span className="flex flex-row gap-x-5  justify-center">
              <p>$111</p>| <p>*4.5</p>
            </span>
          </div>
          <div className="flex justify-center flex-col">
            <div className="bg-slate-200 w-60 h-72"></div>
            <h1>shirt name</h1>
            <span className="flex flex-row gap-x-5  justify-center">
              <p>$111</p>| <p>*4.5</p>
            </span>
          </div>
        </div>

        {/* Second card section  */}
        <div className="flex flex-row gap-10 justify-center text-center pt-10">
          <div className="flex justify-center flex-col">
            <div className="bg-slate-200 w-60 h-72"></div>
            <h1>shirt name</h1>
            <span className="flex flex-row gap-x-5  justify-center">
              <p>$111</p>| <p>*4.5</p>
            </span>
          </div>
          <div className="flex justify-center flex-col">
            <div className="bg-slate-200 w-60 h-72"></div>
            <h1>shirt name</h1>
            <span className="flex flex-row gap-x-5  justify-center">
              <p>$111</p>| <p>*4.5</p>
            </span>
          </div>
          <div className="flex justify-center flex-col">
            <div className="bg-slate-200 w-60 h-72"></div>
            <h1>shirt name</h1>
            <span className="flex flex-row gap-x-5  justify-center">
              <p>$111</p>| <p>*4.5</p>
            </span>
          </div>
          <div className="flex justify-center flex-col">
            <div className="bg-slate-200 w-60 h-72"></div>
            <h1>shirt name</h1>
            <span className="flex flex-row gap-x-5  justify-center">
              <p>$111</p>| <p>*4.5</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

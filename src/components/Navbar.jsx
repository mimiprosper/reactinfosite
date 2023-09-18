import Logo from "../assets/react.svg";

const Navbar = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-5 bg-[#21222A]">
        <div className="flex items-center gap-3">
          <img src={Logo} className=" w-[50px]" alt="image" />
          <div className="text-[30px] font-semibold text-[#61DAFB]">
            ReactFacts
          </div>
        </div>
        <div>
          <ul className="flex space-x-5 text-white text-[18px] ">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Services</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

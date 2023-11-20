import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed h-10 flex justify-around px-4 z-10 my-5 gap-x-96 pointer-events-none">
      {/* logo */}
      <div className="flex space-x-2">
        <div>PLUSHY</div>
      </div>
      {/* links */}
      <div className="flex space-x-4">
        <div>BUY NOW</div>
      </div>
    </nav>
  );
};

export default Navbar;

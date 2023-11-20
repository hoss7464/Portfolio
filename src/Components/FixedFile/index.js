import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function FixedFile() {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
    </>
  );
}

export default FixedFile;

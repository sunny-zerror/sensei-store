import React from "react";
import Footer from "../common/Footer";
import HelpBtn from "../common/HelpBtn";
import FilterDrop from "../products/FilterDrop";
import useOpenFilter from "@/store/openFilter";
import useOpenDescription from "@/store/openDescription";
import OpenProductDescription from "../products/OpenProductDescription";
import DesktopHeader from "../common/header/DesktopHeader";
import MobileHeader from "../common/header/MobileHeader";
const Layout = ({ children }) => {

  const { openFilter, setOpenFilter } = useOpenFilter();
  const { isOpen, activeSection, closeDesc } = useOpenDescription();

  return (
    <>
      {openFilter && <FilterDrop />}
      {isOpen && <OpenProductDescription />}
      <HelpBtn />
      <DesktopHeader/>
      <MobileHeader/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;

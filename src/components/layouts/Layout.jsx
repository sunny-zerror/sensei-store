import React from "react";
import Footer from "../common/Footer";
import HelpWidget from "../ui/HelpWidget";
import useOpenFilter from "@/store/openFilter";
import useOpenDescription from "@/store/openDescription";
import OpenProductDescription from "../product/OpenProductDescription";
import DesktopHeader from "../common/header/DesktopHeader";
import MobileHeader from "../common/header/MobileHeader";
import FilterDrawer from "../product/all-products/filter-drawer/FilterDrawer";
const Layout = ({ children }) => {

  const { openFilter, setOpenFilter } = useOpenFilter();
  const { isOpen, activeSection, closeDesc } = useOpenDescription();

  return (
    <>
      {openFilter && <FilterDrawer />}
      {isOpen && <OpenProductDescription />}
      <HelpWidget />
      <DesktopHeader />
      <MobileHeader />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

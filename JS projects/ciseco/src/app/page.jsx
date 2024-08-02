"use client";
import React, { useRef, useState } from "react";
import SectionOne from "@/Components/HomeSections/SectionOne";
import SectionTwo from "@/Components/HomeSections/SectionTwo";
import SectionFour from "@/Components/HomeSections/SectionFour";
import SectionThree from "@/Components/HomeSections/SectionThree";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree/>
      <SectionFour/>
    </div>
  );
};

export default Home;

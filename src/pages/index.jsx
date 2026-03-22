import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import HeroOneSection from "@components/sections/HeroOne"

const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const Home1 = () => {
  return (
    <Layouts fullWidth={true}>
      <HeroOneSection />
      <TestimonialSlider />
    </Layouts>
  );
};
export default Home1;

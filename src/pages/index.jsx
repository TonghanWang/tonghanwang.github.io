import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import { useLanguage } from "@library/LanguageContext";

import HeroOneSection from "@components/sections/HeroOne"

const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const Home1 = () => {
  const { lang } = useLanguage();
  return (
    <Layouts fullWidth={true}>
      <div className={lang === 'zh' ? 'zh-kaiti' : ''}>
        <HeroOneSection />
        <TestimonialSlider />
      </div>
    </Layouts>
  );
};
export default Home1;

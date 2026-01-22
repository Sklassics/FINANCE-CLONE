import React from "react";
import Hero from "../pages/Hero";
import CaseStudies from "../pages/CaseStudies";
import RecruitProcess from "./RecruitProcess";
import ContactSection from "./ContactSection";
import CareerLevels from "./CareerLevels";
import FinanceHero from "./FinanceHero";
import Testimonials from "./Testimonials";
import Executive from "./Executive";
import Footer from "./Footer";


const Hire = () => {
    return (
        <>
        <Hero />
        <FinanceHero />
        <CareerLevels />
        <RecruitProcess />
        <Testimonials />
        <CaseStudies />
        <Executive />
        <ContactSection />
        <Footer />



        </>

    )
}; 
export default Hire;
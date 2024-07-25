"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const musicAcademyContent = [
    {
      title: "Introduction to Music Theory",
      description: "Explore the fundamentals of music theory, including scales, chords, and rhythm. Perfect for beginners looking to understand the building blocks of music."
    },
    {
      title: "Mastering the Piano",
      description: "A comprehensive course for aspiring pianists, covering techniques, practice routines, and classical pieces. Suitable for all skill levels."
    },
    {
      title: "Guitar for Beginners",
      description: "Learn the basics of playing the guitar, from tuning and strumming to playing your first songs. Ideal for those new to the instrument."
    },
    {
      title: "Vocal Training and Performance",
      description: "Enhance your vocal skills with professional training. This course includes breathing exercises, pitch control, and performance techniques."
    },
    {
      title: "Music Production and Recording",
      description: "Dive into the world of music production. Learn how to use digital audio workstations (DAWs), record tracks, and produce high-quality music."
    }
  ];
  
function WhyCHooseUs() {
  return (
    
        <StickyScroll content={musicAcademyContent}/>
    
  )
}

export default WhyCHooseUs
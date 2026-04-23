"use client"

import React, { useState } from 'react'
import Image from "next/image";
import { Phone, Shield, Zap, BarChart3, Search, Bot } from "lucide-react";


import proxima from '../public/proxima.png'
import baner from '../public/baner.png'
import right from "../public/right.png";

import seo from "../public/seo.png";
import ppc from "../public/ppc.png";
import social from "../public/social.png";
import creative from "../public/creative.png";
import content from "../public/content.png";
import web from "../public/web.png";

const services = [
  {
    title: "SEO Services",
    desc: "Rank higher, get more traffic, and convert visitors into customers.",
    img: seo,
    btn: "Explore SEO Services",

  },
  {
    title: "PPC Ads",
    desc: "Get qualified leads fast with high-ROI campaigns.",
    img: ppc,
    btn: "Start Your PPC Campaign",
  },
  {
    title: "Social Media",
    desc: "Grow your brand with strategic organic + paid social campaigns.",
    img: social,
    btn: "Grow Your Social Presence",
  },
  {
    title: "Creative Services",
    desc: "Creative ideas crafted with purpose, precision, authenticity.",
    img: creative,
    btn: "Explore Creative Services",
  },
  {
    title: "Content Writing",
    desc: "High-quality, SEO-optimized content that ranks.",
    img: content,
    btn: "View Content Services",
  },
  {
    title: "Website Designing",
    desc: "Powerful, fast, high-converting websites.",
    img: web,
    btn: "Build Your Website",
  },
];


const data = [
  {
    icon: "🎯",
    title: "Tailor-made Digital Marketing Strategies",
    desc: "Custom-built strategies aligned with your goals, industry and competition.",
  },
  {
    icon: "🚀",
    title: "Proven SEO Frameworks",
    desc: "SEO systems designed to rank faster and convert high-intent traffic.",
  },
  {
    icon: "💰",
    title: "High-Performance Google Ads",
    desc: "Optimized campaigns that reduce cost-per-click and maximize ROI.",
  },
  {
    icon: "📊",
    title: "Transparent Reporting Dashboards",
    desc: "Live performance dashboards for full clarity on growth.",
  },
  {
    icon: "🤝",
    title: "Dedicated Account Manager",
    desc: "Personal support and expert guidance throughout your campaign.",
  },
  {
    icon: "🏢",
    title: "Fully In-House Team",
    desc: "No outsourcing, all work handled by our in-house experts.",
  },
  {
    icon: "💼",
    title: "Affordable for SMBs",
    desc: "Premium quality digital marketing at budget-friendly pricing.",
  },
];


const steps = [
  {
    icon: "📝",
    title: "Step 1",
    heading: "Free Audit & Strategy Call",
    desc: "We diagnose your website, competitors, keywords & growth gaps.",
  },
  {
    icon: "📌",
    title: "Step 2",
    heading: "Custom Growth Plan",
    desc: "You receive a clear, actionable roadmap customized to your goals.",
  },
  {
    icon: "⚙️",
    title: "Step 3",
    heading: "Implementation",
    desc: "SEO, ads, content, and web execution begins immediately.",
  },
  {
    icon: "📊",
    title: "Step 4",
    heading: "Tracking & Optimization",
    desc: "Monthly ROI reporting + continuous refinement to boost results.",
  },
];

const industries = [
  { icon: "🦷", title: "Dentists & Healthcare" },
  { icon: "⚖️", title: "Lawyers & Law Firms" },
  { icon: "🏠", title: "Real Estate" },
  { icon: "🛒", title: "Ecommerce" },
  { icon: "🛠️", title: "Home Services" },
  { icon: "💪", title: "Fitness & Wellness" },
  { icon: "🎓", title: "Education & Coaching" },
  { icon: "💻", title: "Technology & SaaS" },
];


const features = [
  {
    icon: Search,
    title: "Real, Transparent Growth",
    desc: "No vanity numbers. Only measurable progress and real results.",
  },
  {
    icon: Phone,
    title: "Monthly Strategy Calls",
    desc: "Stay aligned with clear updates, planning, and next steps.",
  },
  {
    icon: BarChart3,
    title: "Semrush, Ahrefs, GA4, Hotjar Expertise",
    desc: "Advanced digital tools used strategically for growth.",
  },
  {
    icon: Shield,
    title: "100% White-Hat SEO",
    desc: "Sustainable rankings with zero risks and ethical methods.",
  },
  {
    icon: Bot,
    title: "AI-Powered Workflows (AEO + GEO Ready)",
    desc: "Smarter automation + search engine optimization for the future.",
  },
  {
    icon: Zap,
    title: "Fast Communication & Dedicated Support",
    desc: "Always accessible, no delays, no confusion.",
  },
];


export default function Home() {

  const [openmenu, setopenmenu] = useState(false)


  return (
    <div className=''>
      {/* Header */}

      <div className='sticky top-0 left-0 w-full z-50'>
        <div className='hidden md:block'>
          <div className=' flex text-xl  bg-[#14307D] text-white  justify-between px-10 lg:px-30 items-center p-1 '>

            <div className='lg:flex gap-10 font-bold'>
              <div className='text-base'>+91 1234567890</div>
              <div className='text-base'>info@elysiandigitalservices.com</div>
            </div>

            <ul className='flex gap-6 '>
              <button className='border-red-500 p-1 rounded-md bg-[#E60601]'>Request a call</button>
              <button className='border-red-500 p-1 rounded-md bg-[#E60601]'>Get in Touch</button>


            </ul>


          </div>
        </div>


        {/* Main Header */}

        <div className=' flex text-xl text-black justify-between px-2 lg:px-30 items-center bg-white'>
          <div>
            <div>
              <Image src={proxima} className='cursor-pointer' alt='logo' width={140} height={100} />
            </div>
          </div>
{
openmenu ?             <Image onClick={() => setopenmenu(false)} className='block lg:hidden cursor-pointer' 
         
src=
  "https://cdn-icons-png.freepik.com/512/8438/8438629.png"
          alt='logo'  width={60} height={100}
           />
           :
          <Image onClick={() => setopenmenu(true)} className='block lg:hidden cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s" alt='logo' width={50} height={50} />

}


           



          <div className='hidden lg:block'>
            <ul className='flex gap-4 font-semibold'>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Service</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>



        {
          openmenu && <div>
            <div className='bg-white lg:hidden'>
              <ul className='flex-col px-6 text-black gap-4  text-lg font-semibold'>

                <a onClick={()=>setopenmenu(false)}  href="#home">     <li className='w-full cursor-pointer active:bg-gray-50  hover:bg-gray-50 p-3 border-b' >Home</li></a>
                <a onClick={()=>setopenmenu(false)} href="#about">    <li className='w-full cursor-pointer  active:bg-gray-50 hover:bg-gray-50 p-3 border-b' >About Us</li></a>
                <a onClick={()=>setopenmenu(false)} href="#services"> <li className='w-full cursor-pointer  active:bg-gray-50 hover:bg-gray-50 p-3 border-b' >Service</li></a>
                <a onClick={()=>setopenmenu(false)} href="#contact"> <li  className='w-full cursor-pointer  active:bg-gray-50 hover:bg-gray-50 p-3 border-b' >Contact Us</li></a>

              </ul>
            </div>
          </div>
        }




      </div>



      {/* Body */}

      <div id="home" >
        <div className='w-full h-full'>
          <Image className='w-full h-full object-cover' src={baner} alt='body' width={800} height={300} />
        </div>


      </div>



      {/* Services */}

      <section id="services" className="bg-[#eef3f8] text-black py-16">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl text-black font-bold text-center mb-4">Our Core Digital Marketing Services in all India</h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            At Proxima Digital Agency, we help your business thrive online.
            Our digital marketing solutions combine SEO, social media,
            content marketing, and paid advertising to increase visibility,
            engage your audience, and drive results.
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-8">
            {services.map((item, i) => (
              <div key={i} className="hover:scale-105 active:scale-95 bg-white rounded-xl p-4  space-y-4 shadow-md overflow-hidden active:shadow-xl active:shadow-black hover:shadow-xl hover:shadow-black transition"  >
                <img src={item.img.src} alt={item.title} className="w-full rounded-xl object-cover" />
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">  {item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4"> {item.desc}</p>
                  <button className="w-full bg-red-600 text-white py-3 rounded-full hover:bg-red-700 transition">{item.btn}</button>
                </div>
              </div>
            ))}


          </div>

        </div>
      </section>




      {/* About */}

      <section id="about" className="bg-[#eef3f8] text-black py-16">
        <div className="max-w-6xl mx-auto px-4">

          <div className="bg-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">

            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4"> Proxima Digital Agency </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Innovative, Creative, Strategic, Results-Driven, Engaging,
                Adaptive, Impactful, Professional, Dynamic, Trustworthy,
                Digital, Growth-Oriented.
              </p>

              <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"> Learn More</button>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <Image src={right} alt="about" className="w-[50vw] max-w-md" />
            </div>

          </div>

        </div>
      </section>


      {/* WhyChooseSection*/}

      <section className="bg-[#c3d1e8e3] text-black py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl text-[#161616] font-bold mb-4">Why Choose Proxima Digital Services in India?</h2>
          <p className="text-gray-600 mb-12">Your business deserves more than random tactics, you deserve a clear, proven growth system.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <div key={index} className={`bg-white p-8 rounded-2xl shadow-black/70 hover:shadow-2xl hover:scale-110 transition-all duration-300 ease-in-out hover:-translate-y-2 ${index === 6 ? "md:col-start-2 flex justify-center items-center" : ""}`}>
                <div className="flex flex-col items-center text-center max-w-sm mx-auto">
                  <div className="bg-gray-100 p-4 rounded-xl mb-4 text-2xl">{item.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>

                </div>


              </div>
            ))}
          </div>

        </div>
      </section>


      {/* WeWorkSection */}

      <section className="bg-[#d9e2ea] text-black py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-12">How We Work (Simple, Effective Process)</h2>

          <div className="grid md:grid-cols-2  lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl  shadow-md hover:shadow-xl hover:shadow-black/30 hover:-translate-y-2 transition">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gray-100 w-20 h-20 flex items-center justify-center rounded-full text-3xl mb-4"> {step.icon}</div>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <h4 className="font-bold text-xl mb-2">{step.heading}</h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* Industries */}

      <section className="bg-[#cfd9e2]  text-black py-16 px-6 md:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Industries We Excel In</h2>
          <p className="text-gray-700 mt-3">We understand the unique needs of different sectors:</p>
        </div>

        {/* Grid */}
        <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((item, index) => (
            <div key={index} className="bg-white  rounded-2xl shadow-md hover:shadow-xl hover:shadow-black/30 hover:-translate-y-2 transition duration-300 p-8 text-center"
            >
              {/* Icon */}
              <div className="text-6xl mb-7">{item.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>


      {/* WhyDifferent */}

      <section className="bg-gray-100  text-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What Makes Us Different? </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (<div key={index} className="flex gap-4 p-6 bg-white rounded-xl border-l-4 border-blue-500 hover:shadow-black/40 shadow-xl hover:translate-x-4 hover:shadow-md transition">
                <div className="bg-blue-900 text-white p-3 rounded-full"> <Icon size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>

              );
            })}
          </div>
        </div>
      </section>

      {/* get in touch  */}
      <section id="contact" className="bg-[#eaf0f6] text-black py-16 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* LEFT INFO BOX */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-semibold mb-2">Location :</p>
              <p className="text-gray-600 text-sm mb-4">📍 DLF 40, Kirti Nagar Industrial Area, Moti Nagar,New Jhansi, India - 110015</p>

              <hr className="my-4" />

              <p className="font-semibold mb-2">Email :</p>
              <p className="text-gray-600 text-sm mb-4">✉️ info@elysiandigitalservices.com</p>

              <p className="font-semibold mb-2">Phone</p>
              <p className="text-gray-600 text-sm">📞 +919266474032</p>
            </div>

            {/* FORM */}
            <div className="md:col-span-2">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input type="text" placeholder="Name *" className="p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-400" />

                <input type="email" placeholder="Email Id *" className="p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-400" />

                <input type="text" placeholder="Mobile No*" className="p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-400" />

                <select className="p-4 rounded-xl border outline-none text-gray-500">
                  <option>Choose Services</option>
                  <option>SEO</option>
                  <option>Web Development</option>
                  <option>Marketing</option>
                </select>

                <textarea placeholder="Type Your Message" rows={4} className="md:col-span-2 p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-400"></textarea>

                <div className="md:col-span-2">
                  <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition">Submit Now</button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-[#1f3b82] text-white px-30  pt-16 pb-6 lg:px-6">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-10">

          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Proxima Digital Agency</h2>

            <p className="text-gray-200 text-sm mb-6 leading-relaxed">Contact us for expert support, smart digital solutions, fast response, reliable service, and dedicated assistance for your business growth.
            </p>

            <div className="flex gap-3">
              <div className="bg-red-500 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                f
              </div>
              <div className="bg-red-500 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                ig
              </div>
              <div className="bg-red-500 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                in
              </div>
              <div className="bg-red-500 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                wa
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Company Profile</li>
              <li className="cursor-pointer">Case Studies</li>
              <li className="cursor-pointer">Blogs</li>
              <li className="cursor-pointer">Contact Us</li>
              <li className="cursor-pointer">Sitemap</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Useful Links</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>Career Page</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
              <li>E-Books</li>
              <li>Google Algorithm Updates</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Our Services</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>SEO Services</li>
              <li>PPC Ads</li>
              <li>Social Media</li>
              <li>Creative Services</li>
              <li>Content Writing</li>
              <li>Website Designing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Connect With Us</h3>
            <ul className="space-y-3 w-full text-gray-200 text-sm leading-relaxed">
              <li>📞 +91 9266474032</li>
              <li><span>✉️ info@elysiandigitalservices.com</span></li>
              <li>
                📍 DLF 40, Kirti Nagar Industrial Area, Moti Nagar,
                New Delhi, India - 110015
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-400 mt-12 pt-5 text-center text-sm text-gray-200">
          Copyright © 2026 Elysian Digital Services. All rights reserved.
        </div>

      </footer>






    </div>
  );
}

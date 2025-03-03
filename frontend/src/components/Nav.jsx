'use client'
import Image from "next/image"

import { useEffect } from "react"
import Link from "next/link"

const icon=30

const Nav = () => {
  useEffect(()=>{
    // document.getElementById('service').addEventListener('mouseover', ()=>{
    //   document.getElementById("drop").style.display="block"
    // })
    // document.getElementById('service').addEventListener('mouseleave', ()=>{
    //   document.getElementById("drop").style.display="none"
    // })
    let nav= document.getElementById('nav')
    let prevY=0
    window.addEventListener('scroll',()=>{
      let currentY=window.scrollY
      // document.documentElement.scrollTop
      if(currentY>prevY){
        nav.style.top='-20rem'
        prevY=currentY
      }else{
        nav.style.top=0
      }
      prevY=currentY
    })})
  return (
    <>
    <nav id="nav" className="px-20 py-4">
      <div className="px-4 text-[2.3rem]  top-0 z-10 left-0 flex justify-around items-center ">
        <Link href={'/'}><h1 className="logo cursor-pointer gd3 bg-clip-text text-transparent">FAE</h1></Link>
      </div>
        <ul id='nav-mid' className="nav-mid flex flex-row items-center justify-between w-80 bg-transparent">
            {/* <li>
                <Link href="/">
                <span id="home">Home</span>
                </Link>
            </li> */}
          <li id="service" className="flex flex-col relative">
              <span style={{cursor:"pointer"}}>Language</span>
            <div>
              <ul id='drop'>
              </ul>
            </div>
          </li>

          <li>
            <Link href="/about">
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href="https://www.kaggle.com/code/himhtrinh/facial-age-estimation-ai-class-nhom3-studying">
              <span>Source code</span>
            </Link>
          </li>
        </ul>
    </nav>
    </>
  )
}

export default Nav
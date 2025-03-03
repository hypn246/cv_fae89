'use client'
import Nav from "@/components/Nav";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData]=useState({})
  const [image,setImage]=useState()

  const handelFileUpload=(e) => {
    e.preventDefault()
    setImage(e.target.files[0]);
  }

  const Est=async()=>{
    let body=new FormData
    body.append('image', image)
    // body.append('desc', desc)

    await fetch({
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': document.cookie,
        },
        method:'POST',
        url:'http://127.0.0.1:8000/estimate',
        data:body
    }).then(res=>res.json()).then(d=>setData(d)).then(console.log(data))
  }
  return (
    <>

    <div className="w-full center flex-col">
      <div className="center flex-col w-[60%] text-center tracking-wide">
        <h1 className="text-5xl text-gray-400">Facial Age Estimation</h1>
        <p className="p-3 text-xl text-gray-400">Free online facial age detection. All you need is a photo, and the face age calculator can estimate your age. Everyone's face age and actual age will have some gaps, come and test how old I am. The photos you upload are only used for age detection and will not be used for other purposes. The photos will be automatically deleted after the test is completed, so you don’t have to worry about privacy leakage.</p>
      </div>
      
      <form className="center flex-col mt-5 text-left w-[80%]" method="POST"
        encType='multipart/form-data' action="http://127.0.0.1:8000/estimate">
        <label htmlFor="" className="my-5">Select a photo:</label>
        <input type="file" name="image" id="upload" required 
            onChange={handelFileUpload} className="upfile"/>
        <button type="submit" onSubmit={Est} className="gd2 rounded-2xl p-5 my-5 w-80">Predict my age!?</button>
      </form>
    </div>
    </>
  );
}

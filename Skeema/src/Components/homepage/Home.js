import React from "react";
import Cards from './Cards'
import Image1 from '../common/assests/fastcompany.png'
import Image2 from '../common/assests/Elpais.png'
import Image3 from '../common/assests/INC.png'
import Image4 from '../common/assests/TC.png'
import Image5 from '../common/assests/mashable.png'
import Image6 from '../common/assests/Science alert.png'
import '../homepage/Home.css'

export default function Home() {
  const companys = [
    { main: Image1 },
    { main: Image2 },
    { main: Image3 },
    { main: Image4 },
    { main: Image5 },
    { main: Image6 },

  ];
  return (

    <>
      <div className=" bottom-14 pt-20 " >

        <img src="https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/63211cc49298aa30db18b0d9_Tabs.svg" className="" />
        <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=362313&theme=light" id="image" className="w-40 absolute top-[75%] left-20 md:top-[3%] left-[80%]" />
        <h1 className=" text-4xl text-center font-bold md:text-8xl">Your browser is a mess.<br /> It’s not your fault.</h1>
        <p className=" my-8  text-gray-500 text-center">Skeema is a new way to manage your tabs that helps declutter your browser and your mind.</p>
        <button type="button" className=" ml-[35%] p-3 md:ml-[47%] bg-black text-white border rounded-full p-2 ">Get Started</button>
      </div>
      <div className="bg-[#ffffff5c] h-full mt-28">
        <h1 className="text-center text-gray-500 pt-4">AS FEATURED IN</h1>
        <div className=" grid  grid-cols-2 md:grid-cols-6 mb-6 text-center px-6 ">

          {companys.map((obj) => (
            <img src={obj.main} className=" w-32 mt-10 pb-3 ml-2" />))}
        </div>
      </div>
      {/* Threee cards*******************************8 */}
      <div className=" mt-28">
        <h1 className=" font-bold text-3xl text-center "> Skeema solves the three main problems that <br /> cause tab overload.</h1>
        <Cards />
      </div>
      {/* vertical cards ****************************  */}
      <div className=" ">
        {/* card start ****** */}
        <div className="  text-2xl ml-3 mt-52">
          <div className="flex ">
            <h1 className=" text-gray-500 font-mono">01</h1>
            <img src="https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/6321073a41e0518dece1cb79_hourglass.svg" className="w-11 relative left-[45%] bg-[#f7e2e2] rounded p-2 mb-2" />
          </div>
          <h1 className="text-4xl font-bold font-Inter, sans-serif">Declutter your <br /> browser</h1>
          <p className="text-sm font-Inter, sans-serif text-gray-500 mt-2 ">Organize your tabs into projects and outlines.</p>
        </div>
        {/* card start ****** */}
        <div className=" text-2xl ml-3 mt-64 text-2xl  mt-52">
          <div className="flex ">
            <h1 className=" text-gray-500 font-mono">02</h1>
            <img src="https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/632106dea62b46be39712309_page-scroll.svg" className="w-11 relative left-[45%] bg-[#8bf5e5] rounded p-2 mb-6 " />
          </div>
          <h1 className="text-4xl font-bold font-Inter, sans-serif">Out of sight, but<br /> not out of mind</h1>
          <p className="text-sm font-Inter, sans-serif text-gray-500 mt-2 ">ORe-encounter saved articles and instantly access any <br /> item on your new tab page</p>
        </div>
        {/* card start ****** */}
        <div className=" text-2xl mt-64 ml-3 ">
          <div className="flex ">
            <h1 className=" text-gray-500 font-mono">03</h1>
            <img src="https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/632106deffe37448ce8514f2_query.svg" className="w-11 relative left-[45%] bg-[#b4e6c299] rounded p-2 mb-2" />
          </div>
          <h1 className="text-4xl font-bold font-Inter, sans-serif">Manage all your <br /> links in one place</h1>
          <p className="text-sm font-Inter, sans-serif text-gray-500 mt-2 ">No more digging through emails, Slack or Drives to find<br /> them again</p>
        </div>
      </div>
      {/* colorful cards********** */}
      <h1 className=" mt-28 text-center font-sans text-4xl font-bold">Here's what people are saying</h1>
      <div className="   text-center grid-cols-1 grid  gap-4  p-2 mt-14  md:grid-cols-3">
        {/* <img src="https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/633e3133ac6d2b7692c20b19_%E2%80%9C.svg" className="   top-52 left-6 w-28 "/>
        <img src="https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/633e3133ac6d2b7692c20b19_%E2%80%9C.svg" className="   top-[450px] left-60 w-28 rotate-180 "/> */}
        <div className="  p-5 bg-[#b4e6c299] rounded-3xl p-3 "><h1>I now have all my tabs that used to be open across several windows tucked into separate little spaces in Skeema. It also has a neat clipping tool that lets you screenshot something and add it to a list or project, which is a nice addition to a standard note-taking feature. I feel pretty confident I’m not using Skeema to its fullest ability, but there is no chance I will go back to what I was doing before.Annie Saunder TechCrunch</h1></div>
        <div className=" p-5 bg-[#f7e2e2]  rounded-3xl p-3 "><h1>I now have all my tabs that used to be open across several windows tucked into separate little spaces in Skeema. It also has a neat clipping tool that lets you screenshot something and add it to a list or project, which is a nice addition to a standard note-taking feature. I feel pretty confident I’m not using Skeema to its fullest ability, but there is no chance I will go back to what I was doing before.Annie Saunder TechCrunch</h1></div>
        <div className="  p-5 bg-amber-100 rounded-3xl p-3 "><h1>I now have all my tabs that used to be open across several windows tucked into separate little spaces in Skeema. It also has a neat clipping tool that lets you screenshot something and add it to a list or project, which is a nice addition to a standard note-taking feature. I feel pretty confident I’m not using Skeema to its fullest ability, but there is no chance I will go back to what I was doing before.Annie Saunder TechCrunch</h1></div>

      </div>
      <div className=" text-center grid-cols-1 grid  gap-4  p-2 md:grid-cols-3 ">
        <div className="  p-5  bg-sky-100   rounded-3xl p-3 "><h1>I now have all my tabs that used to be open across several windows tucked into separate little spaces in Skeema. It also has a neat clipping tool that lets you screenshot something and add it to a list or project, which is a nice addition to a standard note-taking feature. I feel pretty confident I’m not using Skeema to its fullest ability, but there is no chance I will go back to what I was doing before.Annie Saunder TechCrunch</h1></div>
        <div className=" p-5 bg-yellow-100      rounded-3xl p-3 "><h1>I now have all my tabs that used to be open across several windows tucked into separate little spaces in Skeema. It also has a neat clipping tool that lets you screenshot something and add it to a list or project, which is a nice addition to a standard note-taking feature. I feel pretty confident I’m not using Skeema to its fullest ability, but there is no chance I will go back to what I was doing before.Annie Saunder TechCrunch</h1></div>
        <div className="  p-5 bg-[#b4e6c299]       rounded-3xl p-3 "><h1>I now have all my tabs that used to be open across several windows tucked into separate little spaces in Skeema. It also has a neat clipping tool that lets you screenshot something and add it to a list or project, which is a nice addition to a standard note-taking feature. I feel pretty confident I’m not using Skeema to its fullest ability, but there is no chance I will go back to what I was doing before.Annie Saunder TechCrunch</h1></div>

      </div>
      <div className=" bg-white rounded-2xl text-center m-16 p-20 w-[96%] ml-[2%] bg-[url('https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/63201dbb54955c6506c712b4_Grad-1.svg')] bg-no-repeat bg-center">
        <h1 className=" text-xl w-[100%] font-bold">Get your tabs under control today</h1>
        <button type="button" className=" ml-[3%] mt-9 bg-black text-white border rounded-full p-2 ">Get Started</button>

      </div>

      <div className=" w-[96%] h-60 ml-[2%] mt-32 bg-[url('https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/6320c6e2297b480e45fe9561_Grad-2.svg')]  bg-no-repeat mb-8 bg-center">
        <h1 className=" mt-2 text-2xl">About Us -</h1>
        <br />
        <h2 className="p-2 font-bold font-Libre Franklin md:text-centerw-[50%]  ">
          From CS researchers at Carnegie Mellon, Skeema is a human-centered way to manage your tabs that helps you declutter your mind and your browser. Based on our new research uncovering the deep causes of tab overload, Skeema changes the way you interact with the web resulting in what users call "an efficiency dream" and an "expansion card for your unstructured mind".</h2>
      </div>
      <br />
      <br />
    </>
  );
}

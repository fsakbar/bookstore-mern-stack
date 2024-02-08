
import React from 'react'
import Navbar from '../NavBar/Navbar'
import  Spline  from "@splinetool/react-spline";

const LandingPage = () => {
  return (
    <main className="flex min-h-screen h-fit flex-col items-center justify-center relative">
      <Navbar/>
      <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
        <div className="w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black md:text-8xl text-primary">
              Insightful
            </h1>
          </div>
            <h2 className="text-md md:text-2xl">
              Start growing today!
            </h2>
            <p className="max-w-md text-sm md:text-base text-zinc-500 text-primary">Insightful is an AI Powered Sales optimization tool that provides data-drives insight to bosst sales performance</p>
            <div className="w-full flex items-center justify-center md:justify-start gap-4">
              <button className="w-48 h-12 text-sm sm:text-base rounded bg-primary text-backgroundputih hover:bg-primary hover:text-white transition-colors">
                Button
              </button>
              <button className="w-48 h-12 text-sm sm:text-base rounded hover:bg-secondary hover:text-primary hover:bg-secondary transition-colors">
                Button
              </button>
            </div>
          </div>
         

          <div className="w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10">
            <Spline className=" w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene="https://prod.spline.design/H-V5JFrHMUrdGt6Q/scene.splinecode"/> 
          </div>
        
      </header>
    </main>
  )
}

export default LandingPage

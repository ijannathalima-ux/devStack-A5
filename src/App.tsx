import { Suspense,useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import type { TechnologyType } from "./type";
import TechnologySection from "./technology/TechnologySection";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";


const technologiesDataPromise = async():Promise<TechnologyType[]> => {
      const res = await fetch("/data.json")
      const data = await res.json()
      return data;
}

function App() {

  const [selectedTechnologies, setSelectedTechnologies] =
    useState<TechnologyType[]>([])

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<span className="loading loading-spinner loading-xs"></span>}>
        <TechnologySection technologiesDataPromise ={technologiesDataPromise()} selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies}></TechnologySection>
      </Suspense>
      <ToastContainer/>
      <Footer></Footer>
    </>
  )
}

export default App;

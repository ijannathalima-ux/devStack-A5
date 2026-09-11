import { Suspense } from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import TechnologySection from "./technology/TechnologySection"
import type { TechnologyType } from "./type"


const technologiesDataPromise = async():Promise<TechnologyType[]> => {
      const res = await fetch("/data.json")
      const data = await res.json()
      return data;
}

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<span className="loading loading-spinner loading-xs"></span>}>
        <TechnologySection technologiesDataPromise={technologiesDataPromise()}></TechnologySection>
      </Suspense>
    </>
  )
}

export default App

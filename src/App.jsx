import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import SkillsEducation from './components/SkillsEducation'
import Technologies from './components/Technologies'
const App = () => {
  return (
    <div className='w-10/12 mx-auto overflow-x-hidden text-stone-300 antialiased'>
    <div className='fixed -z-10'>
    <div className="relative h-full w-full bg-slate-950">
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>
    </div>
    <div className='container mx-auto px-8 border-white'>
      <Navbar/>
      <Hero/>
      <Technologies/>
      <Project/>
      <SkillsEducation/>
      <Contact/>
    </div>
    </div>
  )
}

export default App
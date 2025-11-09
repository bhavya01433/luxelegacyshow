import Hero from './sections/Hero/hero'
import Season1 from './sections/Season1/season1'
import Header from './components/common/Header/header'
import Founder from './sections/Founder/founder'
import Team from './sections/Team/team'
import Partners from './sections/Partners/partners'

function App() {
  return (
    <div className="relative min-h-screen bg-[#101014] overflow-x-hidden">
      <Header />
      {/* Fixed Hero Background */}
      <Hero />
      
      {/* Scrollable Season1 Content */}
      <Season1 />
      <Founder />
      <Team />
      <Partners />
    </div>
  )
}

export default App
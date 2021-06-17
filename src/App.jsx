import Navbar from './components/Navbar/Navbar.jsx'
import Intro from './components/Intro/intro'
import About from './components/About/about'
import Skills from './components/Skills/skills'
import Stats from './components/Stats/stats.jsx'
import ProjectTimeline from './components/project timeline/project_timeline.jsx'



function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Stats/>
      <ProjectTimeline/>
    </div>
  );

}

export default App;

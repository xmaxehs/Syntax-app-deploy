import { Navbar, Hero, About, Contact, Projects, Footer } from "./components";

const App = () => (
  <div className="w-full overflow-hidden font-main">
    <div className="px-3 flex flex-col justify-center items-center">
      {/* navbar Section */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Projects Section */}
      <Projects />
      {/* Contact Section */}
      <Contact />
      {/* Footer Section */}
      <Footer />
    </div>
  </div>
);

export default App;

import { Footer, Navbar } from "../components/HomepageComponents";
import { Cards } from "../components/ExploreComponents";
import { Cards2 } from "../components/ExploreComponents";

const Roadmap = () => {
  return (
    <div className="bg-gradient-to-r from-sky-700 to-violet-900 h-max md:h-screen ">
        <Navbar />
        <Cards />
        <Cards2 />
        <Footer />
    </div>
  )
}

export default Roadmap
import { Navbar, Welcome, ExploreLanai, Footer } from "../components/HomepageComponents";

const Home = () => {
  return (
    <div className="Home">
        <div>
          <div className="bg-gradient-to-r from-sky-700 to-violet-900 w-screen h-screen flex flex-col">
            <Welcome />
            <ExploreLanai />
            <Footer />
          </div>
        </div>
      </div>
  )
}

export default Home;
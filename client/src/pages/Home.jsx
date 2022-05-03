import { Welcome, ExploreLanai, Footer } from "../components/HomepageComponents";

const Home = () => {
  return (
        <div className="bg-gradient-to-r from-sky-700 to-violet-900 flex flex-col">
          <Welcome />
          <ExploreLanai />
          <Footer />
        </div>
  )
}

export default Home;
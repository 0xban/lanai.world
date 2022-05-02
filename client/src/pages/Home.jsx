import { Navbar, Welcome, ExploreLanai, Footer } from './components';

const Home = () => {
  return (
    <div className="Home">
        <div className="min-h-screen">
          <div className="gradient-bg-welcome w-screen h-screen flex flex-col">
            <Navbar />
            <Welcome />
            <ExploreLanai />
            <Footer />
          </div>
        </div>
      </div>
  )
}

export default Home;
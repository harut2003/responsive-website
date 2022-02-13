import Header from "../header/Header";
import Lists from "../lists/Lists";
import SecondSection from "../second-section/SecondSection";
import Sidebar from "../sidebar/Sidebar";
import Statistics from "../statistics/Statistics";
import ThirdSection from "../third-section/ThirdSection";

function Home() {
  return (
    <div className="d-flex h-100">
      <Sidebar />
      <div className="w-100">
        <Header />
        <SecondSection />
        <ThirdSection />
        <Statistics />
        <Lists />
      </div>
    </div>
  );
}

export default Home;

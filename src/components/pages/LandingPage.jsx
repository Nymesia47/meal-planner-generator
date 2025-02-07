import Header from "../layoutComponents/Header";
import Footer from "../layoutComponents/Footer";
import ActionsPanel from "../layoutComponents/ActionsPanel";
import ResultsSection from "../layoutComponents/ResultSection";

function LandingPage() {
  return (
    <div>
      <Header />
      <main>
        <ActionsPanel />
        <ResultsSection />  
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
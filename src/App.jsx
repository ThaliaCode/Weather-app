import Sidebar from "./components/Sidebar"
import Forecast from "./components/Forecast";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";


function App() {
 
  return (
     <main className="min-h-screen bg-[#1E213A] text-white ">
      <Sidebar />

      <section>
        <Forecast />

        <Highlights />

        <Footer />
      </section>
    </main>
  )
}

export default App

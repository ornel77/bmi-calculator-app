import Advices from "./components/Advices"
import Explanation from "./components/Explanation"
import Header from "./components/Header"
import Limitations from "./components/Limitations"


function App() {

  return (
    <div className="font-inter">
      <Header />
      <Explanation />
      <Advices />
      <Limitations />
    </div>
  )
}

export default App

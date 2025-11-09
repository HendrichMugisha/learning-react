import Hello from "./components/Hello"
import LearnReact from "./components/LearnReact"
import LearnJSX from "./components/LearnJSX"
import LearnProps from "./components/LearnProps"
import LearnEvent from "./components/LearnEvent"

function App() {
    let price = 200;

  return (
    <> 
     <h1>App component</h1>
     {/* <LearnJSX/>  
     <LearnProps stock="Apple" price={price}/> */}

    <LearnEvent/>

     {/* < Hello />
     <LearnReact/> */}
    </>
  )
}

export default App

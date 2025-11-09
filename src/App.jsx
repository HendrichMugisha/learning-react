import Hello from "./components/Hello"
import LearnReact from "./components/LearnReact"
import LearnJSX from "./components/LearnJSX"
import LearnProps from "./components/LearnProps"
import LearnEvent from "./components/LearnEvent"
import LearnLiftingStateUp from "./components/LearnLiftingStateUp"
import LearnUseState from "./components/LearnUseState"
import CounterApp from "./components/counterApp"
import LearnUseEffect from "./components/LearnUseEffect"

function App() {
    // let price = 200;

    const getStock = (data) =>{
      console.log(data)
    }

  return (
    <> 
  <LearnUseEffect/>

     {/* <h1>App component</h1> */}

    {/* <CounterApp/> */}





{/* 
      < LearnUseState/> */}


{/* this is just for the lifting state up */}
     {/* <LearnLiftingStateUp  getStock={getStock} /> */}



     {/* <LearnJSX/>  
     <LearnProps stock="Apple" price={price}/> */}

    {/* <LearnEvent/> */}

     {/* < Hello />
     <LearnReact/> */}
    </>
  )
}

export default App

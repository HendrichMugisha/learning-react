import Hello from "./components/Hello"
import LearnReact from "./components/LearnReact"
import LearnJSX from "./components/LearnJSX"
import LearnProps from "./components/LearnProps"
import LearnEvent from "./components/LearnEvent"
import LearnLiftingStateUp from "./components/LearnLiftingStateUp"
import LearnUseState from "./components/LearnUseState"
import CounterApp from "./components/counterApp"
import LearnUseEffect from "./components/LearnUseEffect"
// import Mycounter from "./components/Mycounter"
import MyUseState from "./components/MyUseState"
import LearnUseMemo from "./components/LearnUseMemo"

function App() {
  // let price = 200;
  let init_count = 10;
  const getStock = (data) => {
    console.log(data)
  }

  return (
    <>

<LearnUseMemo/>

      {/* <MyUseState /> */}

      {/* <LearnUseEffect/> */}

      {/* <Mycounter init_value={init_count}/> */}

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

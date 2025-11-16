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
import ChildA from "./components/ChildA"
import { createContext, useState } from "react"
import LearnUseRef from "./components/LearnUseRef"
import LearnCustomHooks from "./components/LearnCustomHooks"
import LearnConditionalRendering from "./components/LearnConditionalRendering"
import LearnMap from "./components/LearnMap"
import LearnInlineCss from "./components/LearnInlineCss"
import LearnLoadingImages from "./components/LearnLoadingImages"
import LearnForms from "./components/LearnForms"


// this is to create the context
const StockContext = createContext()
const UserContext = createContext()



function App() {
  let stock = "Tesla"
  let price = 100

  const [user, setUser] = useState({ name: "Mark", isLoggedIn: "Yes" })

  // create context, provider the data, consumer

  return (
    <>
    <LearnForms/>
      {/* <LearnLoadingImages /> */}
      {/* <LearnInlineCss/> */}


      {/* <LearnMap /> */}


      {/* <LearnConditionalRendering /> */}

      {/* <LearnCustomHooks/> */}
      {/* <LearnUseRef/> */}

      {/* this ispassing the data into the provider */}
      {/* <StockContext.Provider value={{ stock, price }}>
        < UserContext.Provider value={{user, setUser}}>
          <ChildA />
        </UserContext.Provider>
      </StockContext.Provider> */}

      {/* <LearnUseMemo/> */}

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
export { StockContext, UserContext }
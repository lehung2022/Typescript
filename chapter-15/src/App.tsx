import Counter from "./Counter"
import { CounterProvider } from "./context/CounterContext"
import "./index.css";

function App() {

  return (
    <>
      <CounterProvider>
        <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </CounterProvider>
    </>
  )
}

export default App;
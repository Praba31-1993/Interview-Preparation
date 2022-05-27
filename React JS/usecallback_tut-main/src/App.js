import Callback from "./Component/Callback"
import Memorize from "./Component/Memo";
import ReducerHooks from "./Component/Reducer";
import Refer from "./Component/Refer";
function App() {
  return (
    <div className="App">
     {/* <Callback/> */}
     <Refer/>
     {/* <Memorize/> */}
     <ReducerHooks/>
    </div>
  );
}

export default App;
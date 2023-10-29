import React, {useState} from "react";
import Counter from "./components/Counter"
import ClassCounter from "./components/ClassCounter"
function App() {  
  const [value, setValue] = useState('sadasdad');  

  return (
    <div className="App"> 
    <Counter/>

    </div>
  );
}

export default App;

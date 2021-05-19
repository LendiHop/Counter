import React, {useState} from 'react';
import "./App.css";

function App() {
    const [value, setValue] = useState<number>(0);
  return (
      <div className="counter">
          <div className={value === 5 ? ("showScreen" + " " + "max") : "showScreen"}>{value}</div>
          <div className="buttonBox">
              <button className={value === 5 ? ("inc" + " " + "disabled") : "inc"} disabled={value === 5} onClick={() => setValue(value+1)}>inc</button>
              <button className={value === 0 ? ("reset" + " " + "disabled") : "reset"} disabled={value === 0} onClick={() => setValue(0)}>reset</button>
          </div>
      </div>
  );
}

export default App;

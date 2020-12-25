import './App.css';
import Main from './components/mainComponent';
import { useState } from 'react';

//iterator
var i = 0;

//loader component
function Loader({val}) {
  return (
    <div className="col-md-12 mt-5 p-2">
      <center>
        <span className="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></span>
        <p className="lead">{val >= 49 ? "Animation cyles are finished.........." : "Loading...."}</p>
      </center>
    </div>
  );
}

const App = () => {

  i += 1;
  const x = i * 18000;//time for re-render component

  // react hook to update state and re-render component
  const [reload, setReloader] = useState("v");

  setInterval(() => { if (i < 50) setReloader("data"); }, (x)); //to show component
  setInterval(() => { if (i < 50) setReloader(null); }, (x - 2000)); //to clear component

  console.log("i : " + i);
  return (
    <div className="App">
      {/* if relaod set then show component else show loading message */}
      {reload ? <Main /> : <Loader val={i} />}
    </div>
  );
}

export default App;

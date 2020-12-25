import './App.css';
import Main from './components/mainComponent';
import {useState} from 'react';

var i=0;
const App=() => {

  i+=1;
  const x=i*18000;
  const [reload,setReloader]=useState("v");
  setInterval(() =>{ if (i<50) setReloader("data");},(x));
  setInterval(() =>{ if (i<50) setReloader(null); },(x-2000));
  console.log("i : "+i);
  return (
    <div className="App">
      {reload ? <Main /> :
            <div className="col-md-12 mt-5 p-2">
                <center>
                <span className="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></span>
                <p className="lead">{i>=49 ? "Animation cyles are finished.........." : "Loading...."}</p>
                </center>
            </div> }
    </div>
  );
}

export default App;

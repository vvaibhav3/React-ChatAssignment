import React,{useState} from 'react';
import { Navbar, NavbarBrand,Button} from 'reactstrap';
import "../App.css"
import ShowMessage from './showMessageComponent';

// header
const Header = () => {
    return (
        <div className="header sticky-top">
        <Navbar light color="light" style={{backgroundImage: "linear-gradient(to right,#B0BBBF,#CADBC8)"}}>
            <NavbarBrand>
                <span className={"navbarBrand"}>
                    <i className="fa fa-envelope m-2"></i>
                    Chat
                </span>
            </NavbarBrand>
        </Navbar>
        </div>
    );
}

// footer 
const Footer= ({data}) => {
    return(
            <div className="footer">
            <div className="form-inline col-md-12" style={{backgroundImage: "linear-gradient(to right,#B0BBBF,#CADBC8)",padding:"10px"}}>
                <input type="text" className="form-control col-md-10 m-2" placeholder="Type your message..." value={data} readOnly/>
                <Button className={"col-md-1 form-control m-2 "} ><i className="fa fa-send"></i></Button>
            </div>
            </div> 
    );
}

// function to scroll down to bottom
function scrollDown(){
    window.location.hash="#today";
}

// Main component of app which contains overall component
const Main = () => {


    // react hooks to update message state
    const [mesg1,setMesg1]=useState(null);
    const [mesg2,setMesg2]=useState(null);
    const [mesg3,setMesg3]=useState(null);
    const [mesg4,setMesg4]=useState(null);
    const [mesg5,setMesg5]=useState(null);

    // function to return message box
    function showData(mesg,img,user){
        scrollDown();
        return(
            <ShowMessage message={mesg} imageAddress={img} msgClass={user} />
        );
    }

    // updating message states after some time period
    setTimeout(() => {setMesg1("how are you ?")},3000);
    setTimeout(() => {setMesg2("i am fine........")},5000);
    setTimeout(() => {setMesg3("are you free today ? if yes lets meet on cafe coffee at night... ")},7000);
    setTimeout(() => {setMesg4("yes ofc... seee you.. bye!!!!!!!")},9000);
    setTimeout(() => {setMesg5("bye!!!!!!!")},11000);

    window.onload=window.scroll(0,1000);

    return (
        <div className="container position-relative p-0 my-0" style={{backgroundImage: "linear-gradient(to bottom,#3e1f47,#144552)", border:"2px solid #333",animationName:"fade",animationDelay:"1",animationDuration:"3s"}}>
            <Header/>
                <div className="container">
                {/* Predefined messages */}
                <ShowMessage message={"Hi........."} imageAddress={null} msgClass={"staticSender"} />
                <ShowMessage message={"Hello"} imageAddress={null} msgClass={"staticReciever"} />
                <ShowMessage message={"i am from pune"} imageAddress={"logo192.png"} msgClass={"staticSender"} />
                <ShowMessage message={"ohhhh"} imageAddress={null} msgClass={"staticReciever"} />
                <ShowMessage message={"good to know , i am from solapur"} imageAddress={null} msgClass={"staticReciever"} />
                
                {/* shows today flag */}
                <div className={"showDay"} align="center" >
                    <div style={{width:"60px",height:"30px",backgroundColor:"whitesmoke",borderRadius:"5px"}} align="center">today</div>
                </div>

                {/* animated messsages */}
                {mesg1 && showData(mesg1,null,"sender")}
                {mesg2 && showData(mesg2,null,"reciever")}
                {mesg3 && showData(mesg3,"lol.jpg","sender")}
                {mesg4 && showData(mesg4,null,"reciever")}
                {mesg5 && showData(mesg5,null,"sender")}
                <div  id="today" style={{margin:"10px"}}></div>
                </div>
            <Footer data={""} />
        </div>
    );
    
}


export default Main;

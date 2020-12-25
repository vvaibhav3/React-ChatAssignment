
// ShowMessage component to show senders and recievers messages
//sender class for animation and staticSender class for without animation part
const ShowMessage = ({imageAddress,message,msgClass}) =>{

    let alnm="right",showImgClass="showImage"; //to set alignment and imageclass

    //set message box alignment to left if user is sender
    if(msgClass==="sender" || msgClass==="staticSender")
        alnm="left"
    
    //set image class to static in order to avoid animation to that part
    if(msgClass==="staticSender")
        showImgClass="staticShowImage";
    
    //to get message time
    let time=new Date();

    return(
        <div className="showMessage" align={alnm}>
        <div className={msgClass} >
            { imageAddress && <img src={imageAddress} alt="messageData" className={showImgClass} /> }
             <p className="lead mb-0" style={{fontSize:"18px",fontFamily:"arial"}}>{message}</p>
             <div style={{color:"#333",fontSize:"12px",marginLeft:"3px"}} align="right">{time.getHours()}:{time.getMinutes()}</div>
        </div>
        </div>
    );
}

export default ShowMessage;

const ShowMessage = ({imageAddress,message,msgClass}) =>{

    let alnm="right",showImgClass="showImage";
    if(msgClass==="sender" || msgClass==="staticSender")
        alnm="left"
    
    if(msgClass==="staticSender")
        showImgClass="staticShowImage";
    
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
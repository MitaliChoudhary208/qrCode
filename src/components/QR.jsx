import React, { useState } from 'react'
import QRcode from 'react-qr-code'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';

function QR() {
  const[text,setText] = useState("");
  const[generate,setGenerate]=useState("");

  function QrGenerate(e){
    setText(e.target.value)
}
  function myQr(){
    setGenerate(text);
    setText("")
  }
  function qrCode(){
    setText(" ")
  }

  return (
    <>
    <div className='maindiv'>
    <h1 style={{color:" rgb(36, 104, 230)"}}> Generate <span style={{color:"black"}}>QR code </span></h1>
      <div className='flex'>
    <TextField id="outlined-basic" label="Url" variant="outlined" value={text} className='url' onChange={QrGenerate}/>
    <CancelIcon style={{fontSize:"30px",color:"orangered"}} onClick={qrCode} />
    </div>
    <Button variant="contained" className='btn' onClick={myQr}>QR Generate</Button>
      <QRcode value={generate}  style={{marginTop:"20px",height:"150px",width:"150px"}}/>
    </div>
</>
  )
}

export default QR


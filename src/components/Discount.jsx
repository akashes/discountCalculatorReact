import React, { useState } from 'react'
import image from '../assets/main.webp'
import './discount.css'
import {Form,Button,Modal,Alert} from 'react-bootstrap'

function Discount() {
    const[amount,setAmount]=useState()
    const[discount,setDiscount]=useState()
    const[saving,setSaving]=useState()
    const[disAmount,setDisAmount]=useState()
    const[alert,setAlert]=useState(false)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    const calculate=()=>{
        if(isNaN(amount) || isNaN(discount)){
            setAlert(true)
            
            
        }else{
            setAlert(false)
            let bal=(amount- (amount * discount/100))
            console.log(bal);
            setDisAmount(bal.toFixed(2))
            let disAmt=amount-bal
            console.log(disAmt);
            setSaving(disAmt.toFixed(2))
            setTimeout(()=>{
                setShow(true)

            },1000)
            
        }
    }
    const reset=()=>{
        setAmount("")
        setDiscount("")
        setSaving("")
        setDisAmount("")
        setAlert(false)

    }
  return (
<>
<Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Discount!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you saved {saving}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    
<div className="main-container m-5 rounded border border-dark">
    
<div className="container rounded">
        <div className="col1">

<img style={{width:'100%'}} src={image} alt="" />
        </div>
        <div className="col2">
        <Form className='bg-secondary p-5 rounded shadow-lg'   >
        <Form.Control style={alert ? {border:'1px solid red'}:{}} size='lg' value={amount || ''} onChange={(e)=>setAmount(e.target.value)}    type="text" placeholder="Amount" />
      <br />
      <Form.Control style={alert ? {border:'1px solid red'}:{}} value={discount || ''} onChange={(e)=>setDiscount(e.target.value)} size='lg' type="text" placeholder="Discount %" />
      <Button onClick={calculate} className=' mt-3 ' style={{width:'100%'}} variant="dark">Calculate</Button>
      <Button onClick={reset} className=' mt-3 border border-dark text-dark ' style={{width:'100%'}} variant="secondary">Reset</Button>
      <hr className='text-warning fw-bold' style={{height:'5px'}} />
      <h4 className='text-center'>You pay</h4>
      <Form.Control  className='bg-success text-white' value={disAmount || ''} size='lg' type="text" placeholder="You pay " />

      
    </Form>
    {
    alert &&   <Alert className='mt-3 text-danger text-center' key='dark' variant='dark'>
    Please enter valid values!!!
  </Alert>
}
 

        </div>
    </div>
</div>

  
</>
  
   
  )
}

export default Discount

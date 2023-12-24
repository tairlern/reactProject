import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './BusinessDetails.css'
function BusinessDetails() {

  return (
 <>

    <div id="form" >

    <TextField id="outlined-basic" label="שם העסק:" variant="outlined" />
    <br/>
    <TextField id="outlined-basic" label="כתובת" variant="outlined" />
    <br/>
    <TextField id="outlined-basic" label="mail" variant="outlined" />
    <br/>
    <TextField id="outlined-basic" label="טלפון" variant="outlined" />
    <br/>
   
      <Button variant="contained" disableElevation>
            שמירה
            </Button>
            </div>
      </>
  )
}

export default BusinessDetails

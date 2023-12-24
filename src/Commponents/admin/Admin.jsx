import * as React from 'react';
import Button from '@mui/material/Button';
import MainStore from '../../store/MainStore';
import LogIn from '../logIn/LogIn'
// import Service from '../service/Service';
import ServicesStore from '../../store/ServicesStore';
function Admin() {

  return (
    <>
  {!MainStore.isLogin?<><LogIn/></>:<><Button variant="contained" disableElevation  > פגישות </Button>
              <Button variant="contained"  onClick={ServicesStore.getServices }disableElevation  > שרותי העסק </Button></>}
</> 
  )
}
 
export default Admin

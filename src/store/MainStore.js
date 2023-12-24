import { observable, makeObservable, action } from 'mobx';

class MainStore {
    isLogin = false;
    isStatus=401;
    constructor() {
        makeObservable(this, {
            isLogin: observable, 
            isStatus:observable,
            setIsLogin: action,
            saveLogin:action,
        })
    }
    setIsLogin = (val) => {
        this.isLogin = val;
    }
    saveLogin=async(name,password)=>{
        console.log("enter save Login")
        console.log(name,password)
        const response = await fetch("http://localhost:8787/login", {
            method: "POST",
            
            body: JSON.stringify({
              name, password
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log(response.statusText)
      
          if (response.status === 200) {
            this.isLogin=true;
            this.isStatus=200;
              console.log(this.isLogin)
       }       
    // else{
    //   this.isLogin=false;
    //   this.isStatus=401;
    // }
}
}

export default new MainStore();
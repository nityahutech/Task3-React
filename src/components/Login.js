import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SignImg from './SignImg';
import {NavLink} from 'react-router-dom'

const Login = () => {

    const [inpval, setInpval] = useState({
        
        email:"",
        password:""
    })
    // console.log(inpval);

    const[data,setData] = useState([])

    const getdata = (e)=> {
        // console.log(e.target.value);

        const {value,name} = e.target;
        // console.log(value,name);

        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })
    }

    const addData = (e)=>{
        e.preventDefault();
        // console.log(inpval)
        const getuserArr = localStorage.getItem("userData");
        console.log(getuserArr);

        const {email,password} = inpval;

        if(email === ""){
            alert("Please Enter Your Email")
        }else if(!email.includes("@")){
            alert("Please enter Valid Email Address")
        }else if(password === ""){
            alert("Please Enter a Password")
        }else if(password.length < 4){
            alert("Incorrect Password")
        }else{
            if(getuserArr && getuserArr.length){
                const userdataDetails = JSON.parse(getuserArr)
                const userlogin = userdataDetails.filter((el,k) =>{
                    return el.email === email && el.password === password
                });
                // console.log(userlogin);
                if(userlogin.length === 0){
                    alert ("Invalid Details");
                }else{
                    console.log("User Login Successfully");
                }
            }
        }
    }

  return (
    <>
        <div className="container mt-3">
        <section className="d-flex justify-content-between ">
          <div className="left_data p-4" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign In</h3>
            <Form>
              
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                {/* pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" */}
                <Form.Control type="email"  name='email' onChange={getdata} placeholder="Enter email here" />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                {/* onChange={()=>{   }} */}
                <Form.Control type="password" name='password' onChange={getdata} placeholder="Enter Password" />
              </Form.Group>

              <Button
                variant=""
                className="col-lg-6"
                style={{ background: "green", color: "white" }}
                type="submit"
                onClick={addData}
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">Already have an Account <span><NavLink to={'/signup'}>SignUp</NavLink></span></p>
          </div>
          <SignImg></SignImg>
        </section>
      </div>
    </>
  )
}

export default Login
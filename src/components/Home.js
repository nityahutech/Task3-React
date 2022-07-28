import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SignImg from "./SignImg";

function Home() {
    const [inpval, setInpval] = useState({
        name:"",
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
        const {name,email,password} = inpval;

        if(name === ""){
            alert("Please Enter Your FullName")
        }
        else if(email === ""){
            alert("Please Enter Your Email")
        }else if(!email.includes("@")){
            alert("Please enter Valid Email Address")
        }else if(password === ""){
            alert("Please Enter a Password")
        }else if(password.length < 4){
            alert("Password Must be 4 characters")
        }else{
            alert("Data Added successfully")

            localStorage.setItem("userData", JSON.stringify([...data,inpval]));
        }
    }

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between ">
          <div className="left_data p-4" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter your name" />
              </Form.Group>

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
            <p className="mt-3">Already have an Account <span>SignIn</span></p>
          </div>
          <SignImg></SignImg>
        </section>
      </div>
    </>
  );
}

export default Home;

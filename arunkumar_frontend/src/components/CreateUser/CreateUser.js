import React from 'react'
import { useState } from 'react'
import './CreateUser.css'

import axios from 'axios';

const CreateUser = () => {

    const [customerName, setCustomerName] = useState("") //  variable to store inputted name of customer
    const [email, setEmail] = useState("") //  variable to store inputted email of customer
    const [phoneno, setPhoneno] = useState("")  // variable to store inputted phoneno of customer

    const onRegister = async(e) => {    // function to add new customer details into database
        e.preventDefault()

        if(!customerName || !email || !phoneno) {
            alert("please enter complete details");
            return;
        }

        const user = {
            cname: customerName,
            cmail: email,
            phoneno: phoneno,
        }

        await axios.post('http://localhost:8080/customers/add', user).then(
            res => {
                if(res.data === "") {
                    alert("Customer already exists!");
                }
                else {
                    alert("Customer added Successfully");
                    setCustomerName('');
                    setEmail('');
                    setPhoneno('');
                }
            }
        ).catch(
            err => {
                console.log("error");
            }
        )
    }

  return (
    <section class="h-100 h-custom" style={{backgroundColor: 'white'}}>
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-8 col-xl-6">
                    <div class="card rounded-3">
                        <div class="card-body p-4 p-md-5">
                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration</h3>

            <form class="px-md-2" onSubmit={onRegister}>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example1q"
                    class="form-control" placeholder='Customer Name' value={customerName} onChange={(e) => setCustomerName(e.target.value)}/>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example1q"
                    class="form-control" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example1q"
                    class="form-control" placeholder='Phone Number' value={phoneno} onChange={(e) => setPhoneno(e.target.value)}/>
              </div>

              


              <button type="submit" class="btn btn-success btn-lg mb-1">Register</button>

            </form>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default CreateUser

import React from 'react'
import { useState } from 'react'
import './CreateBooking.css'
import axios from 'axios'

const CreateBooking = () => {

    const [cmail, setCmail] = useState("")   // variable to store inputted email of customer
    const [date, setDate] = useState("")    //  variable to store inputted date of booking of drone
    const [locationId, setLocationId] = useState("")  //  variable to store location id of customer

    const onRegister = async(e) => {  // function to add booking details into database
        e.preventDefault()

        if(!cmail || !date || !locationId) {
            alert("please enter complete details");
            return;
        }

        

        var dateObj = new Date(date);


        const bookingRecord = {
            cmail: cmail,
            createdDate: dateObj,
            location_id: locationId,
        }

        await axios.post('http://localhost:8080/BookingDetails/add', bookingRecord).then(
            res => {
                if(res.data === "Customer does not exist") {
                    alert("Customer does not exist!");
                }
                else {
                    console.log(res.data)
                    alert("Booking Successfully");
                    setCmail('');
                    setDate('');
                    setLocationId('');
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
                    class="form-control" placeholder='Customer Mail' value={cmail} onChange={(e) => setCmail(e.target.value)}/>
              </div>

              <div class="form-outline mb-4">
                <input type="date" id="form3Example1q"
                    class="form-control" placeholder='Choose Booking Date' value={date} onChange={(e) => setDate(e.target.value)}/>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example1q"
                    class="form-control" placeholder='Location Id' value={locationId} onChange={(e) => setLocationId(e.target.value)}/>
              </div>

              


              <button type="submit" class="btn btn-success btn-lg mb-1">Book</button>

            </form>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default CreateBooking

import React, { useEffect, useState } from 'react'
import "./Bookings.css"
import axios from 'axios'

const Bookings = () => {
    const [bookings,setBookings]=useState([]);  // array to store all booking details retrieved from database

    useEffect( () => {   // executes every time page refreshes
		const getBookings = async(e) => { // function to get all booking records from database
			const result = await fetch('http://localhost:8080/BookingDetails/getall');
			const bookingsArray = await result.json()
			setBookings(bookingsArray);
			console.log("length="+bookings.length)
			
		}
		
		getBookings()
    } , [] )

  return (
    <>
    <div class="container-xl">
	<div class="table-responsive">
		<div class="table-wrapper">
			<div class="table-title">
				<div class="row">
					<div class="col-sm-6">
						<h2><b>Bookings</b></h2>
					</div>
					
				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
                        <th>Booking ID</th>
						<th>Customer Email</th>
						<th>Booking Date</th>
						<th>Location Id</th>
						
					</tr>
				</thead>
				<tbody>		
                

                    {
                        bookings.map( (booking) => {   // map to traverse booking array and display each booking detail
                        return( <tr>
                
                            <td>{booking.bid}</td>
                            <td>{booking.cmail}</td>
                            <td>{new Date(booking.createdDate).toISOString().slice(0, 10)}</td>
                            <td>{booking.location_id}</td>

                        </tr>
                    )
						}
                        )
                    }
                </tbody>		
				
			</table>
		</div>
	</div>        
</div>

    </>
  )
}

export default Bookings

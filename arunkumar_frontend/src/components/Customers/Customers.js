import React, { useEffect, useState } from 'react'
import "./Customers.css"
import axios from 'axios'



const Customers = () => {

    const [customers,setCustomers]=useState([]);  // ArrayList to store all customer details retrieved from database 
	
    useEffect( () => {         // executes everytime page reloads
		const getCustomers = async(e) => {     // function to fetch existing customers in database
			const result = await fetch('http://localhost:8080/customers/getall');
			const customersArray = await result.json()
			setCustomers(customersArray);
			console.log("length="+customers.length)
			
		}
		
		getCustomers()
    } , [] )

	//updateProduct 

	const edit = (customer) =>
	{
		
		setUcid(customer.cid);
		setUcname(customer.cname);
		setUcmail(customer.cmail);
		setUphoneno(customer.phoneno);
	}

	const [Ucid,setUcid]=useState(0);
	const [Ucname,setUcname]=useState('');
	const [Ucmail,setUcmail]=useState('');
	const [Uphoneno,setUphoneno]=useState('');

	const customerUpdateObj=
	{
		cid : Ucid,
		cname : Ucname,
		cmail : Ucmail,
		phoneno : Uphoneno,
	}
	
	const updateCustomer = async(e) => {      // function to update existing customer details in database
		console.log(customerUpdateObj);
		await axios.put('http://localhost:8080/customers/update',customerUpdateObj).then(
			res => {
				
				console.log(res.data);
			}
		).catch(
			err => {
				console.log("error");
			}
		)
	}

	//deleteproduct
	let DCustomerId = 0;
	const getID = (cid) =>
	{
		DCustomerId = cid;
		console.log(DCustomerId);
	}
	const deleteCustomer = async(e) => {  // function to delete existing customer from database
		e.preventDefault();
	
		await axios.delete('http://localhost:8080/customers/delete/'+DCustomerId).then(
			res => {
				
				console.log(res.data);
				console.log("DPROHKGDJ]="+DCustomerId);
			}
		).catch(
			err => {
				console.log("error");
			}
		)
		
	}

  return (
	<>
	<div class="container-xl">
  <div class="table-responsive">
	  <div class="table-wrapper">
		  <div class="table-title">
			  <div class="row">
				  <div class="col-sm-6">
					  <h2>Customers</h2>
				  </div>
			  </div>
		  </div>
		  <table class="table table-striped table-hover">
			  <thead>
				  <tr>
					  <th>Customer ID</th>
					  <th>Customer Name</th>
					  <th>Customer Email</th>
					  <th>Phoneno</th>
				  </tr>
			  </thead>
			  <tbody>		
			  

				  {
					  customers.map( (customer) => {  // map to traverse customers array and display each customer record
					  return( 
						<tr>
                
							<td>{customer.cid}</td>
							<td>{customer.cname}</td>
							<td>{customer.cmail}</td>
							<td>{customer.phoneno}</td>
							<td>
								<a href="#editEmployeeModal" class="edit" data-toggle="modal" onClick={() => { edit(customer) }}><i class="material-icons" data-toggle="tooltip" title="Edit" >&#xE254;</i></a>
								<a href="#deleteEmployeeModal" class="delete" data-toggle="modal" onClick={() => { getID(customer.cid) }} ><i class="material-icons" data-toggle="tooltip" title="Delete" >&#xE872;</i></a>
							</td>
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

<div id="editEmployeeModal" class="modal fade">
  <div class="modal-dialog">
	  <div class="modal-content">
		  <form onSubmit={updateCustomer}>
			  <div class="modal-header">						
				  <h4 class="modal-title">Edit Customer Details</h4>
				  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			  </div>
			  <div class="modal-body">		
				  <div class="form-group">
					  <label>Customer Id</label>
					  <input type="text" class="form-control" value={Ucid}  />
				  </div>			
				  <div class="form-group">
					  <label>Customer Name</label>
					  <input type="text" class="form-control" value={Ucname} onChange={(e) => setUcname(e.target.value)} required/>
				  </div>
				  <div class="form-group">
					  <label>Customer Email</label>
					  <input type="email" class="form-control" value={Ucmail} onChange={(e) => setUcmail(e.target.value)} required/>
				  </div>
				  <div class="form-group">
					  <label>Phone no</label>
					  <input type="text" class="form-control" value={Uphoneno} onChange={(e) => setUphoneno(e.target.value)} required/>
				  </div>				
			  </div>
			  <div class="modal-footer">
				  <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
				  <input type="submit" class="btn btn-info" value="Save"/>
			  </div>
		  </form>
	  </div>
  </div>
</div>

<div id="deleteEmployeeModal" class="modal fade">
  <div class="modal-dialog">
	  <div class="modal-content">
		  <form onSubmit={deleteCustomer}>
			  <div class="modal-header">						
				  <h4 class="modal-title">Delete Customer</h4>
				  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			  </div>
			  <div class="modal-body">					
				  <p>Are you sure you want to delete this Product?</p>
				  <p class="text-warning"><small>This action cannot be undone.</small></p>
			  </div>
			  <div class="modal-footer">
				  <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
				  <input type="submit" class="btn btn-danger" value="Delete"/>
			  </div>
		  </form>
	  </div>
  </div>
</div>
  </>
  )
}

export default Customers

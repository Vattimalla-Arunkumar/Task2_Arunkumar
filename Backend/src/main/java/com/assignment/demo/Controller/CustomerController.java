package com.assignment.demo.Controller;


import com.assignment.demo.Model.CustomerModel;
import com.assignment.demo.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomerService cService;

    @GetMapping("/getall")            //  api to fetch all customer records present in customers table
    public List<CustomerModel> getCustomers()
    {
        return cService.getAllCustomers();

    }

    @PostMapping("/add")             //  api to add new record into customers table
    public String addCustomer(@RequestBody CustomerModel p)
    {
        cService.addCustomer(p);
        return "Customer added successfully";
    }

    @DeleteMapping("/delete/{id}")   // api to delete existing record in customers table for given id
    public String delCustomer(@PathVariable Integer id)
    {
        System.out.println("id = " + id);
        boolean YES = cService.deleteCustomer(id);
        if(YES==true)
            return "Customer deleted";
        else
            return "Customer not deleted";
    }

    @PutMapping("/update")       // api to update existing record values in customers table
    public CustomerModel updateCustomer(@RequestBody CustomerModel p){

        System.out.println(p);
        return cService.updateCustomer(p);
    }

}

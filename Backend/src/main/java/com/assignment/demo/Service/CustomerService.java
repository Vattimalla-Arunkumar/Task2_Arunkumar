package com.assignment.demo.Service;

import com.assignment.demo.Model.CustomerModel;
import com.assignment.demo.Repository.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepo cRepo;

    public List<CustomerModel> getAllCustomers(){ return cRepo.findAll();}     // function to get all records present in customer table

    public void addCustomer(CustomerModel x){ cRepo.save(x); }   // function to add new record into customer table

    public Boolean deleteCustomer(Integer id) {    // function to delete record in customer table for given customer id
        if (!cRepo.existsById(id)) {   //  existsById() is a predefined function in JPA, where it returns true if record exists with given id else false
            return false;
        }
        cRepo.deleteById(id);      //  deleteById() is a prebuilt function in JPA, where it deletes record if record exists for given id
        return true;
    }

    public CustomerModel updateCustomer(CustomerModel p) {        // function to update existing record in customer table
        CustomerModel existingProduct = cRepo.findById(p.getCid()).orElse(null);  // fincById is a predefined function, returns record if exists for a given id or else null

        existingProduct.setCname(p.getCname());
        existingProduct.setCmail(p.getCmail());
        existingProduct.setPhoneno(p.getPhoneno());

        return cRepo.save(existingProduct);   // function to save record in BookingDetails table

    }

    public Boolean CustomerExistsOrNot(String email) {   // function to know if a customer record exists for given email in customers table
        CustomerModel c = cRepo.getUserByEmail(email);
        System.out.println(c);

        if(c == null)
            return false;
        else
            return true;
    }
}

package com.assignment.demo.Controller;


import com.assignment.demo.Model.BookingDetailsModel;
import com.assignment.demo.Model.CustomerModel;
import com.assignment.demo.Service.BookingDetailsService;
import com.assignment.demo.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/BookingDetails")
public class BookingDetailsController {

    @Autowired
    private BookingDetailsService bService;

    @Autowired
    private CustomerService cService;

    @GetMapping("/getall")       //  api to fetch all records present in BookingDetails table
    public List<BookingDetailsModel> getBookingDetails()
    {
        return bService.getAllBookingDetails();
    }

    @PostMapping("/add")       //  api to add new record into BookingDetails table
    public String addBookingDetail(@RequestBody BookingDetailsModel p)
    {
        if(cService.CustomerExistsOrNot((p.getCmail()))) {
            bService.addBookingDetail(p);
            return "Booking Done";
        }
        else
            return "Customer does not exist";
    }

    @DeleteMapping("/delete/{id}")      // api to delete existing record in BookingDetails table for given id
    public String delBookingDetail(@PathVariable Integer id)
    {
        boolean YES = bService.deleteBookingDetail(id);
        if(YES==true)
            return "BookingDetail deleted";
        else
            return "BookingDetail not deleted";
    }

    @PutMapping("/update")   // api to update existing record values in BookingDetails table
    public BookingDetailsModel updateBookingDetail(@RequestBody BookingDetailsModel p){
        return bService.updateBookingDetail(p);
    }
}

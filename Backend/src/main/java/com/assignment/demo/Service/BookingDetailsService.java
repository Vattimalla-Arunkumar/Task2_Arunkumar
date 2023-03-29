package com.assignment.demo.Service;


import com.assignment.demo.Model.BookingDetailsModel;
import com.assignment.demo.Repository.BookingDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingDetailsService {

    @Autowired
    private BookingDetailsRepo bRepo;

    public List<BookingDetailsModel> getAllBookingDetails(){ return bRepo.findAll();} // returns all records present in BookingDetails table

    public void addBookingDetail(BookingDetailsModel x){ // function to add new record to BookingDetails table
        bRepo.save(x);
    }

    public Boolean deleteBookingDetail(Integer id) { // function to delete existing record in Booking details table for given id
        if (!bRepo.existsById(id)) {   //  existsById() is a predefined function in JPA, where it returns true if record exists with given id else false
            return false;
        }
        bRepo.deleteById(id);   //  deleteById() is a prebuilt function in JPA, where it deletes record if record exists for given id
        return true;
    }

    public BookingDetailsModel updateBookingDetail(BookingDetailsModel p) { // function to update existing record values in BookingDetails table
        BookingDetailsModel existingProduct = bRepo.findById(p.getBid()).orElse(null);  // fincById is a predefined function, returns record if exists for a given id or else null

        existingProduct.setLocation_id(p.getLocation_id());
        existingProduct.setCmail(p.getCmail());
        existingProduct.setCreatedDate(p.getCreatedDate());

        return bRepo.save(existingProduct);   // function to save record in BookingDetails table

    }
}

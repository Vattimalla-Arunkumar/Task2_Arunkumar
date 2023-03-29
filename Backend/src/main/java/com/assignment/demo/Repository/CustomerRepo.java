package com.assignment.demo.Repository;

import com.assignment.demo.Model.CustomerModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepo extends JpaRepository<CustomerModel, Integer> {

    @Query("select c from CustomerModel c where c.Cmail = ?1")    // Query to get customer record for given customer email
    public CustomerModel getUserByEmail(String email);
}

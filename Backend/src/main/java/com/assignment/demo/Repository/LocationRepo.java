package com.assignment.demo.Repository;


import com.assignment.demo.Model.LocationModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepo extends JpaRepository<LocationModel, Integer> {

}

package com.assignment.demo.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;


@Entity
@Getter
@Setter
public class BookingDetailsModel {   // class representing BookingDetails table includes attributes booking id, name, customer email, location id

    @Id
    @GeneratedValue
    @Column
    private Integer Bid;

    @Column
    private Integer location_id;

    @Column
    private String Cmail;

    @Column
    private Date createdDate;

    public BookingDetailsModel() {
    }

    public BookingDetailsModel(Integer bid, Integer location_id, String cmail, Date createdDate) {    // Parameterised Constructor
        Bid = bid;
        this.location_id = location_id;
        Cmail = cmail;
        this.createdDate = createdDate;
    }

    @Override
    public String toString() {
        return "BookingDetailsModel{" +
                "Bid=" + Bid +
                ", location_id=" + location_id +
                ", Cmail=" + Cmail +
                ", createdDate=" + createdDate +
                '}';
    }

    public Integer getBid() {
        return Bid;
    }                                                   //
                                                                                              //
    public void setBid(Integer bid) {
        Bid = bid;
    }                                            //
                                                                                              //
    public Integer getLocation_id() {
        return location_id;
    }                                   //
                                                                                              //
    public void setLocation_id(Integer location_id) {
        this.location_id = location_id;
    }       //
                                                                                              //  Getters and Setters
    public String getCmail() {
        return Cmail;
    }                                                //
                                                                                              //
    public void setCmail(String cmail) {
        Cmail = cmail;
    }                                     //
                                                                                              //
    public Date getCreatedDate() {
        return createdDate;
    }                                      //
                                                                                              //
    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }          //
}

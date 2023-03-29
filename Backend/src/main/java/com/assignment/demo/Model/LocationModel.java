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
public class LocationModel {    // class representing location table includes attributes location id, location name
    @Id
    @GeneratedValue
    @Column
    private Integer location_id;

    @Column
    private Integer location_name;

    public LocationModel() {
    }

    public LocationModel(Integer location_id, Integer location_name) { // parameterised constructor
        this.location_id = location_id;
        this.location_name = location_name;
    }

    @Override
    public String toString() {
        return "LocationModel{" +
                "location_id=" + location_id +
                ", location_name=" + location_name +
                '}';
    }

    public Integer getLocation_id() {
        return location_id;
    }                                        //
                                                                                                   //
    public void setLocation_id(Integer location_id) {
        this.location_id = location_id;
    }            //
                                                                                                   //  Getter and Setters
    public Integer getLocation_name() {
        return location_name;
    }                                    //
                                                                                                   //
    public void setLocation_name(Integer location_name) {
        this.location_name = location_name;
    }    //
}

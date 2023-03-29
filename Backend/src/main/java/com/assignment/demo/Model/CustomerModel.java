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
public class CustomerModel {   // class representing customer table includes attributes customer id, name, email, phone no.

    @Id
    @GeneratedValue
    @Column
    private Integer Cid;

    @Column
    private String Cname;

    @Column
    private String Cmail;

    @Column
    private String phoneno;

    public CustomerModel() {
    }

    public CustomerModel(Integer cid, String cname, String cmail, String phoneno) {     // Parameterised Constructor
        Cid = cid;
        Cname = cname;
        Cmail = cmail;
        this.phoneno = phoneno;
    }

    @Override
    public String toString() {
        return "CustomerModel{" +
                "Cid=" + Cid +
                ", Cname='" + Cname + '\'' +
                ", Cmail='" + Cmail + '\'' +
                ", phoneno='" + phoneno + '\'' +
                '}';
    }

    public Integer getCid() {
        return Cid;
    }                                 //
                                                                            //
    public void setCid(Integer cid) {
        Cid = cid;
    }                          //
                                                                            //
    public String getCname() {
        return Cname;
    }                              //
                                                                            //
    public void setCname(String cname) {
        Cname = cname;
    }                   //
                                                                            //           Getters and Setters
    public String getCmail() {
        return Cmail;
    }                              //
                                                                            //
    public void setCmail(String cmail) {
        Cmail = cmail;
    }                   //
                                                                            //
    public String getPhoneno() {
        return phoneno;
    }                          //
                                                                            //
    public void setPhoneno(String phoneno) {
        this.phoneno = phoneno;
    }      //
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package intraholics.ticketmonster.security;

import intraholics.ticketmonster.Entities.User;
import intraholics.ticketmonster.SupplementaryClasses.UserLogged;
import javax.json.JsonObject;

/**
 *
 * @author Konstantinos Hatzistamatis
 */
public interface ValidationBeanLocal {
    
    public Integer addToValidated(UserLogged UserFound);
    public boolean checkIfValidated(Integer token);
    public boolean removeFromValidated(Integer token);
    
}

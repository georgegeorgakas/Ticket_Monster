/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package intraholics.ticketmonster.validation;

import intraholics.ticketmonster.Entities.User;
import javax.json.JsonObject;

public interface ValidationBeanLocal {
    
    public Integer addToValidated(User UserFound);
    public boolean checkIfValidated(Integer token);
    public boolean removeFromValidated(Integer token);
    
}

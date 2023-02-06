import React, { Component } from "react";
import { Link } from "react - router - dom"
import vendingMachineImage from "./Images/VendingMachine.png"
import "./VendingMachine.css"

export default class VendingMachine extends Component {
    render() {
        return (
            <div className="VendingMachine">
                <div className="VendingMachine-container">
                    <h2 className="VendingMachine-container-title">
                        What would you like from the VendingMachine
                
                    </h2>
                    <img src={vendingMachineImage} alt= "Vending Machine" />
                    <div className="VendingMachine-container-options">
                        <Link to= "/chips">Chips</Link>
                        <Link to= "/soda">Soda</Link>
                        <Link to="/snickers">Snickers</Link>
                    </div>
                </div>
            </div>
        );
    }
}
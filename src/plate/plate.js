import React, { Component } from "react";
// import {PHOTO} from "../App.js"
import gocha from './gocha.jpg';
import arkadii from './arkadii.jpg';
import triplet from './triplet.jpg';
import './plate.css';



export default class Plate extends Component {
    render() {
        return (
            <>
             
                <div className="photo">
                    <img className="img" src={gocha}/>
                </div>

                <div className="photo">
                    <img className="img" src={arkadii}/>
                </div>

                <div className="photo">
                    <img className="img" src={triplet}/>
                </div>

                
            
             </>
            
            );
        }
    }
    
    
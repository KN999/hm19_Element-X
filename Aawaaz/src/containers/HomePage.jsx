import React, {Component} from 'react';
import './HomePage.css';
import Button from '../components/Button';
import { BrowserRouter as Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div className="Home">
                <div className=" jumbotron text-center vertical-center">
                    <h1 className="Title">Aawaaz</h1>
                    <p>If you are having a problem then you can raise an issue Here.</p>
                </div>
                <Button 
                    className="btn"
                    action = {this.handleClearForm}
                    type = {'Primary'}
                    title = {'Register'}
                /> {/* Clear the form */}
                
            </div>
        );
    }
}

export default HomePage;
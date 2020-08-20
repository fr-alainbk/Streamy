import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
    return (
        <div className="ui secondary menu">
            <Link to="/" className="item">
                Streamy
                </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
            </Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header;



// oauthClientID = "444504479819-n8c7bh9o363chcpqibv4q8m0529lp93k.apps.googleusercontent.com"
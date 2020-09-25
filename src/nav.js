import React from "react";
import {Link} from "react-router-dom";

export default function Nav() {

    return (
        <div>
            <ul>
                <Link to={'/'}>
                    <li>Home</li>
                </Link>
                <Link to={'/spending-summary'}>
                    <li>Spending Summary</li>
                </Link>
                <Link to={'/add-spending'}>
                    <li>Add a spending</li>
                </Link>
            </ul>

        </div>
    );
}

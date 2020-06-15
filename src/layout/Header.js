import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import "./Header.css";
import { AppContext } from '../App';

export default function Header({ title }) {

    const {data} = React.useContext(AppContext);

    let location = useLocation();

    React.useEffect(() => {
      console.log(location);
    }, [location]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">{ data.title }</Link>
        <button className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-row-reverse" id="navbarText">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/settings">Settings</NavLink>
                </li>
            </ul>
        </div>
        </nav>
    );
}
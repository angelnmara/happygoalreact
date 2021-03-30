import React, {Fragment} from 'react';
import logo from '../images/happy_goal.png';
import alert from '../images/alert.png';

const Navbar = () => {
    return (
        <Fragment>            
            <nav class="navbar navbar-dark bg-primary navbar-expand-sm">
            <a class="navbar-brand" href="#">
                <img src={logo} class="NameAppSize" />                
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbar-list-4">
                <img src={alert}/>
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle"/>
                    &nbsp; Hola, Dave
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Dashboard</a>
                    <a class="dropdown-item" href="#">Edit Profile</a>
                    <a class="dropdown-item" href="#">Log Out</a>
                    </div>
                </li>   
                </ul>
            </div>
            </nav>
        </Fragment>
     );
}
 
export default Navbar;
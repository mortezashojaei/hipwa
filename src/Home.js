import React from 'react';
import image from './main.jpg';
import { Link } from 'react-router-dom';
import {askForPermissioToReceiveNotifications} from './pushNotification';
import NotificationButton from './NotificationButton'


const Home = () => {
    return ( 
      <div className="App">
      <h3 className="home-red">I Am Home</h3>
      <img src={image} />
      <br></br>
      <Link to="/morteza">Morteza</Link>
      <NotificationButton />
    </div>
     );
}
 
export default Home;
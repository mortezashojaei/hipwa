import React from 'react';
import { askForPermissioToReceiveNotifications } from './pushNotification';

const NotificationButton = () => (
    <button onClick={askForPermissioToReceiveNotifications} >
      Notif Me
    </button>
);

export default NotificationButton;
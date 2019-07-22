import React from 'react';
import { askForPermissioToReceiveNotifications } from './pushNotification';

const NotificationButton = () => (
    <button onClick={askForPermissioToReceiveNotifications} >
      Clique aqui para receber notificações
    </button>
);

export default NotificationButton;
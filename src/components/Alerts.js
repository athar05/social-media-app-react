import React from 'react';
import { Alert } from '@mui/material';
import { useSelector } from 'react-redux';

const Alerts = () => {
    const alertStatus = useSelector(state=> state.alert)
if (alertStatus!== null && alertStatus.length>0) {
    return (
            alertStatus.map(alert=> (
                <Alert severity={`${alert.alertType}`} key={alert.id}>{alert.message}</Alert>
            ))
        )
    }
} 

export default Alerts
import { Navigate } from "react-router-dom";

import React from 'react'

const RequiresAuth = ({login, children}) => {
  return login? children : <Navigate to="/login" replace />
}

export default RequiresAuth
import "./App.css";
import {Fragment} from 'react';
import PageRoutes from "./page-routes/PageRoutes";
import {BrowserRouter as Router} from "react-router-dom"


const App=() => 
<Router>
 <Fragment>
  <PageRoutes/>
  </Fragment>
 </Router>

export default App;

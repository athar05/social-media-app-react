import "./App.css";
import {Fragment} from 'react';
import PageRoutes from "./page-routes/PageRoutes";
import {Link, BrowserRouter as Router} from "react-router-dom"


const App=() => 
<Router>
 <Fragment>
  <PageRoutes/>
  <div> 
  <Link to="/bookmark"> Hello</Link>
  </div>
  </Fragment>
 </Router>

export default App;

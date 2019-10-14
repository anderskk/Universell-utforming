import React from 'react';
import { withRouter } from 'react-router-dom';


const Link = ({ to, linkName, history }) => (
    <button className="link" onClick={ () => history.push(to) }>{ linkName }</button>
);

export default withRouter(Link);

import React from 'react';


// import { Button } from 'reactstrap';

const HeaderLoginButton = ({onLogin}) => {
    return (
        <button onClick={onLogin}>Login</button>
    );
};

export default HeaderLoginButton;
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Link} from 'react-router-dom';
import MiddleComponent from './MiddleComponent';
import './index.css';

//https://coolors.co/5c0029-3d3b8e-bad9b5-dce0d9-a29c9b
const Logo = (props) => {

  return <>
            <Link style={{textDecoration: 'none'}} to='/' >
                <div className="specialFont">
                    <MiddleComponent style={{
                        textAlign: 'center', 
                        height:200, 
                        alignContent: 'center',
                        fontSize: 60}} middleRowStyle={{justifyContent: 'center'}}>
                        Version-API
                    </MiddleComponent>
                </div>
            </Link>
      </>;
}

export default Logo;
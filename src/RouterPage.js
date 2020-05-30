import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Startpage from './Startpage';
import Register from './Register';
import {Container} from 'react-bootstrap';
import useWindowDimension from './hooks/useWindowDimension';

export default function RouterPage() {
    const {height, width} = useWindowDimension();
    return (<>
        <Router>
                <Switch>
                    <div style={{ height: height, backgroundColor: '#DCE0D9'}}>
                        <Container style={{
                            textAlign: 'center', 
                            fontWeight : 'bold',
                            fontFamily: 'sans-serif',
                            color: '#5C0029',
                        }} fluid>
                                <Route exact path="/">
                                    <Startpage height={height}/>
                                </Route>
                                <Route path="/register">
                                    <Register height={height}/>
                                </Route>
                        </Container>
                    </div>
                </Switch>
        </Router>
    </>);
}


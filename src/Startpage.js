import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { Menu, MenuItem, Typeahead } from 'react-bootstrap-typeahead';
import React from 'react';
import {useState, useEffect} from 'react';
import Logo from './Logo';
import MiddleComponent from './MiddleComponent';

import 'react-bootstrap-typeahead/css/Typeahead.css';


import {Link} from 'react-router-dom';

//https://coolors.co/f17300-007bff-474647-dce0d9-2a3c24
const Startpage = (props) => {

  const [searchText, setSearchText] = useState([]);
  const [versionList, setVersionList] = useState([]);
  
  useEffect(() => {
    fetchVersionList();
  });

  const fetchVersionList = async() => {
    const response = await fetch('http://localhost:3300/api/versionapi');
    const jsonData = await response.json();

    setVersionList(jsonData);
  }

  return <>
          <Logo/>
          <MiddleComponent>
              <InputGroup size="lg">
              <Typeahead
                  id="searchTextField"
                  onChange={setSearchText}
                  options={versionList}
                  placeholder={"Software Name"}
                  selected={searchText}
                  onKeyDown={(e) => {
                    if(e.keyCode === 13) {
                      console.log("enter!")
                    }
                  }}
                  renderMenu={(results, menuProps) => (
                    <Menu {...menuProps}>
                      {results.map((result, index) => (
                        <MenuItem
                          onClick={() => console.log('click!')}
                          option={result}
                          position={index}>
                          {result}
                        </MenuItem>
                      ))}
                    </Menu>
                  )}                  
              />
              </InputGroup>
          </MiddleComponent>
          <MiddleComponent style={{height: 200, alignContent:'center'}} middleRowStyle={{justifyContent:'center'}}>
              <Link to="/register">
                <Button onclick={props.onRegisterClick}>Register now</Button>
              </Link>
          </MiddleComponent>           
      </>;
}

export default Startpage;


import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import styled from "styled-components";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import IconButton from '@material-ui/core/IconButton';

const Styles = styled.div`
    .navbar{
        background-color: rgba(108,117,125,0.15);
        width: 100vw;
        border-bottom: 0.5px solid #6C757D
    }

    .navbar-text{
        padding-left: 60px;
        color: white;
    }
`

export class NavBar extends Component {
    handleLogOut = async () => {
        
    }

    render() {
        return (
            <Styles>
                <Navbar className="navbar" >
                    <Navbar.Brand className="navbar-text">Graph AI</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <IconButton
                            className="collapse-icon"
                            color="inherit"
                        >
                            <MeetingRoomIcon fontSize='default' color='secondary' />
                        </IconButton>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
    }
}
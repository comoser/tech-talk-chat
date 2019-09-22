import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
    display: flex;
    position: fixed;
    height: 80px;
    top:0;
    right: 0;
    left: 0;
    background-color: #3832a8;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: sans-serif;
`;

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <h2>Chat Demo</h2>
        </NavbarWrapper>
    );
};

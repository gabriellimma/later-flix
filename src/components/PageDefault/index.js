import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px; 
    padding-left: 5%; 
    padding-right: 5%; 
`;

function PageDefault(props) {
    return (

        <>
            <Navbar />  
                <Main>
                    {props.children}
                </Main>
            <Footer />
        </>
    );
}

export default PageDefault
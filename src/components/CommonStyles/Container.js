import React from 'react'
import { MainContainer } from './ContainerElements';

const Container = (props) => {

    return (
        <>
            <MainContainer>
                 {props.children}
            </MainContainer>   
        </>
    );
}

export default Container;

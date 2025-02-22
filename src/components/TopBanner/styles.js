import styled from "styled-components";

export const Container = styled.div`
    padding: 25px 100px;
    position: relative;
    background-size: cover;
    background-position: center;
    
    &:before{
        background-color: rgba(0,0,0,0.55);
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
`

export const Text = styled.div`
   width: 55%;
   position: relative;
   z-index: 1;
    h2{
        color: var(--white);
        font-size: 62px
        margin-bottom: 25px;
    }
    p{
        color: var(--white);
        margin-bottom: 25px;
    }
`
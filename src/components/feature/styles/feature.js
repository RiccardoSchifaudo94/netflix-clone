import styled from 'styled-components/macro';

export const Title = styled.h1`
    
    font-size:50px;
    color:white;
    font-weight:700;
    margin:auto;
    max-width:640px;

    @media (max-width:600px){
        font-size:35px;
    }

`;

export const SubTitle = styled.h2`
    
    font-size:26px;
    color:white;
    font-weight:normal;
    margin: 16px auto;

    @media (max-width:600px){
        font-size:18px;
    }

`;
export const Container = styled.div`
    display:flex;
    flex-direction:column;
    border-bottom:8px solid #222;    
    text-align:center;
    padding:165px 45px;
`;
import styled from "styled-components";

export const ButtonTheme = styled.button`
    width: 450px;
    height: 40px;
    max-width: 80%;
    padding: .5rem;
    border: none;
    border-radius: 4px;
    background-color: ${props=>props.theme.bg};
    color: ${props=>props.theme.color};

    cursor: pointer;
`
import styled  from "styled-components";

export const StyledHeader= styled.header`
width: 100%;
height: 50px;
background-color: rgba(0, 128, 128, 0.8);
color: #F5F5DC;
font-family: Arial, Helvetica, sans-serif;
font-weight: 700;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
.logotype{
font-size: 30px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
border: 2px solid #008080;
border-radius: 5px;
margin: 0 0 0 20px;
}
div{
    display: flex;
    gap: 20px;
    margin: 0 20px 0 0;
}
`
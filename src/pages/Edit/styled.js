import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10vh;
    fieldset{
        width: 20vw;
        padding: 30px;
        box-shadow: 3px 3px 6px;
    }
    legend{
        text-align: center;
    }    
    select{
        margin-bottom: 10px;
    }    
    input{
        margin-top: 10px;
        margin-bottom: 10px;
        width: 30px;
    }
    button{
        background-color: goldenrod;
        border-radius: 10px;
        cursor: pointer;
    }
`
export const Back = styled.button`
    margin-top: 50px;
    width: 20vw;
    background-color: goldenrod;
    border-radius: 10px;
    cursor: pointer;
`
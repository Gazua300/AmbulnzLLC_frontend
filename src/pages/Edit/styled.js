import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10vh;
    fieldset{
        width: 20vw;
        padding: 30px;
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
`
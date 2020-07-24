import styled from 'styled-components'

const GridQuadrant = styled.div`
    height: ${props => props.height || "50%"};
    width: 100%;
    display: block;
    background-size: cover;
`
export default GridQuadrant;

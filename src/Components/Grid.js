import styled from 'styled-components'

const Grid = styled.div`
    height: ${props => props.height || "100%"};
    width: ${props => props.width || "100%"};
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 100px;

    @media (max-width: 600px) {
        height: auto;
    }
`

export default Grid;

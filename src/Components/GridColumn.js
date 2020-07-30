import styled from 'styled-components'

const GridColumn = styled.div`
    height: 100%;
    overflow: hidden;
    flex-grow: ${props => props.width ? 0 : 1};
    flex-shrink: 1;
    flex-basis: ${props => props.width || "auto"};
    @media (max-width: 600px) {
        min-width: 100%;
    }
`
export default GridColumn;

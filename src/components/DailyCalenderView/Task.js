import styled from 'styled-components'

const StyledTask = styled.h3`
  width: 100%;
  border: 1px solid black;
  text-align: center;
  padding: 0.5rem;
`

export const Task = ({ taskTitle }) => {
  return <StyledTask>{taskTitle}</StyledTask>
}

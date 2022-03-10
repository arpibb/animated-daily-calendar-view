import styled from 'styled-components'

const StyledButton = styled.button`
  height: 40px;
`

export const Button = ({ buttonCTA, onClick }) => {
  return (
    <StyledButton onClick={onClick} name={buttonCTA}>
      {buttonCTA}
    </StyledButton>
  )
}

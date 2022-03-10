import { Button } from '../shared/Button'
import { Title } from '../shared/Title'
import styled from 'styled-components'

const ControlPanelWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const ControlPanel = ({ date, onClick }) => {
  return (
    <ControlPanelWrapper>
      <Button buttonCTA={'Prev'} onClick={onClick} />
      <Title title={date} />
      <Button buttonCTA={'Next'} onClick={onClick} />
    </ControlPanelWrapper>
  )
}

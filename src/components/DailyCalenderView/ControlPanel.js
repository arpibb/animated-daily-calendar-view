import { Button } from '../shared/Button'
import { Title } from '../shared/Title'
import styled from 'styled-components'

const ControlPanelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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

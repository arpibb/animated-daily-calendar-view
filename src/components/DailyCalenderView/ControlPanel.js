import { Button } from '../shared/Button'
import { Title } from '../shared/Title'
import styled from 'styled-components'

const ControlPanelWrapper = styled.div`
  display: flex;
`

export const ControlPanel = () => {
  return (
    <ControlPanelWrapper>
      <Button buttonCTA={'Prev'} />
      <Title title={'date'} />
      <Button buttonCTA={'Next'} />
    </ControlPanelWrapper>
  )
}

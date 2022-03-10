import styled from 'styled-components'
import { ControlPanel } from './ControlPanel'
import { TaskPanel } from './TaskPanel'

const DailyCalendarViewWrapper = styled.div``

export const DailyCalendarView = () => {
  return (
    <DailyCalendarViewWrapper>
      <ControlPanel />
      <TaskPanel />
    </DailyCalendarViewWrapper>
  )
}

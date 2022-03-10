import styled from 'styled-components'
import { Task } from './Task'

const TaskPanelWrapper = styled.div``

export const TaskPanel = () => {
  return (
    <TaskPanelWrapper>
      <Task />
    </TaskPanelWrapper>
  )
}

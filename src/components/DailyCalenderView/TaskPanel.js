import styled from 'styled-components'
import { Task } from './Task'

const TaskPanelWrapper = styled.div``

export const TaskPanel = ({ dailyTaskData }) => {
  return (
    <TaskPanelWrapper>
      {dailyTaskData.tasks.map((task) => {
        return <Task taskTitle={task} />
      })}
    </TaskPanelWrapper>
  )
}

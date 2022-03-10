import styled from 'styled-components'
import { Task } from './Task'

const TaskPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 0;
`

export const TaskPanel = ({ dailyTaskData }) => {
  return (
    <TaskPanelWrapper>
      {dailyTaskData.tasks.map((task, idx) => {
        return <Task key={idx} taskTitle={task} />
      })}
    </TaskPanelWrapper>
  )
}

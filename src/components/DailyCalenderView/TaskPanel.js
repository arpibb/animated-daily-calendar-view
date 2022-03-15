import styled from 'styled-components'
import { Task } from './Task'

const TaskPanelWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 200px;
  padding: 1rem;
`

export const TaskPanel = ({ dailyTaskData, direction }) => {
  return (
    <TaskPanelWrapper direction={direction}>
      {dailyTaskData.tasks.map((task, idx) => {
        return <Task key={idx} taskTitle={task} />
      })}
    </TaskPanelWrapper>
  )
}

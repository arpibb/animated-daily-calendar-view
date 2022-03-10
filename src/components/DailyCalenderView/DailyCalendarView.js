import React, { useState } from 'react'
import styled from 'styled-components'
import { ControlPanel } from './ControlPanel'
import { TaskPanel } from './TaskPanel'
import { getDailyTasks } from '../../services/taskService'

const DailyCalendarViewWrapper = styled.div``

export const DailyCalendarView = () => {
  const [dailyTaskData, _] = useState(getDailyTasks())
  const [displayedTaskIndex, setDisplayedTaskIndex] = useState(0)

  const nextStateExist = (nextState) => {
    return nextState >= 0 && nextState < dailyTaskData.length
  }

  const handleDayChange = (event) => {
    const buttonClicked = event.target.name

    let nextState

    if (buttonClicked === 'Prev') {
      nextState = displayedTaskIndex - 1
    } else {
      nextState = displayedTaskIndex + 1
    }

    if (nextStateExist(nextState)) {
      setDisplayedTaskIndex(nextState)
    } else {
      window.alert("Oops the date your are trying to access doesn't exist")
    }
  }

  return (
    <DailyCalendarViewWrapper>
      <ControlPanel
        onClick={handleDayChange}
        date={dailyTaskData[displayedTaskIndex].date}
      />
      <TaskPanel dailyTaskData={dailyTaskData[displayedTaskIndex]} />
    </DailyCalendarViewWrapper>
  )
}

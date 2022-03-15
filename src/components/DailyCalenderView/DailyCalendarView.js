import React, { useState } from 'react'
import styled from 'styled-components'
import { ControlPanel } from './ControlPanel'
import { TaskPanel } from './TaskPanel'
import { getDailyTasks } from '../../services/taskService'
import { CSSTransition } from 'react-transition-group'

const DailyCalendarViewWrapper = styled.div`
  width: 250px;
  min-height: 300px;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`

const TransitionWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const DailyCalendarView = () => {
  const [dailyTaskData] = useState(getDailyTasks())
  const [displayedTaskIndex, setDisplayedTaskIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextStateExist = (nextState) => {
    return nextState >= 0 && nextState < dailyTaskData.length
  }

  const handleDayChange = (event) => {
    const buttonClicked = event.target.name

    let nextDirection

    if (buttonClicked === 'Prev') {
      nextDirection = -1
    } else {
      nextDirection = 1
    }

    const nextState = displayedTaskIndex + nextDirection

    if (nextStateExist(nextState)) {
      setDisplayedTaskIndex(nextState)
      setDirection(nextDirection)
    } else {
      window.alert("Oops the date your are trying to access doesn't exist")
    }
  }

  const getApplicableClassName = (currentIndex) => {
    return displayedTaskIndex !== currentIndex
      ? direction > 0
        ? 'menu-primary-right'
        : 'menu-primary-left'
      : direction > 0
      ? 'menu-secondary-right'
      : 'menu-secondary-left'
  }

  return (
    <DailyCalendarViewWrapper>
      <ControlPanel
        onClick={handleDayChange}
        date={dailyTaskData[displayedTaskIndex].date}
      />
      <TransitionWrapper>
        {dailyTaskData.map((task, index) => {
          return (
            <CSSTransition
              key={index}
              in={displayedTaskIndex === index}
              timeout={500}
              classNames={getApplicableClassName(index)}
              unmountOnExit
            >
              <TaskPanel dailyTaskData={task} />
            </CSSTransition>
          )
        })}
      </TransitionWrapper>
    </DailyCalendarViewWrapper>
  )
}

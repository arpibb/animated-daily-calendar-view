import { DailyCalendarView } from './components/DailyCalenderView/DailyCalendarView'
import styled from 'styled-components'

const AppWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  margin-top: 250px;
`

const App = () => {
  return (
    <AppWrapper>
      <DailyCalendarView />
    </AppWrapper>
  )
}

export default App

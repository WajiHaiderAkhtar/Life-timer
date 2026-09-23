// import {lifeCalculator} from "./utils/lifeCalculator"
import { useLifeTimer } from "./hooks/useLifeTimer"
const DOB : Date = new Date(prompt("Enter your Date of Birth : DD/MM/YY")!)
const lifespan : number = Number(prompt("Enter your life span"))
function App() {

  const {lived , remaining} = useLifeTimer(DOB,lifespan)
  return (
    <>
      <h1>LIVED</h1>
      weeks = {lived.weeks} <br />
      days = {lived.days}<br />
      hours = {lived.hours}<br />
      minutes = {lived.minutes}<br />
      seconds = {lived.seconds}<br />

      <hr />

      <h1>REMAINING</h1>
      weeks = {remaining.weeks}<br />
      days = {remaining.days}<br />
      hours = {remaining.hours}<br />
      minutes = {remaining.minutes}<br />
      seconds = {remaining.seconds}<br />
    </>
  )
}

export default App

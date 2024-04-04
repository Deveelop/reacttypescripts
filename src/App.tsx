import './App.css'
import {Examplses} from './components/props/Examplses'
import Status from './components/props/Status'
import Heading from './components/props/Heading'
import Oscar from './components/props/Oscar'
import Button from './components/props/Button'
import Input from './components/props/Input'
import Container from './components/props/Container'
import LoggedIn from './components/state/LoggedIn'
export const someArrays = [
  {
    first: 'Urum',
    last: 'Goodness'
  },
  {
    first: 'Victor',
    last: 'Abuka'
  },
  {
    first: 'Urum',
    last: 'Mercy'
  },
  {
    first: 'Urum',
    last: 'Miriam'
  },
]
const App = () => {
  return (
    <>
     <Examplses name='Vicson' numberCount={80} isExist= {false} nameArray={someArrays} /> 
     <Status status='loading'/>
     <Heading>Hello people</Heading>
     <Oscar>
      <Heading>Oscar goes to divee</Heading>
     </Oscar>
     <Button handleClick={(event, id) => {
      console.log('No error', event, id)
     }}/>
     <Input  value='' handlChange={ event => console.log(event)}/>
    <Container styles={{border: '1px solid black', padding:'1rem'}}/>
    <LoggedIn/>
    </>
  )
}

export default App

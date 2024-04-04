import { NameProps } from "./Example.types"

export const Examplses = ({name, nameArray, isExist, numberCount}: NameProps) => {
 
  return (
    <div>
      {name}
      {isExist ? numberCount : null}
      {nameArray.map(name =>(
        <li key={name.last}>{name.first} {name.last}</li>
      ))}
    </div>
  )
}



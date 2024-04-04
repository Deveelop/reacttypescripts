type InputProp = {
    value: string
    handlChange:  (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value, handlChange}: InputProp) => {
  return (
    <input type="text" onChange={handlChange} value={value}/>
  )
}

export default Input

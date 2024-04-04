type StatusProps = {
    status: 'loading'  | 'success' | 'error'
}

const Status = ({status}: StatusProps) => {
let message
if (status === 'loading'){
    message = 'Loading'
} else if(status === 'success'){
    message = 'Data fetched successfully'
} else if(status === 'error'){
    message = 'Error Occured'
}
  return (
    <div>
      <h2>Status is: {message}</h2>
    </div>
  )
}

export default Status

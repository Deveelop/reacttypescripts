type ContainerProp = {
    styles: React.CSSProperties
}

const Container = ({styles}: ContainerProp) => {
  return (
    <div style={styles}>
      Text Content goes here
    </div>
  )
}

export default Container

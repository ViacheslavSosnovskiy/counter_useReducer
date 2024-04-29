import { useCustomContext } from '../context/Context'

const Alert = () => {
    const context = useCustomContext()
    // const {toggle} = useCustomContext()
    console.log('context', context)
  return (
    <button onClick={() => context.toggle(!context.value)}>alert</button>
  )
}

export default Alert
import React, { useContext, useState } from 'react'

const ContextAlert = React.createContext()

export const useCustomContext = () => {
    return useContext(ContextAlert)
}

const Context = ({children}) => {
    const [toggleAlert, setToggleAlert] = useState(false)
  return (
    <ContextAlert.Provider value={{value: toggleAlert, toggle: setToggleAlert}}>
        {children}
    </ContextAlert.Provider>
  )
}

export default Context
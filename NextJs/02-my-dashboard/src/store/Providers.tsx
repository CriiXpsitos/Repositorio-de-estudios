interface Props {
    children: React.ReactNode
}

import { Provider } from "react-redux"
import { store } from "."


export const Providers = ({children} : Props) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )

}

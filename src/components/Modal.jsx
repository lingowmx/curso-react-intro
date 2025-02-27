import ReactDOM from "react-dom"


export const Modal = ({children}) => {
  return ReactDOM.createPortal(
    <div className="">
      {children}
    </div>,
    document.getElementById('modal')
  )
}

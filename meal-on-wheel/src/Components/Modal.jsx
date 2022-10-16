import { useGlobalContext } from "../Context";
const Modal =()=>{
    const { selectedMeal, closeModal } = useGlobalContext()
    return<aside className='modal-overlay'>
       <div className='modal-container'>
        <h1>Modal Container</h1>
        </div>
        </aside>
}
export default Modal;
import { VscAdd } from 'react-icons/vsc'
import './cards.css'

export default function Cards() {
    return (
        <div className='cards'>
            <div className='card card-width'>
            </div>
            <div className='card card-width'></div>
            <div className='card card-width'></div>
            <button className='button card-width'>
                <VscAdd />
                <p>Add city</p>
            </button>
        </div>
    )
}
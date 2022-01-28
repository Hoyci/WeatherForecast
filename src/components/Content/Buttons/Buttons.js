import './buttons.css'
import { useState } from 'react'

export default function Buttons({onClick}) {
    const [dayChecked, setDayChecked] = useState({name: 'day', checked: false})
    const [weekChecked, setWeekChecked] = useState({name: 'week', checked: true})

    const handler = (element) => {
        const elementName = element.target.id
        if (elementName === dayChecked.name && !dayChecked.checked) {
            setWeekChecked({...weekChecked, checked: !weekChecked.checked})
            setDayChecked({...dayChecked, checked: !dayChecked.checked})
        }
        if (elementName === weekChecked.name && !weekChecked.checked) {
            setDayChecked({...dayChecked, checked: !dayChecked.checked})
            setWeekChecked({...weekChecked, checked: !weekChecked.checked})
        }
    }

    return (    
        <div className='buttonHandler'>
            {dayChecked.checked === true ? 
                <>
                    <p onClick={(element) => { onClick(element); handler(element) }} id='week'>Week</p>
                    <p onClick={(element) => { onClick(element); handler(element) }} id='day' className='bold'>Day</p>
                </>
                :
                <>                    
                    <p onClick={(element) => { onClick(element); handler(element) }} id='week' className='bold'>Week</p>
                    <p onClick={(element) => { onClick(element); handler(element) }} id='day'>Day</p>
                </>
            }
        </div> 
    )
}



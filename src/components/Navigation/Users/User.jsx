import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faChevronDown, faChevronUp, faCircleArrowRight, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
function User() {
    const [user, setUser] = useState(false)
    return (
        <div className="right-part p-1.5 mx-2 relative">

            <button className='m-1'><FontAwesomeIcon icon={faUser} className='mx-1 mt-1 ' />User<FontAwesomeIcon icon={faChevronDown} /></button>

        </div >
    )
}

export default User
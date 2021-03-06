import {useState} from 'react'
import './header.css';
import {Link} from 'react-router-dom'

export const Header = (props) => {
    const [active , setActive] = useState(true)

    const clickHandler = (e) => {
        console.log(e)
        switch(e){
            case 'incomplete':
                return setActive(true)

            case 'complete':
                return setActive(false)    
            
            default :
                return active;     
        }        
    }
   
    return (
        <header>
            <div className='logo'>
                <h1>To-Do List</h1>
                <span>{props.activeTask.length} Active Task</span>
            </div>
            <nav>
            <Link to='/' style={{textDecoration: 'none'}} >
                <h3 className={active ?'link':'active'} onClick={() => clickHandler('incomplete')}>
                    Incomplete Task
                </h3>
            </Link>
            <Link to='/completed-task' style={{textDecoration: 'none'}}>
                <h3 className={active ?'active':'link'} onClick={() => clickHandler('complete')}>
                     Completed Task
                </h3>
            </Link>
            </nav>
            
        </header>
    )
}

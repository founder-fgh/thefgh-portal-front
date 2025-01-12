import {Component} from 'react' 

import './index.css'

class TeamMember extends Component{
    state = {
        expand: false
    }

    onReadmore = () => {
        this.setState((prevState) => ({
            expand: !prevState.expand
        }))
    }

    render (){
        const {mem} = this.props
        const {name, role, description, image} = mem 
        const {expand} = this.state
        const desClass = (expand === false) ? 'hidden' : 'show';
        return (
            <li className='member-card'>
                <img src={image} alt='mem img'/>
                <h2>{name}</h2>
                <h3>{role}</h3>
                <p className={desClass}>{description}</p>
                {expand && <button onClick={this.onReadmore}>Show Less</button>}
                {!expand && <button onClick={this.onReadmore}>Read More</button>}
            </li>
        )
    }
}

export default TeamMember
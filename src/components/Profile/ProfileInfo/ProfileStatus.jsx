import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    
    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }
    
    deactivateEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        )
        this.props.updateStatus(this.state.status);
    }
    
    onStatusChange = (e) => {
        this.setState({
            status:e.currentTarget.value
        });
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }

    render (){
        return (
            <div >
                {true && <div>
                    <span  >{this.props.status || "--------"}</span>
                </div>}
                {false &&
                    <div>
                        <input  autoFocus={true} />
                    </div>
                }
            </ div>
        )
    }
}

export default ProfileStatus;


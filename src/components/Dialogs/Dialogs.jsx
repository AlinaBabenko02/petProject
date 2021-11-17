import React from 'react';
import Dialogitem from './Dialogitem/Dialogitem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { Redirect } from 'react-router';


const Dialogs = (props) => {
    let state=props.dialogsPage;

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let newMessagesElement = React.createRef();

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let dialogsElements = state.dialogs.map(d => <Dialogitem name={d.name} id={d.id} key={d.id}/>);

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);

    if(!props.isAuth) return <Redirect to="/login" />

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            <div>{messagesElements}</div>
            <div>
                <div>
                    <textarea ref={newMessagesElement} value= {newMessageBody}
                    onChange={onNewMessageChange} 
                    placeholder='Enter your message'></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>

        </div>
    </div >
}

export default Dialogs;
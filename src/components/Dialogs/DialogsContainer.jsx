import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator }
    from '../../redux/dialogs_reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogs from '../Dialogs/Dialogs'
import { compose } from 'redux';

let mapStateToProps = (state)=>{
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        updateNewMessageBody:(body)=>{
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage:()=>{
            dispatch(sendMessageCreator());
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
withAuthRedirect
)(Dialogs);
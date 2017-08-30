import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/index';
import { StoreState, Message } from '../types/index';

export interface Props {
    message: Message;
    onChangeMessage: (value: React.FormEvent<HTMLInputElement>) => void;
    onChangeType: (value: React.FormEvent<HTMLInputElement>) => void;
};

const Message = ({ message, onChangeMessage, onChangeType }: Props) => (
    <div>
        <input type="radio" name="type" value="text" onChange={onChangeType} checked={message.type === 'text'} />Text
        <input type="radio" name="type" value="number" onChange={onChangeType} checked={message.type === 'number'} />Number
        <br/>
        <label>Enter your message</label>
        <input type={message.type} onChange={onChangeMessage} value={message.value} />
    </div>
);

const mapStateToProps = ({ message }: StoreState) => ({
    message
});

const mapDispatchToProps = (dispatch: Dispatch<actions.MessageAction>) => ({
    onChangeMessage: (event: React.FormEvent<HTMLInputElement>) => dispatch(actions.changeMessage(event)),
    onChangeType: (event: React.FormEvent<HTMLInputElement>) => dispatch(actions.changeType(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(Message)
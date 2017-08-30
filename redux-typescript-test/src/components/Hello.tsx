import * as React from 'react';
import { StoreState, Message } from '../types/index';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/index';

export interface Props {
    message: Message;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
};

const Hello = ({ message, enthusiasmLevel = 1, onDecrement, onIncrement }: Props) => {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }
    const exclamations = new Array(enthusiasmLevel + 1).join('!');
    return (
        <div>
            Hello {message.value}{exclamations}
            <button onClick={onIncrement}>+</button>    
            <button onClick={onDecrement}>-</button>    
        </div>
    );
};

const mapStateToProps = ({ message, enthusiasmLevel }: StoreState) => ({
    message,
    enthusiasmLevel
});

const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => ({
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm())
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM, CHANGE_MESSAGE, CHANGE_TYPE } from '../constants/index';

export interface IncrementEnthusiasm {
    type: INCREMENT_ENTHUSIASM;
};

export interface DecrementEnthusiasm {
    type: DECREMENT_ENTHUSIASM;
};

export interface ChangeMessage {
    type: CHANGE_MESSAGE;
    text: string;
};

export interface ChangeType {
    type: CHANGE_TYPE;
    value: string;
};

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;
export type MessageAction = ChangeMessage | ChangeType;

export const incrementEnthusiasm = (): IncrementEnthusiasm => ({
    type: INCREMENT_ENTHUSIASM,
});

export const decrementEnthusiasm = (): DecrementEnthusiasm => ({
    type: DECREMENT_ENTHUSIASM,
});

export const changeMessage = (event: React.FormEvent<HTMLInputElement>): ChangeMessage => {
    const text: string = (event.currentTarget.value).toString();
    return {
        type: CHANGE_MESSAGE,
        text
    }
};

export const changeType = (event: React.FormEvent<HTMLInputElement>): ChangeType => {
    const value: string = (event.currentTarget.value).toString();
    return {
        type: CHANGE_TYPE,
        value
    }
};
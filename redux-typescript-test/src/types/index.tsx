export interface StoreState {
    message: Message;
    enthusiasmLevel: number;
}

export interface Message {
    type: string;
    value: string | number
}
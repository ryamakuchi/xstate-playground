import { createContext } from 'react';
import { EventObject, State, Interpreter, interpret } from 'xstate';
import { CartMachineContext } from '../state-machine/context';
import { CartMachineEvent } from '../state-machine/events';
import { cartMachine } from '../state-machine/index';

export type CartState<
    TContext = CartMachineContext,
    TEvent extends EventObject = CartMachineEvent
> = State<TContext, TEvent>;

export type CartService<
    TContext = CartMachineContext,
    TEvent extends EventObject = CartMachineEvent
> = Interpreter<TContext, any, TEvent>;

export type CartMachineContextProps = [
  CartState,
  CartService['send'],
  CartService
];

const service = interpret(cartMachine);

export const CartContext = createContext<CartMachineContextProps>([
  service.state, service.send, service
]);

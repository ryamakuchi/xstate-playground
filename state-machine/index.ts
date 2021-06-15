import { createMachine } from 'xstate'

import { defaultContext, CartMachineContext } from './context'
import { CartMachineEvent } from './events'

export const cartMachine = createMachine<CartMachineContext, CartMachineEvent>(
  {
    id: 'cart',
    meta: 'カートの状態を管理する',
    context: defaultContext,
    initial: 'idle',
    states: {
      idle: {
        type: 'atomic',
        on: { IN_CART: 'edit' },
      },
      edit: {
        on: {
          CHECKOUT: {
            target: 'confirm',
          },
        },
      },
      confirm: {
        on: {
          COMPLETE: { target: 'orderCompleted' },
          FAILURE: { target: 'orderFailure' },
        },
      },
      orderCompleted: { type: 'final' },
      orderFailure: { on: { RETRY: { target: 'confirm' } } },
    },
  },
  {
    actions: {},
    activities: {},
    delays: {},
    guards: {},
    services: {},
  }
)

export const inCartEventCreator = (): {
  type: 'IN_CART'
} => ({
  type: 'IN_CART',
})

export const checkoutEventCreator = (): {
  type: 'CHECKOUT'
} => ({
  type: 'CHECKOUT',
})

export const completeEventCreator = (): {
  type: 'COMPLETE'
} => ({
  type: 'COMPLETE',
})

export const failureEventCreator = (): {
  type: 'FAILURE'
} => ({
  type: 'FAILURE',
})

export const retryEventCreator = (): {
  type: 'RETRY'
} => ({
  type: 'RETRY',
})

export type CartMachineEvent =
  | ReturnType<typeof inCartEventCreator>
  | ReturnType<typeof checkoutEventCreator>
  | ReturnType<typeof completeEventCreator>
  | ReturnType<typeof failureEventCreator>
  | ReturnType<typeof retryEventCreator>

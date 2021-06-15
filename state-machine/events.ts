export const inCartEventCreator = () => ({
  type: 'IN_CART',
})

export const checkoutEventCreator = () => ({
  type: 'CHECKOUT',
})

export const completeEventCreator = () => ({
  type: 'COMPLETE',
})

export const failureEventCreator = () => ({
  type: 'FAILURE',
})

export const retryEventCreator = () => ({
  type: 'RETRY',
})

export type CartMachineEvent =
  | ReturnType<typeof inCartEventCreator>
  | ReturnType<typeof checkoutEventCreator>
  | ReturnType<typeof completeEventCreator>
  | ReturnType<typeof failureEventCreator>
  | ReturnType<typeof retryEventCreator>

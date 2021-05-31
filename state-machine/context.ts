export interface CartMachineContext {
  cartId: string | null;
}

export const defaultContext: CartMachineContext = {
  cartId: null,
};

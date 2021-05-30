export interface CartMachineContext {
  shopId?: string;
  cartId: string | null;
  checkoutId: string | null;
  customerToken: string | null;
  requiresShipping: boolean | null;
}

export const defaultContext: CartMachineContext = {
  cartId: null,
  checkoutId: null,
  customerToken: null,
  requiresShipping: null,
};

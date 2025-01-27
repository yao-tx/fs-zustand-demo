declare global {
  interface Window {
    onFSPopupClosed: (orderReference: OrderReference) => void;
    fastSpringCallBack: (data: FastSpringData) => void;
    fastspring?: {
      builder?: {
        reset: () => void;
        checkout: () => void;
        push: (data: {
          products: { path: string; quantity: number }[];
        }) => void;
      };
    };
  }
}

export {};
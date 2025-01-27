import { create } from "zustand";

export interface Product {
  path: string;
  display: string;
  unitPrice: string;
  image: string;
}

export interface FastSpringData {
  originalTotal: string;
  groups?: {
    items?: Product[];
  }[];
}

interface FastSpringStore {
  products: Product[];
  data: FastSpringData | null;
  setProducts: (products: Product[]) => void;
  setData: (data: FastSpringData) => void;
}

export const useFastSpringStore = create<FastSpringStore>((set) => ({
  products: [],
  data: null,
  setProducts: (products) => set(() => ({ products })),
  setData: (data) => set(() => ({ data })),
}));
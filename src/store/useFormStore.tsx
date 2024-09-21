import { create } from 'zustand';

interface UserData {
  name: string;
  email: string;
  phone: string;
}

export type Type = 'monthly' | 'yearly';

interface State {
  info: UserData;
  type: Type;
  planIndex: number;
  addOns: number[];
}

interface Action {
  updateInfo: (info: UserData) => void;
  updatePlan: (planIndex: number) => void;
  updateType: (type: Type) => void;
  updateAddOns: (addOnsIndex: number) => void;
}

export const useStepsStore = create<State & Action>((set) => ({
  info: {
    name: '',
    email: '',
    phone: '',
  },
  type: 'monthly',
  planIndex: 0,
  addOns: [],

  updateInfo: (info) => set({ info }),
  updatePlan: (planIndex) => set({ planIndex }),
  updateType: (type) => set({ type }),
  updateAddOns: (addOnsIndex) =>
    set((state) => ({
      addOns: state.addOns.includes(addOnsIndex)
        ? state.addOns.filter((i) => i !== addOnsIndex)
        : [...state.addOns, addOnsIndex],
    })),
}));

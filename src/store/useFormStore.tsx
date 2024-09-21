import { create } from 'zustand';

interface Info {
  name: string;
  email: string;
  phone: string;
}

type Type = 'monthly' | 'yearly';
export type Plan = 'arcade' | 'advanced' | 'pro';
interface AddOns {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}

interface State {
  info: Info;
  plan: Plan;
  type: Type;
  addOns: AddOns;
}

interface Action {
  updateInfo: (info: Info) => void;
  updatePlan: (plan: Plan) => void;
  updateType: (type: Type) => void;
  updateAddOns: (addOns: Partial<AddOns>) => void;
}

export const useStepsStore = create<State & Action>((set) => ({
  info: {
    name: '',
    email: '',
    phone: '',
  },
  plan: 'arcade',
  type: 'monthly',
  addOns: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
  updateInfo: (info) => set({ info }),
  updatePlan: (plan) => set({ plan }),
  updateType: (type) => set({ type }),
  updateAddOns: (addOns) => set((state) => ({ addOns: { ...state.addOns, ...addOns } })),
}));

import { create } from 'zustand';

interface Info {
  name: string;
  email: string;
  phone: string;
}

type Type = 'monthly' | 'yearly';
export type Plan = 'arcade' | 'advanced' | 'pro';

interface State {
  info: Info;
  plan: Plan;
  type: Type;
}

interface Action {
  updateInfo: (info: Info) => void;
  updatePlan: (plan: Plan) => void;
  updateType: (type: Type) => void;
}

export const useStepsStore = create<State & Action>((set) => ({
  info: {
    name: '',
    email: '',
    phone: '',
  },
  plan: 'arcade',
  type: 'monthly',

  updateInfo: (info: Info) => set((state) => ({ ...state, info })),
  updatePlan: (plan: Plan) => set((state) => ({ ...state, plan })),
  updateType: (type: Type) => set((state) => ({ ...state, type })),
}));

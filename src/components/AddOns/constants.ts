export const addOns = [
  {
    id: 'onlineService' as const,
    name: 'Online service',
    description: 'Access to multiplayer games',
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    id: 'largerStorage' as const,
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    id: 'customizableProfile' as const,
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];

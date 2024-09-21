import { useState } from 'react';
import { useStepsStore } from '~/store/useFormStore';
import { localStorageKey } from '~/constants';

type Status = 'idle' | 'pending' | 'error' | 'success';

const fakeApiCall = (data: string, ms = 500): Promise<string> =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

export const useSubmitForm = () => {
  const { addOns, info, planIndex, type } = useStepsStore();
  const [status, setStatus] = useState<Status>('idle');

  const submit = async () => {
    setStatus('pending');

    try {
      const json = JSON.stringify({
        addOns,
        info,
        planIndex,
        type,
      });

      const response = await fakeApiCall(json);
      // if (!response.ok) throw new Error('Could not submit data')...;

      setStatus('success');

      useStepsStore.persist.clearStorage();
      localStorage.removeItem(localStorageKey);
    } catch (e) {
      console.error(e);
      setStatus('error');
    }
  };

  console.log(status);

  return {
    status,
    isPending: status === 'pending',
    isSuccess: status === 'success',
    isError: status === 'error',
    submit,
  };
};

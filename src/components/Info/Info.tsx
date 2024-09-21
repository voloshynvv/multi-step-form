import { forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import isMobilePhone from 'validator/lib/isMobilePhone';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import TextField from '~/components/ui/TextField/TextField';

import { useStepsStore } from '~/store/useFormStore';
import { rem } from '~/styles/mixins';
import { ValidateRef } from '~/hooks/useSteps';

const infoSchema = z.object({
  name: z.string().min(1, 'This field is required'),
  email: z.string().min(1, 'This field is required').email('Field is not valid'),
  phone: z.string().min(1, 'This field is required').refine(isMobilePhone, 'Field is not valid'),
});

type FormValues = z.infer<typeof infoSchema>;

const Info = forwardRef<ValidateRef>((_, ref) => {
  const values = useStepsStore((state) => state.info);
  const updateInfo = useStepsStore((state) => state.updateInfo);

  const {
    register,
    getValues,
    formState: { errors },
    trigger,
  } = useForm<FormValues>({
    resolver: zodResolver(infoSchema),
    mode: 'onTouched',
    values,
  });

  useImperativeHandle(ref, () => ({
    validate,
  }));

  const validate = async () => {
    const isValid = await trigger();
    if (isValid) {
      const info = getValues();
      updateInfo(info);
    }
    return isValid;
  };

  return (
    <>
      <header>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </header>

      <Form>
        <TextField
          type="text"
          label="Name"
          id="name"
          placeholder="e.g. Stephen King"
          errorMessage={errors.name?.message}
          {...register('name')}
        />

        <TextField
          type="email"
          label="Email Address"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          errorMessage={errors.email?.message}
          {...register('email')}
        />

        <TextField
          type="tel"
          label="Phone Number"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          errorMessage={errors.phone?.message}
          {...register('phone')}
        />
      </Form>
    </>
  );
});

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${rem(14)};

  @media (min-width: 768px) {
    gap: ${rem(24)};
  }
`;

export default Info;

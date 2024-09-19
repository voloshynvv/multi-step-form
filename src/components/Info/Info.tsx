import styled from 'styled-components';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import TextField from '~/components/ui/TextField/TextField';

const infoSchema = z.object({
  name: z.string().min(1, 'This field is required'),
  email: z.string().min(1, 'This field is required').email('Email is not valid'),
  phone: z.string().min(1, 'This field is required'),
});

type FormValues = z.infer<typeof infoSchema>;

const Info = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(infoSchema),
    mode: 'onTouched',
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <header>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </header>

      <Form onSubmit={handleSubmit(onSubmit)}>
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
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.625rem;
  }
`;

export default Info;

import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  firstName: string;
  mail: string;
  age: number;
};

export default function App() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<Inputs>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input
        {...register('firstName', {
          required: 'First name is required',
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: 'Use English language and no numbers',
          },
          minLength: {
            value: 2,
            message: 'Minimum 2 characters',
          },
        })}
      />
      {errors.firstName && (
        <p role="alert">{errors.firstName.message || 'Error'}</p>
      )}

      <label>Age</label>
      <input
        {...register('age', {
          required: 'Age is required',
          pattern: {
            value: /^[0-9]+$/,
            message: 'Use numbers',
          },
          min: {
            value: 16,
            message: 'You must be over 16',
          },
          max: {
            value: 99,
            message: 'You must not be older than 99',
          },
        })}
      />
      {errors.age && <p role="alert">{errors.age.message || 'Error'}</p>}

      <label>Email</label>
      <input
        {...register('mail', {
          required: 'Email Address is required',
          pattern: {
            value: /^[A-Za-z0-9]+@+[A-Za-z0-9]+$/i,
            message:
              'Use English language and numbers. The email must contain @',
          },
          minLength: {
            value: 2,
            message: 'Minimum 2 characters',
          },
        })}
      />
      {errors.mail && <p role="alert">{errors.mail.message || 'Error'}</p>}

      <input type="submit" disabled={!isValid} />
    </form>
  );
}

import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  firstName: string;
  age: number;
  mail: string;
  password: string;
  confirm_password: string;
  gender: string;
  TandC: string;
  upload_picture: string;
  country: string;
};

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
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

      <label>Password</label>
      <input
        {...register('password', {
          required: 'Password is required',
          pattern: {
            value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_])/,
            message:
              'Use English language. Password must contain: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character',
          },
        })}
      />
      {errors.password && (
        <p role="alert">{errors.password.message || 'Error'}</p>
      )}

      <label>Confirm password</label>
      <input
        {...register('confirm_password', {
          required: 'To confirm password is required',
          validate: (val: string) => {
            if (watch('password') != val) {
              return 'Your passwords do no match';
            }
          },
        })}
      />
      {errors.confirm_password && (
        <p role="alert">{errors.confirm_password.message || 'Error'}</p>
      )}

      <label>Gender</label>
      <select
        {...register('gender', {
          required: 'To choose gender is required',
        })}
      >
        <option value="">Select gender...</option>
        <option value="Man">Man</option>
        <option value="Woman">Woman</option>
      </select>
      {errors.gender && <p role="alert">{errors.gender.message || 'Error'}</p>}

      <label>Accept T&C</label>
      <input
        {...register('TandC', {
          required: 'To confirm T&C is required',
        })}
        type="checkbox"
        value="Confirmed"
      />
      {errors.TandC && <p role="alert">{errors.TandC.message || 'Error'}</p>}

      <label>Upload picture</label>
      <input
        type="file"
        {...register('upload_picture', {
          required: 'To uploade picture is required',
        })}
      />
      {errors.upload_picture && (
        <p role="alert">{errors.upload_picture.message || 'Error'}</p>
      )}

      <label>Country</label>
      <select
        {...register('country', {
          required: 'To choose country is required',
        })}
      >
        <option value="">Select country...</option>
        <option value="Belarus">Belarus</option>
        <option value="Russia">Russia</option>
        <option value="USA">USA</option>
      </select>
      {errors.country && (
        <p role="alert">{errors.country.message || 'Error'}</p>
      )}

      <input type="submit" />
    </form>
  );
}

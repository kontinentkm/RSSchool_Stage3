//Form_1Comp.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../store/store';
import { updateFirstForm } from '../store/reducers/firstFormReducer';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FirstFormState } from '../store/reducers/firstFormReducer';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  age: yup
    .number()
    .required('Age is required')
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .min(16, 'You must be over 16')
    .max(99, 'You must not be older than 99'),
  mail: yup
    .string()
    .required('Email Address is required')
    .matches(
      /^[A-Za-z0-9]+@+[A-Za-z0-9]+$/i,
      'Use English language and numbers. The email must contain @'
    )
    .min(2, 'Minimum 2 characters'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_])/,
      'Use English language. Password must contain: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character'
    ),
  confirm_password: yup
    .string()
    .required('To confirm password is required')
    .oneOf([yup.ref('password')], 'Your passwords do not match'),
  gender: yup.string().required('To choose gender is required'),
  TandC: yup.string().required('To confirm T&C is required'),
  upload_picture: yup.string().required('To upload picture is required'),
  country: yup.string().required('To choose country is required'),
});

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

interface Form_1CompProps {
  formState?: FirstFormState;
}

const Form_1Comp: React.FC<Form_1CompProps> = ({ formState = {} }) => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: formState,
    resolver: yupResolver(schema),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const formData: Partial<FirstFormState> = {
      [name as keyof FirstFormState]: value,
    };

    dispatch(updateFirstForm(formData));

    setValue(name as keyof FirstFormState, value);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register('firstName')} onChange={handleChange} required />
      {errors.firstName && <p role="alert">{errors.firstName.message}</p>}

      <label>Age</label>
      <input {...register('age')} onChange={handleChange} required />
      {errors.age && <p role="alert">{errors.age.message}</p>}

      <label>Email</label>
      <input {...register('mail')} onChange={handleChange} required />
      {errors.mail && <p role="alert">{errors.mail.message}</p>}

      <label>Password</label>
      <input {...register('password')} onChange={handleChange} required />
      {errors.password && <p role="alert">{errors.password.message}</p>}

      <label>Confirm Password</label>
      <input
        {...register('confirm_password')}
        onChange={handleChange}
        required
      />
      {errors.confirm_password && (
        <p role="alert">{errors.confirm_password.message}</p>
      )}

      <label>Gender</label>
      <select {...register('gender')} onChange={handleChange} required>
        <option value="">Select gender...</option>
        <option value="Man">Man</option>
        <option value="Woman">Woman</option>
      </select>
      {errors.gender && <p role="alert">{errors.gender.message}</p>}

      <label>Accept T&C</label>
      <input
        type="checkbox"
        {...register('TandC')}
        onChange={handleChange}
        required
      />
      {errors.TandC && <p role="alert">{errors.TandC.message}</p>}

      <label>Upload picture</label>
      <input {...register('upload_picture')} onChange={handleChange} required />
      {errors.upload_picture && (
        <p role="alert">{errors.upload_picture.message}</p>
      )}

      <label>Country</label>
      <select {...register('country')} onChange={handleChange} required>
        <option value="">Select country...</option>
        <option value="Belarus">Belarus</option>
        <option value="Russia">Russia</option>
        <option value="USA">USA</option>
      </select>
      {errors.country && <p role="alert">{errors.country.message}</p>}

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form_1Comp;

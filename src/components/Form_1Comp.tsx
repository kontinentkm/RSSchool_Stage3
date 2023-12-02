//Form_1Comp.tsx
import React, { useState } from 'react';
import * as yup from 'yup';
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

interface Form_1CompProps {
  formState?: FirstFormState;
}

interface FormErrors {
  firstName?: string;
  age?: string;
  mail?: string;
  password?: string;
  confirm_password?: string;
  gender?: string;
  TandC?: string;
  upload_picture?: string;
  country?: string;
}

const Form_1Comp: React.FC<Form_1CompProps> = ({ formState = {} }) => {
  const [formData, setFormData] = useState<Partial<FirstFormState>>(formState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isChecked, setIsChecked] = useState<boolean>(!!formData.TandC);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const isChecked = (e.target as HTMLInputElement).checked;
      setIsChecked(isChecked);
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async () => {
    try {
      await schema.validate(formData, { abortEarly: false });
      console.log(formData);
    } catch (validationErrors) {
      if (validationErrors instanceof yup.ValidationError) {
        const newErrors: FormErrors = {};
        if (validationErrors.inner) {
          validationErrors.inner.forEach((error) => {
            newErrors[error.path as keyof FormErrors] = error.message;
          });
        }
        setErrors(newErrors);
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>First Name</label>
      <input
        name="firstName"
        onChange={handleChange}
        value={formData.firstName || ''}
        required
      />
      {errors.firstName && <p role="alert">{errors.firstName}</p>}

      <label>Age</label>
      <input
        name="age"
        onChange={handleChange}
        value={formData.age || ''}
        required
      />
      {errors.age && <p role="alert">{errors.age}</p>}

      <label>Email</label>
      <input
        name="mail"
        onChange={handleChange}
        value={formData.mail || ''}
        required
      />
      {errors.mail && <p role="alert">{errors.mail}</p>}

      <label>Password</label>
      <input
        name="password"
        type="password"
        onChange={handleChange}
        value={formData.password || ''}
        required
      />
      {errors.password && <p role="alert">{errors.password}</p>}

      <label>Confirm Password</label>
      <input
        name="confirm_password"
        type="password"
        onChange={handleChange}
        value={formData.confirm_password || ''}
        required
      />
      {errors.confirm_password && <p role="alert">{errors.confirm_password}</p>}

      <label>Gender</label>
      <select
        name="gender"
        onChange={handleChange}
        value={formData.gender || ''}
        required
      >
        <option value="">Select gender...</option>
        <option value="Man">Man</option>
        <option value="Woman">Woman</option>
      </select>
      {errors.gender && <p role="alert">{errors.gender}</p>}

      <label>Accept T&C</label>
      <input
        name="TandC"
        type="checkbox"
        onChange={handleChange}
        checked={isChecked}
        required
      />
      {errors.TandC && <p role="alert">{errors.TandC}</p>}

      <label>Upload picture</label>
      <input
        name="upload_picture"
        type="file"
        onChange={handleChange}
        required
      />
      {errors.upload_picture && <p role="alert">{errors.upload_picture}</p>}

      <label>Country</label>
      <select
        name="country"
        onChange={handleChange}
        value={formData.country || ''}
        required
      >
        <option value="">Select country...</option>
        <option value="Belarus">Belarus</option>
        <option value="Russia">Russia</option>
        <option value="USA">USA</option>
      </select>
      {errors.country && <p role="alert">{errors.country}</p>}

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form_1Comp;

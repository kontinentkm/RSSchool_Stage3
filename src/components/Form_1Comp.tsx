// components/Form_1Comp.tsx
import React, { useState } from 'react';
import { useAppDispatch } from '../store/store';
import { updateForm } from '../store/reducers/formReducer';

interface Inputs {
  firstName: string;
  age: number;
  mail: string;
  password: string;
  confirm_password: string;
  gender: string;
  TandC: string;
  upload_picture: string;
  country: string;
}

interface Form_2CompProps {
  formState?: Inputs;
}

const Form_2Comp: React.FC<Form_2CompProps> = ({ formState = {} }) => {
  const dispatch = useAppDispatch();

  const [firstName, setFirstName] = useState(formState.firstName || '');
  const [age, setAge] = useState(formState.age || 0);
  const [mail, setMail] = useState(formState.mail || '');
  const [password, setPassword] = useState(formState.password || '');
  const [confirmPassword, setConfirmPassword] = useState(
    formState.confirm_password || ''
  );
  const [gender, setGender] = useState(formState.gender || '');
  const [TandC, setTandC] = useState(formState.TandC || '');
  const [uploadPicture, setUploadPicture] = useState(
    formState.upload_picture || ''
  );
  const [country, setCountry] = useState(formState.country || '');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateForm({ [name]: value }));
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'age':
        setAge(parseInt(value, 10));
        break;
      case 'mail':
        setMail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirm_password':
        setConfirmPassword(value);
        break;
      case 'gender':
        setGender(value);
        break;
      case 'TandC':
        setTandC(value);
        break;
      case 'upload_picture':
        setUploadPicture(value);
        break;
      case 'country':
        setCountry(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: Inputs = {
      firstName,
      age,
      mail,
      password,
      confirm_password: confirmPassword,
      gender,
      TandC,
      upload_picture: uploadPicture,
      country,
    };
    console.log(data);
    // Сброс значений формы
    setFirstName('');
    setAge(0);
    setMail('');
    setPassword('');
    setConfirmPassword('');
    setGender('');
    setTandC('');
    setUploadPicture('');
    setCountry('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleChange}
        required
      />

      <label>Age</label>
      <input
        type="text"
        name="age"
        value={age}
        onChange={handleChange}
        required
      />

      <label>Email</label>
      <input
        type="email"
        name="mail"
        value={mail}
        onChange={handleChange}
        required
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        required
      />

      <label>Confirm Password</label>
      <input
        type="password"
        name="confirm_password"
        value={confirmPassword}
        onChange={handleChange}
        required
      />

      <label>Gender</label>
      <select name="gender" value={gender} onChange={handleChange} required>
        <option value="">Select gender...</option>
        <option value="Man">Man</option>
        <option value="Woman">Woman</option>
      </select>

      <label>Accept T&C</label>
      <input
        type="checkbox"
        name="TandC"
        checked={TandC === 'Confirmed'}
        onChange={handleChange}
        required
      />

      <label>Upload picture</label>
      <input
        type="file"
        name="upload_picture"
        value={uploadPicture}
        onChange={handleChange}
        required
      />

      <label>Country</label>
      <select name="country" value={country} onChange={handleChange} required>
        <option value="">Select country...</option>
        <option value="Belarus">Belarus</option>
        <option value="Russia">Russia</option>
        <option value="USA">USA</option>
      </select>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form_2Comp;

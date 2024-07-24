import  { useState } from 'react';
import CustomForm from '../components/Form';
import { RegisterData  } from '../data/form'; 


function UpdateUser() {
  const initialUserData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'User',
  };
    const updatedData = RegisterData.map(data => {
      if (data.name in initialUserData) {
        return { ...data, value: initialUserData[data.name] };
      }
      return data; 
    });
  return (
    <div>
      <CustomForm
        head="Update User Details"
        data={updatedData}
      />
    </div>
  );
}

export default UpdateUser;

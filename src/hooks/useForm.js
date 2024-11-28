import { useState } from 'react'

export const useForm = (initialState = {}) => {
   const [values, setValues] = useState(initialState);

   const handleInputChangeSetValue = ({target})=> {
      setValues({
         ...values, [target.name]: target.value
      });
   }
   
   const resetValues = (newFormState = initialState)=> {
      setValues(newFormState);
   }

   return [values, handleInputChangeSetValue, resetValues];
}

import { useState } from 'react';

function InputChange(initialstate) {
  const [value, setValue] = useState(initialstate);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
}

export default InputChange;

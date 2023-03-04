import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputChange from './hooks/InputChange';
import UseFileUpload from './hooks/useFileUpload';
import Container from './resusable/container/Container';
import FileUpload from './resusable/inputFields/FileUpload';
import Input from './resusable/inputFields/Input';

const AddCar = () => {
  const [name, handleNameChange] = InputChange('');
  const [type, handleTypeChange] = InputChange('');
  const [make, handleMakeChange] = InputChange('');
  const [desc, handleDescChange] = InputChange('');
  const [singleColor, handleColorChange] = InputChange('');
  const [cost, handleCostChange] = InputChange('');
  const [speed, handleSpeedChange] = InputChange('');
  const { file, preview, handleFileChange } = UseFileUpload();

  const navigate = useNavigate();

  const canBeSaved = [name, make, desc, cost, speed].every(Boolean);
  const data = {
    images: {
      [singleColor]: preview,
    },
    color: [singleColor],
    name,
    car_type: type,
    make,
    description: desc,
    cost: parseFloat(cost),
    speed: parseInt(speed, 10),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (canBeSaved) {
      fetch('http://127.0.0.1:3000/api/v1/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          alert('Car was successfully created');
          navigate('/');
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Woops! Something went wrong. Please check your inputs.');
        });
    }
  };

  return (
    <Container>
      <div className="form-container">
        <span className="flex flex-column center hero margin">
          <h1>Add Car</h1>
        </span>
        <form onSubmit={handleSubmit} className="flex flex-column">
          <Input
            label="Car Name"
            type="text"
            value={name}
            onchange={(input) => handleNameChange(input)}
          />

          <Input
            label="Car Type"
            type="text"
            value={type}
            onchange={(input) => handleTypeChange(input)}
          />

          <Input
            label="Car Make"
            type="text"
            value={make}
            onchange={(input) => handleMakeChange(input)}
          />
          <Input
            label="Car Description"
            type="text"
            value={desc}
            onchange={(input) => handleDescChange(input)}
          />
          <Input
            label="Booking Cost"
            type="text"
            value={cost}
            onchange={(input) => handleCostChange(input)}
          />
          <Input
            label="Car Speed"
            type="text"
            value={speed}
            onchange={(input) => handleSpeedChange(input)}
          />
          <Input
            label="Car Color"
            type="text"
            value={singleColor}
            onchange={(input) => handleColorChange(input)}
          />
          <FileUpload
            type="upload"
            file={file}
            preview={preview}
            handleFileChange={(input) => handleFileChange(input)}
          />

          <button type="submit">Add Bike</button>
        </form>
      </div>
    </Container>
  );
};

export default AddCar;

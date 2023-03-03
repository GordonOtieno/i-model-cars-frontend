// import React from 'react';
// import { useDeleteCarMutation, useGetCarsQuery } from '../api/apiSlice';

import RemoveCar from './deleteCar/RemoveCar';

const DeleteCar = () =>
//   const [deleteCar] = useDeleteCarMutation();

//   const {
//     data: Cars,
//     isLoading,
//     isSuccess,
//     isError,
//     isFetching,
//     error,
//   } = useGetCarsQuery();
  (
    <div>
      {/* {isLoading || (isFetching && <div>Loading</div>)}
      {isSuccess && <RemoveCar data={Cars} onRequest={deleteCar} />} */}
      <RemoveCar />
    </div>
  );
export default DeleteCar;

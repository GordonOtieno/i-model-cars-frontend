export default function NewReservationForm() {
  return (
    <div>
      <h1>New Reservation Form</h1>
      <form>
        <input type="number" name="car_id" placeholder="car id" />
        <input type="number" name="user_id" placeholder="car id" />
        <input type="text" name="date" placeholder="car id" />
        <input type="text" name="city" placeholder="car id" />
      </form>
    </div>
  );
}

import PropTypes from 'prop-types';

function Input({
  label, type, value, onchange,
}) {
  return (
    <div className="flex flex-column">
      <label htmlFor={label}>{label}</label>
      <input type={type} onChange={onchange} value={value} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
};
export default Input;

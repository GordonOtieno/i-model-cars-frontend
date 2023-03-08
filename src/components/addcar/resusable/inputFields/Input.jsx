import PropTypes from 'prop-types';

const Input = ({
  label, type, value, onchange,
}) => (
  <div className="flex flex-column input-div">
    <label htmlFor={label}>{label}</label>
    <input type={type} onChange={onchange} value={value} required />
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
};
export default Input;

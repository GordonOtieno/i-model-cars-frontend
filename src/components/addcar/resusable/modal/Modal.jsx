import PropTypes from 'prop-types';
import styles from './Modal.module.css';

import error from '../../../../assets/error.jpg';
import success from '../../../../assets/success.jpg';

function Modal({ message, onClose, type }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClose();
    }
  };
  return (
    <>
      <div onClick={onClose} className="backdrop flex flex-column" role="button" tabIndex={0} onKeyDown={handleKeyDown}>close</div>
      <div className={`${styles.modalContainer} flex flex-column gap`}>
        <div className={`${styles.modalMessage} grid gap`}>
          {type === 'success' ? (
            <img src={success} alt="success" />
          ) : (
            <img src={error} alt="error" />
          )}
          <p>{message}</p>
        </div>
        <button type="button" onClick={onClose}>Close</button>
      </div>
    </>
  );
}
Modal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['success', 'error']).isRequired,
};

export default Modal;

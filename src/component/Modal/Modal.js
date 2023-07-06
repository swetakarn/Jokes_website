import React from 'react';
import "./Modals.css";
import images from "../../img/images.png"

const Modals = ({ isOpen, onClose, text }) => {
  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal show d-block modalBox">
      <div className="modal-dialog custom-dialog">
        <div className="modal-content custom-content">
          <div className="modal-body">
          <div className='d-flex justify-content-end'>
           
           <img onClick={handleClose} className='close-img' src={images} alt="close-icon"/>
           </div>
          <h2 className="mb-4 custom-text">Animal</h2>
       
           <div className='jokes-section'>
            <p>"Chuck Norris once kicked a horse in the chin. Its decendants are known today as Giraffes."</p>

            <button className=" mr-2 custom-button">
            Next Joke
              </button>
           </div>
            <div className="d-flex justify-content-center">
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;

import React, { useState } from 'react';
import styles from './Xmodel.module.css'; // Import the CSS module

function Model() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClose = () => {
        setIsModalOpen(false);
    };

    const handleOpen = () => {
        setIsModalOpen(true);
    };

    const validateForm = (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const dob = document.getElementById('dob').value;

        // Email validation: Check if it's a simple valid email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email. Please check your email address.');
            return;
        }

        // Phone validation: Check if it is a 10-digit number
        if (!/^\d{10}$/.test(phone)) {
            alert('Invalid phone number. Please enter a 10-digit phone number.');
            return;
        }

        // Date of Birth validation: Check if it's a past date
        const today = new Date();
        const inputDate = new Date(dob);
        if (inputDate >= today) {
            alert('Invalid date of birth. Please enter a valid date.');
            return;
        }

        // Form is valid, you can handle the submission logic here
        alert('Form submitted successfully!');
        handleClose(); // Close the modal on successful form submission
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>User Details Model</h1>
            <button className={styles.openFormButton} onClick={handleOpen}>
                Open Form
            </button>
            <Modal isOpen={isModalOpen} onClose={handleClose}>
                <h2>Fill Your Details</h2>
                <form onSubmit={validateForm} className={styles.form}>
                    <div className={styles.formItem}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" />
                    </div>

                    <div className={styles.formItem}>
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div className={styles.formItem}>
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="text" name="phone" id="phone" />
                    </div>

                    <div className={styles.formItem}>
                        <label htmlFor="dob">Date of Birth:</label>
                        <input type="date" name="dob" id="dob" />
                    </div>

                    <button type="submit" className={styles['submit-button']}>
                        Submit
                    </button>
                </form>
            </Modal>
        </div>
    );
}

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            className={styles.modal}
        >
            <div
                className={styles['modal-content']}
                onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside content
            >
                {children}
            </div>
        </div>
    );
};

export default Model;

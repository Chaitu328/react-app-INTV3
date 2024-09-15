import React, { useState } from 'react';
import styles from './Xmodel.module.css';

function Model() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Open form modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Close form modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Email and phone validation
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

        // Date of Birth validation: Check if it's not empty (or you can add custom logic)
        if (!dob) {
            alert('Invalid Date of Birth. Please enter a valid date.');
            return;
        }

        // Form is valid, you can handle the submission logic here
        alert('Form submitted successfully!');
        closeModal();
    };

    return (
        <div>
            {/* OpenForm Section */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1>User Details Model</h1>
                <button className={styles.openFormButton} onClick={openModal}>Open Form</button>
            </div>

            {/* Modal Section */}
            {isModalOpen && (
                <div className={styles.modal} onClick={closeModal}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside content
                    >
                        <h2>Fill Your Details</h2>
                        <form onSubmit={validateForm} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
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

                            <button type="submit" className={styles.submitButton}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Model;

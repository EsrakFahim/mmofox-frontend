import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

// Set the app element for accessibility
Modal.setAppElement('body');

// Define fade variants with no vertical movement
const fadeVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 },
};

interface AuthModalsProps {
      isOpen: boolean;
      onClose: () => void;
}

const AuthModals = ({ isOpen, onClose }: AuthModalsProps) => {
      const [modalType, setModalType] = useState('login'); // change to 'initial' to show the initial modal after testing
      const [email, setEmail] = useState('');
      const { isModalOpen } = useSelector((state: any) => state.modal);

      console.log('AuthModals isOpen:', isOpen);
      console.log('AuthModals isModalOpen:', isModalOpen);

      // Disable mouse and keyboard scroll when modal is open
      useEffect(() => {
            interface KeyboardEventWithKey extends KeyboardEvent {
                  key: string;
            }

            const handleKeyDown = (e: KeyboardEventWithKey): void => {
                  // Define keys that trigger scrolling
                  const scrollKeys: string[] = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
                  if (scrollKeys.includes(e.key)) {
                        e.preventDefault();
                  }
            };

            if (isModalOpen) {
                  // Disable mouse scroll
                  document.body.style.overflow = 'hidden';
                  // Disable keyboard scrolling
                  window.addEventListener('keydown', handleKeyDown, { passive: false });
            } else {
                  // Re-enable scrolling
                  document.body.style.overflow = '';
                  window.removeEventListener('keydown', handleKeyDown);
            }

            // Cleanup on unmount or when isModalOpen changes
            return () => {
                  document.body.style.overflow = '';
                  window.removeEventListener('keydown', handleKeyDown);
            };
      }, [isModalOpen]);

      // Close modal and reset modalType
      const closeModal = () => {
            setModalType('login'); // change to 'initial' to show the initial modal after testing
            onClose();
      };

      return (
            <Modal
                  isOpen={isOpen}
                  onRequestClose={closeModal}
                  contentLabel="Authentication Modal"
                  overlayClassName="fixed z-[9999999] inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center"
                  className="outline-none"
            >
                  <AnimatePresence mode="wait">


                        {modalType === 'login' && (
                              <Login fadeVariants={fadeVariants} setModalType={setModalType} />
                        )}

                        {modalType === 'signup' && (
                              <SignUp fadeVariants={fadeVariants} setModalType={setModalType} />
                        )}

                        {/*
                        {modalType === 'getUserMail' && (
                              <GetUserAccountMail fadeVariants={fadeVariants} setModalType={setModalType} setEmail={setEmail} />
                        )}

                        {modalType === 'forgetPassword' && (
                              <ForgetPassword fadeVariants={fadeVariants} setModalType={setModalType} email={email} setEmail={setEmail} />
                        )}

                        {modalType === 'setNewPassword' && (
                              <SetNewPassword fadeVariants={fadeVariants} setModalType={setModalType} email={email} />
                        )}
                         */}
                  </AnimatePresence>
            </Modal>
      );
};

AuthModals.propTypes = {
      isOpen: PropTypes.bool.isRequired,
      onClose: PropTypes.func.isRequired,
};

export default AuthModals;

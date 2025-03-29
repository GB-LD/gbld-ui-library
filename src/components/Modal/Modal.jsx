import React, { useEffect, useRef } from 'react';

const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = 'md',
  position = 'center',
  showCloseButton = true,
  closeOnOutsideClick = true,
  closeOnEsc = true,
  backgroundColor = 'bg-white dark:bg-gray-800',
}) => {
  const modalRef = useRef(null);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (closeOnEsc && event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, closeOnEsc]);

  // Handle outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        closeOnOutsideClick &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose, closeOnOutsideClick]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full mx-4',
  };

  const positionClasses = {
    center: 'items-center',
    top: 'items-start pt-16',
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center overflow-y-auto bg-black/50 backdrop-blur-sm transition-opacity">
      <div className={`flex w-full ${positionClasses[position]}`}>
        <div
          ref={modalRef}
          className={`relative m-auto ${sizeClasses[size]} w-full rounded-lg ${backgroundColor} p-4 shadow-xl transition-all sm:p-6`}
          role="dialog"
          aria-modal="true"
        >
          {showCloseButton && (
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200"
              aria-label="Close modal"
            >
                X
            </button>
          )}

          {(title || description) && (
            <div className={`mb-5 ${showCloseButton ? 'pr-8' : ''}`}>
              {title && (
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
              )}
              {description && (
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {description}
                </p>
              )}
            </div>
          )}

          <div className="modal-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
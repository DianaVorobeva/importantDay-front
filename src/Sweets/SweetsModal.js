import React from 'react';
import ReactDom from 'react-dom';
import close from '../assets/close.png';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50px',
  left: '50px',
  right: '50px',
  bottom: '50px',
  backgroundColor: '#FFF',
  padding: '50px',
  radius: '40px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function SweetsModal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose}  className='closeButton'><img src={close} alt="close"/></button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}
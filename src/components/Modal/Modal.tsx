import React from 'react';
import './_modal.scss'

export type ModalProps = {
	active: boolean;
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
	children?: any;
};

const Modal: React.FC<ModalProps> = ({ active, setActive, children }) => {
	return (
		<div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
			<div className={active ? 'modal__content' : 'modal__content.active'} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default Modal
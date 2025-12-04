import { Cross, Plus, X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}
export const Modal = ({isOpen, onClose, children, title}: ModalProps) => {
    if(!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__header">
                    <label className="modal__title">Usuarios</label>
                    <button className="modal__close" onClick={onClose}>
                        <X />
                    </button>
                </div>
                <div className="modal__body">
                    {children}
                </div>
            </div>

        </div>
    )

}
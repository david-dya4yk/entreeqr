import { FC, ReactNode } from "react";
import { DialogContent } from "@reach/dialog";

import * as S from "./Modal.styled";

import "@reach/dialog/styles.css";

interface ModalProps {
  open: boolean;
  children?: ReactNode;
  onClose: () => void;
  disableFocusLock?: boolean;
  className?: string;
}

const Modal: FC<ModalProps> = ({
  open,
  onClose,
  children,
  disableFocusLock = false,
  className,
}) => (
  <S.Overlay
    isOpen={open}
    style={{ zIndex: 999 }}
    onDismiss={onClose}
    aria-label="modal"
    dangerouslyBypassFocusLock={disableFocusLock}
  >
    <DialogContent className={className}>{children}</DialogContent>
  </S.Overlay>
);

export default Modal;

import { Box, Modal} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    maxWidth: 450,
    bgcolor: 'background.paper',
    border: '1px solid #b5b1b1',
    borderRadius: "15px",
    boxShadow: 24,
    outline: "none",
    p: 4,
};

interface ModalProps {
    open: boolean
    handleClose: () => void,
    children: React.ReactNode
}
export default function PopOverDelete({open, handleClose, children}: ModalProps) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="focus:outline-none focus:ring-transparent"
            >
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
    )
}

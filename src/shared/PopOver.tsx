import { Box, Modal} from "@mui/material";
import { IoClose } from "react-icons/io5";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #b5b1b1',
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
};

interface ModalProps {
    open: boolean
    handleClose: () => void
}
export default function PopOver({open, handleClose}: ModalProps) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <button className="" onClick={handleClose}>
                    <IoClose style = {{fontSize: "25px"}}  />
                </button>
            </Box>
        </Modal>
    )
}

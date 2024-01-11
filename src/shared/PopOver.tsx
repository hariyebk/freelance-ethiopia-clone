import { Box, Modal} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    maxWidth: 500,
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
            className="focus:border-none"
            >
            <Box sx={style}>
                <form className="w-full px-5 py-3">
                    <label className="mx-auto flex justify-center text-lg text-stone-600 text-center font-palanquin font-bold"> Add New Skill </label>
                    <input type="search" className="max-lg:w-[280px] w-[350px] ml-4 mt-7 border border-gray-500 focus:border-none px-4 py-3 rounded" />
                    <div className="mt-14 flex items-center justify-center gap-8">
                        <button className="px-8 py-2 rounded-md bg-stone-800 text-slate-100 font-palanquin" onClick={handleClose}> cancel </button>
                        <button className="px-8 py-2 rounded-md bg-gradient-to-r from-primary to-secondary text-slate-100 font-palanquin"> Add </button>
                    </div>
                </form>
            </Box>
        </Modal>
    )
}

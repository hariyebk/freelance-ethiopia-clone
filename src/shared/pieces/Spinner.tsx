import { Box, CircularProgress } from "@mui/material";


export default function Spinner() {
    return (
        <div className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
            <Box sx={{ display: 'flex' }}>
                <span className="h-full">
                    <CircularProgress/>
                </span>
            </Box>
        </div>
    </div>
    )
}

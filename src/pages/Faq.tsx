import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MdExpandMore } from "react-icons/md";
import { faq } from '../constants';

export default function Faq() {
    return (
        <div className="min-h-screen flex flex-col mt-24 mb-10 max-lg:mx-5 max-lg:text-justify mx-56">
            <h1 className="max-lg:text-4xl text-6xl text-secondary font-palanquin mx-auto"> FAQ's </h1>
            <div className='mt-10 w-full'>
                {
                    faq.map((q) => {
                        return (
                        <Accordion disableGutters elevation={0} className='border shadow-md py-2 px-3'>
                            <AccordionSummary
                            expandIcon={<MdExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography className='mb-3 max-lg:text-base text-black font-medium font-palanquin hover:text-primary'> {q.question} </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography className='text-sm text-stone-600 mx-5'>
                                {q.answer && <p className='mx-4 mb-3'> {q.answer} </p>}
                                {q.list && (
                                    <ul  className='mx-10 list-disc space-y-2'>
                                        {q.list.map((point: string, index: number) => {
                                            return (
                                                <li key={index}> {point} </li>
                                            )
                                        })}
                                    </ul>
                                )}
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        )
                    })
                }
            </div>
        </div>
    )
}

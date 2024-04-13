import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MdExpandMore } from "react-icons/md";
import { faq } from '../constants';
import { useEffect } from 'react';

export default function Faq(){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="mb-36 flex flex-col mt-36 max-lg:text-justify max-lg:mx-3 mx-56">
            <h1 className="max-lg:text-4xl text-6xl text-secondary font-palanquin mx-auto"> FAQ's </h1>
            <div className='mt-10 md:container'>
                {
                    faq.map((q) => {
                        return (
                            <div key={q.question}>
                                <Accordion disableGutters elevation={0} className='border shadow-md py-2 px-3'>
                                    <AccordionSummary
                                    expandIcon={<MdExpandMore />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                    <Typography className='mb-3 max-sm:text-xs sm:text-sm text-black font-medium font-palanquin hover:text-primary'> {q.question} </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography className='mx-5'>
                                        {q.answer && <span className='mx-4 mb-3 text-sm text-stone-600'> {q.answer} </span>}
                                        {q.list && (
                                            <span  className='mx-10 list-disc space-y-2 text-sm text-stone-600'>
                                                {q.list.map((point: string, index: number) => {
                                                    return (
                                                        <li key={index}> {point} </li>
                                                    )
                                                })}
                                            </span>
                                        )}
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

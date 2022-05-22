import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
const Footer = () => {
    const [timer, setTimer] = useState(new Date());
    const tick = () => {
        setTimer(new Date());
    };
    useEffect(() => {
        const timerID = setInterval(() => {
            tick();
        }, 1000);
        return () => {
            clearInterval(timerID);
        };
    }, [timer]);
    return (
        <>
            <Box
                sx={{
                    height: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: '#20232a',
                }}
            >
                <Typography color="#fff" align="center">
                    Copyright &copy; {timer.getFullYear()} 想吃點，什麼
                </Typography>
            </Box>
        </>
    );
};
export default Footer;

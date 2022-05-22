import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import { ArrowUpward } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import Footer from './components/Footer';
const App = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    return (
        <>
            <Grid
                container
                direction='column'
                sx={{
                    minHeight: '100vh'
                }}
            >
                <Grid item >
                    <Header />
                </Grid>
                <Grid item>
                </Grid>
                <Grid item sx={{ mt: 'auto' }}>
                    <Footer />
                </Grid>
                <ScrollTop onClick={scrollToTop}>
                    <ArrowUpwardIcon />
                </ScrollTop>
            </Grid>
        </>
    );
}
const ScrollTop = styled(IconButton)`
    position: fixed !important;
    right: 20px;
    bottom: 20px;
    width: 60px;
    height: 60px;
    color: #000 !important;
    cursor: pointer;
    display: flex;
    box-shadow: 3px 3px 5px #333;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #f44336 !important;
`;
const ArrowUpwardIcon = styled(ArrowUpward)`
     font-size: 40px !important;
`
export default App;

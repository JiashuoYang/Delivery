import { useState } from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
const Header = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <Box sx={{ height: 56 }}>
                <AppBar sx={{ bgcolor: '#ff9800' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            sx={{ mr: 2 }}
                            onClick={handleOpen}
                        >
                            <Menu />
                        </IconButton>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            想吃點，什麼
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};
export default Header;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import usuarioAvatar from '../img/avatar.jpg'; // Importa la imagen del avatar del usuario

function BarraAcceso() {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#741b6b' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" sx={{ fontFamily: 'monospace', fontWeight: 700, color: 'white' }}>
                            SISCREDIG UPTAP
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body1" sx={{ color: 'white', marginRight: 5, fontWeight:700}}>
                            Bienvenido
                        </Typography>
                        <Avatar alt="Usuario" src={usuarioAvatar} sx={{ width: 60, height: 60 }} />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default BarraAcceso;

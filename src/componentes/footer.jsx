import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Facebook, Twitter, Mail } from '@mui/icons-material';

function Footer() {
    return (
        <footer className="footer" style={{ backgroundColor: '#060a0f', color: 'white', padding: '30px 0', marginTop: 'auto' }}>
            <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="col-sm-8 py-4">
                    <Typography variant="h6" gutterBottom>Contacto</Typography>
                    <Typography variant="body1" gutterBottom>
                        Ubicación:<br />
                        Carretera Tapachula - Puerto Madero KM. 24 + 300. Tapachula, Chiapas. C.P 30830.
                        <br /><br />
                        Teléfonos:<br />
                        Conmutador: 962 689 0090 Ext. 1002 - 1010
                    </Typography>
                </div>
                <div className="col-sm-4 py-4">
                    <Typography variant="h6" gutterBottom>Redes sociales</Typography>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="https://www.facebook.com/uptapachula.autorizado.1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
                                <Facebook style={{ marginRight: '10px' }} /> Facebook
                            </a>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="https://twitter.com/UPTapachula" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
                                <Twitter style={{ marginRight: '10px' }} /> Twitter
                            </a>
                        </li>
                        <li>
                            <a href="mailto:contacto@uptapachula.edu.mx" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
                                <Mail style={{ marginRight: '10px' }} /> contacto@uptapachula.edu.mx
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    );
}
 export default Footer
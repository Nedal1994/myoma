import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import '../components/css/Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="links">
                <h3 className="logo">Myoma</h3>
            </div>

            <Paper elevation={3} id='paper'>
                <Container maxWidth="md">
                    <Toolbar>
                        <Typography
                            variant="body1"
                            color="inherit"
                            style={{ margin: "auto" }}
                        >
                            &copy; Myoma, Inc. All rights reserved.
                        </Typography>
                    </Toolbar>
                </Container>
            </Paper>
        </footer>
    );
}
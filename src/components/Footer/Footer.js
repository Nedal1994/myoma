import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import '../Footer/Footer.css'

export default function Footer() {
    return (


        <Paper elevation={3} id="paper">
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


    );
}
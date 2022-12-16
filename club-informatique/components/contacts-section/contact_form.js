import Image from 'next/image';
import img from "../../assets/placeholder.gif";
import styles from "./contact_section.module.css";
import { IconButton, Collapse, Alert, Button, Grid, TextField, ThemeProvider, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function ContactForm() {
    const theme = useTheme();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isSent, setIsSent] = useState(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    function handleChangeName(e) { setName(e.target.value); }
    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }
    function handleChangeMessage(e) { setMessage(e.target.value); }

    function handleContact() {
        if (!validateEmail(email)) {
            setEmailError("Format entré invalide : aa@aa.aa");
            return;
        }

        setEmailError("");
        setEmail("");
        setName("");
        setMessage("");
        setIsSent(true);
    }

    return (
        <ThemeProvider theme={theme}>
            <Collapse in={isSent} className={styles.items}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setIsSent(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    Message envoyé!
                </Alert>
            </Collapse>
            <div id={styles.contact_form}>
                <Grid container direction="column" alignContent={"center"}>
                    <Grid item xs={12}>
                        <h2>Contactez nous!</h2>
                    </Grid>
                    <Grid item xs={12} className={styles.items}>
                        <TextField variant="standard" color="primary" InputLabelProps={{ className: styles.text_field }} id="name" label="Votre nom" value={name} onChange={handleChangeName}></TextField>
                    </Grid>
                    <Grid item xs={12} className={styles.items}>
                        <TextField
                            error={!emailError || emailError === "" ? false : true} helperText={emailError} variant="standard" color={"primary"} InputLabelProps={{ className: styles.text_field }} id="email" label="Votre email" value={email} onChange={handleChangeEmail}></TextField>
                    </Grid>
                    <Grid item xs={12} className={styles.items}>
                        <TextField variant="standard" color="primary" InputLabelProps={{ className: styles.text_field }} id="message" label="Votre message" value={message} onChange={handleChangeMessage}></TextField>
                    </Grid>
                    <Grid item xs={12} className={styles.items}>
                        <Button variant="outlined" color="primary" onClick={handleContact}>Soummettre</Button>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}
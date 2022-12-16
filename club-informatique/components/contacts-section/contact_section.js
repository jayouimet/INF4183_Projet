import { Grid } from '@mui/material';
import Image from 'next/image';
import img from "../../assets/uqo_logo_w.png";
import ContactForm from './contact_form';
import MembersList from './members_list';
import styles from "./contact_section.module.css";

export default function ContactSection() {
    return (
        <>
            <Grid container id={styles.contact_section}>
                <Grid item xs={4}>
                    <h1>Membres</h1>
                    <MembersList />
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={5}>
                    <ContactForm />
                </Grid>
            </Grid>
        </>
    );
}
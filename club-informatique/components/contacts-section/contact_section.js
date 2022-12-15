import { Grid } from '@mui/material';
import Image from 'next/image';
import img from "../../assets/uqo_logo_w.png";
import ContactForm from './contact_form';
import MembersList from './members_list';

export default function ContactSection() {
    return (
        <>
            <Grid container>
                <Grid item xs={6}>
                    <MembersList />
                </Grid>
                <Grid item xs={6}>
                    <ContactForm />
                </Grid>
            </Grid>
        </>
    );
}
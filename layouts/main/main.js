import Head from "next/head";
import {useEffect} from "react";
import Navbar from "./partials/navbar";
import Footer from "./partials/footer";

export default function MainLayout(props) {

    useEffect( () => {
        const {bodyClass} = props
        document.querySelector("body").classList.add(bodyClass != undefined ? bodyClass : 'antialiased')
    } );

    return (
        <>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="/images/favicon.png" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css" />
            </Head>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import { ThemeProvider } from '@mui/private-theming';
import { createTheme } from '@mui/material';
import { useState } from 'react';
import * as React from "react";
import '../styles/globals.css'

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const createApolloClient = (authToken) => {
    return new ApolloClient({
        link: new HttpLink({
            uri: 'http://localhost:8080/v1/graphql',

            /*headers: {
              Authorization: `Bearer ${authToken}`
            }*/
        }),
        cache: new InMemoryCache(),
    });
};

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF"
        }
    }
})

function MyApp({ Component, pageProps }) {
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );
    // Anonymous, no token required
    const [client] = useState(createApolloClient());
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {
                    theme.palette.mode === "light" ?
                        <style jsx global>
                            {
                                `
                        body{
                            background-color: white;
                            color: rgb(21, 96, 124);
                        }
                        `
                            }
                        </style>
                        :
                        <style jsx global>
                            {
                                `
                        body{
                            background-color: rgb(34, 34, 34);
                            color: white;
                        }
                        `
                            }
                        </style>

                }
                <ApolloProvider client={client}>
                    <Component {...pageProps} />
                </ApolloProvider>
            </ThemeProvider >
        </ColorModeContext.Provider>
    );
}

export default MyApp

import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        custom: {
            purple: string;
        };
    }
    interface PaletteOptions {
        custom: {
            purple: string;
        };
    }
}

const colors = {
    purple: '#3C41E9',
    green: '#12A779',
    orange: '#FFA40A',
    lightPurple: '#913AF6',
    blue: '#427DDC',
    red: '#9E2328',
};

const theme = createTheme({
    palette: {
        error: {
            main: colors.red,
        },
        info: {
            main: colors.blue,
        },
        background: {
            default: '#f5f5f5',
        },
        text: {
            primary: '#464B55',
            secondary: '#202223',
            disabled: '#AFB4BB',
        },
        divider: '#e0e0e0',
        custom: {
            purple: colors.purple,
        },
    },
    typography: {
        fontFamily: '"Inter", sans-serif',
        fontSize: 14,
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 600,
        },
        h3: {
            fontWeight: 500,
        },
        body1: {
            fontWeight: 400,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    textTransform: 'none',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    color: '#464B55',
                    fontWeight: 600,
                    borderRadius: '20px',
                    border: 'none',
                },
                icon: {
                    marginLeft: 10,
                },
                colorDefault: {
                    backgroundColor: '#DDE4F7',
                    '& .MuiChip-icon path': { fill: '#4B80C2' },
                },
                colorPrimary: {
                    backgroundColor: '#DDE4F7',
                    '& .MuiChip-icon path': { fill: '#4B80C2' },
                },
                colorSecondary: {
                    backgroundColor: '#FFFEFF',
                    '& .MuiChip-icon path': { fill: '#9147DA' },
                },
                colorSuccess: {
                    backgroundColor: '#B5EBD8',
                    '& .MuiChip-icon path': { fill: '#1CA470' },
                },
                colorWarning: {
                    backgroundColor: '#FAF1E1',
                    '& .MuiChip-icon path': { fill: '#F6AA14' },
                },
                colorError: {
                    backgroundColor: '#F5D7DB',
                    '& .MuiChip-icon path': { fill: '#F5D7DB' },
                },
            },
        },
    },
});

export default theme;

const palette = {
    blue:   '#0000ff',
    red1:   '#ffd5e5',
    red2:   '#a37284',
    green1: '#a0ffe6',
    green2: '#4e7c70',
    gray1:  '#e3e3e3',
    gray2:  '#262626',
}

export default {
    main: palette.blue,
    support: {
        bg: palette.gray1,
        text: palette.gray2,
    }, 
    success: {
        bg: palette.green1,
        text: palette.green2,
    },
    danger: {
        bg: palette.red1,
        text: palette.red2,
    },
    ...palette,
}

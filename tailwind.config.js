/** @type {import('tailwindcss').Config} */
function colorWithOpacity(varName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${varName}), ${opacityValue})`;
        }
        return `rgb(var(${varName}))`;
    };
}
function generateValues() {
    let values = {};
    for (let i = 1; i <= 1000; i++) {
        values[`${i}px`] = `${i}px`;
    }
    for (let i = 1; i <= 100; i++) {
        values[`${i}/100`] = `${i}%`;
        values[`${i}/100vh`] = `${i}vh`;
        values[`${i}/100vw`] = `${i}vw`;
    }
    return values;
}
function generateSpacingValues() {
    let spacingValues = {};

    for (let size = 0; size <= 800; size++) {
        spacingValues[`${size}px`] = `${size}px`;
    }
    for (let i = 1; i <= 100; i++) {
        spacingValues[`${i}/100`] = `${i}%`;
    }

    return spacingValues;
}
function generateLineHeightValues() {
    let lineHeightValues = {
        'extra-loose': '2.5',
        1.0: '1.0',
    };

    for (let size = 1.11; size <= 3.99; size += 0.01) {
        let roundedSize = Math.round(size * 100) / 100;
        let sizeString = roundedSize.toFixed(2);
        lineHeightValues[sizeString] = sizeString;
    }

    return lineHeightValues;
}
function generateBorderRadiusValues() {
    let borderRadiusValues = {
        inherit: 'inherit',
        '4xl': '2rem',
    };

    for (let size = 0; size <= 800; size++) {
        borderRadiusValues[`${size}px`] = `${size}px`;
    }

    return borderRadiusValues;
}
function generateScreenBreakpoints() {
    return {
        xs: { min: '400px' },
        xl: { min: '1300px' },
        '2xl': { min: '1500px' },
        'max-xs': { max: '401px' },
        'max-sm': { max: '551px' },
        'max-md': { max: '769px' },
        'max-lg': { max: '1025px' },
        'max-xl': { max: '1300px' },
        'max-2xl': { max: '1500px' },
        'mm-xs-sm': { min: '400px', max: '550px' },
        'mm-xs-md': { min: '400px', max: '769px' },
        'mm-xs-md': { min: '400px', max: '1025px' },
        'mm-sm-md': { min: '550px', max: '768px' },
        'mm-sm-lg': { min: '550px', max: '1024px' },
        'mm-md-lg': { min: '769px', max: '1025px' },
        'mm-lg-xl': { min: '1024px', max: '1300px' },
        'mm-md-xl': { min: '768px', max: '1300px' },
        'mm-sm-xl': { min: '550px', max: '1300px' },
        'mm-xs-xl': { min: '400px', max: '1300px' },
        'mm-xl-2xl': { min: '1300px', max: '1500px' },
        'mm-lg-2xl': { min: '1024px', max: '1500px' },
        'mm-md-2xl': { min: '768px', max: '1500px' },
        'mm-sm-2xl': { min: '550px', max: '1500px' },
        'mm-xs-2xl': { min: '400px', max: '1500px' },
    };
}
function generateFlexGrow() {
    let flexGrow = {};
    for (let i = 2; i <= 9; i++) {
        flexGrow[i] = i;
    }
    return flexGrow;
}
function generateBorderWidth() {
    let borderWidth = {
        DEFAULT: '1px',
        half: '0.5px',
        0: '0',
    };
    for (let i = 2; i <= 20; i++) {
        borderWidth[i] = `${i}px`;
    }
    return borderWidth;
}
function generateZIndex() {
    let zIndex = {};
    for (let i = 1; i <= 100; i++) {
        zIndex[i] = `${i}`;
    }
    return zIndex;
}
function generateTransitionProperties() {
    return {
        none: 'none',
        all: 'all',
        default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
        height: 'height',
        width: 'width',
        spacing: 'margin, padding',
        border: 'border, border-color, border-width',
        borderRadius: 'border-radius',
        backgroundImage: 'background-image',
        backgroundColor: 'background-color',
        fontSize: 'font-size',
        lineHeight: 'line-height',
        textColor: 'color',
        zIndex: 'z-index',
        scale: 'scale',
        rotate: 'rotate',
        translate: 'translate',
        skew: 'skew',
        flex: 'flex',
        order: 'order',
        gridTemplateColumns: 'grid-template-columns',
        gridColumn: 'grid-column-start, grid-column-end',
        gridColumnStart: 'grid-column-start',
        gridColumnEnd: 'grid-column-end',
        gridTemplateRows: 'grid-template-rows',
        gridRow: 'grid-row-start, grid-row-end',
        gridRowStart: 'grid-row-start',
        gridRowEnd: 'grid-row-end',
    };
}
function generateOpacity() {
    let opacities = {};
    for (let i = 1; i <= 100; i++) {
        opacities[i] = `${i * 0.01}`;
    }
    return opacities;
}
function generateTracking() {
    let spacings = {};
    for (let i = 1; i <= 40; i++) {
        spacings[`${i}px`] = `${i}px`;
    }
    return spacings;
}
function generateAspectRatios() {
    let ratios = {};
    for (let i = 1.1; i < 20; i += 0.1) {
        const ratio = i.toFixed(1);
        ratios[`${ratio}/1`] = ratio;
    }
    return ratios;
}
module.exports = {
    content: ['./src/*.{html,js,css}', './src/**/**/*.{html,js,css}'],
    theme: {
        container: {
            center: true,
            padding: '1.25rem',
            screens: {
                xs: '100%',
                sm: '550px',
                md: '768px',
                lg: '1024px',
                xl: '1246px',
                '2xl': '1500px',
            },
        },
        extend: {
            colors: {
                primary: {
                    100: colorWithOpacity('--primary-100'),
                    200: colorWithOpacity('--primary-200'),
                },
                dark: {
                    100: colorWithOpacity('--dark-100'),
                    200: colorWithOpacity('--dark-200'),
                },
                light: {
                    100: colorWithOpacity('--light-100'),
                    200: colorWithOpacity('--light-200'),
                },
                accent: {
                    100: colorWithOpacity('--accent-100'),
                },
            },
            height: generateValues(),
            maxHeight: generateValues(),
            minHeight: generateValues(),
            width: generateValues(),
            maxWidth: generateValues(),
            minWidth: generateValues(),
            fontSize: generateSpacingValues(),
            padding: generateSpacingValues(),
            margin: generateSpacingValues(),
            spacing: generateSpacingValues(),
            borderRadius: generateBorderRadiusValues(),
            flexGrow: generateFlexGrow(),
            screens: generateScreenBreakpoints(),
            lineHeight: generateLineHeightValues(),
            inset: generateSpacingValues(),
            textOpacity: generateOpacity(),
            letterSpacing: generateTracking(),
            aspectRatio: generateAspectRatios(),
            outlineOffset: generateValues(),
            fontFamily: {
                body: 'var(--body-font)',
                primary: 'var(--font-primary)',
            },
            transitionProperty: generateTransitionProperties(),
            animation: {
                'bounse-x': 'bounseX 1s infinite',
                spin: 'spin 2s linear infinite',
                pingCustom: 'pingCustom 1.5s infinite',
            },
            keyframes: {
                bounseX: {
                    '0%': { transform: 'translateX(0rem)' },
                    '50%': { transform: 'translateX(0.5rem)' },
                    '100%': { transform: 'translateX(0rem)' },
                },
                pingCustom: {
                    '0%': { transform: 'scale(0.8)', visibility: 'hidden' },
                    '50%': { transform: 'scale(1)', visibility: 'visible' },
                    '100%': { transform: 'scale(0.8)', visibility: 'hidden' },
                },
            },
            borderWidth: generateBorderWidth(),
            zIndex: generateZIndex(),
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 100 },
                },
                fadeOut: {
                    '0%': { opacity: 100 },
                    '100%': { opacity: 0 },
                },
            },
            animation: {
                fadeIn: 'fadeIn 0.2s ease-in-out forwards',
            },
        },
    },
    variants: {
        extend: { textColor: ['group-checked'] },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        function ({ addUtilities }) {
            const newUtilities = {
                '.wh-full': {
                    width: '100%',
                    height: '100%',
                },
            };

            for (let i = 1; i <= 1000; i++) {
                newUtilities[`.wh-${i}px`] = {
                    width: `${i}px`,
                    height: `${i}px`,
                };
            }

            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
};

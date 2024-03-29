module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      60: 60,
      70: 70,
      80: 80,
      90: 90,
      100: 100,
      auto: 'auto',
    },
    extend: {
      transitionDuration: {
        0: '0ms',
        600: '600ms',
        400: '400ms',
        200: '200ms',
      },
      gridTemplateColumns: {
        1: 'repeat(1, auto)',
        2: 'repeat(2, auto)',
        3: 'repeat(3, auto)',
        4: 'repeat(4, auto)',
        5: 'repeat(5, auto)',
      },

      spacing: {
        13: '3.375rem', // 50px
      },

      animation: {
        animaTop: 'animaTop 0.4s ease-in-out',
        animaRigth: 'animaRigth 0.4s ease-in-out',
        animaShow: 'animaShow 0.3s ease-in-out',
        animaHidden: 'animaHidden 0.3s ease-in-out',
        animaPlaceholderTop: 'animaPlaceholderTop .4s',
      },

      keyframes: {
        animaTop: {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)',
          },

          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        animaRigth: {
          from: {
            opacity: '0',
            transform: 'translateX(420px)',
          },

          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },

        animaShow: {
          from: {
            transform: 'scale(0)',
          },

          to: {
            transform: 'scale(1)',
          },
        },

        animaHidden: {
          from: {
            transform: 'scale(1)',
          },

          to: {
            transform: 'scale(0)',
          },
        },

        animaPlaceholderTop: {
          from: {
            transform: 'translateY(8px)',
          },

          to: {
            transform: 'translateY(0)',
          },
        },

        animaPlaceholderBottom: {
          from: {
            transform: 'translateY(-8px)',
          },

          to: {
            transform: 'translateY(0)',
          },
        },
      },
    },
    fontSize: {
      '4xs': '0.625rem', //10px
      '3xs': '0.75rem', // 12px
      '2xs': '0.875rem', // 14px
      xs: '1rem', // 16px
      sm: '1.125rem', // 18px
      md: '1.25rem', // 20px
      lg: '1.375rem', // 22px
      xl: '1.75rem', // 28px
      '2xl': '1.875rem', // 30px
      '2.5xl': '2.375rem', // 38px
      '3xl': '2.5rem', // 40px
      '4xl': '2.75rem', // 44px
      '5xl': '3rem', // 48px
      '6xl': '3.5rem', // 56px
      '7xl': '3.75rem', // 60px
      '8xl': '4.5rem', // 72px
      '9xl': '6rem', // 96px
      '10xl': '14.375rem', // 230px
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      black: {
        100: '#3B4147',
        200: '#22262B',
        300: '#171B21',
        disabled: '#B5B5B5',
      },
      white: { 100: '#EDEFF9', 200: '#9FA0A5', disabled: '#D4D5D7' },
      red: { 100: '#ED6464', 200: '#AC4949', disabled: '#F8DCDC' },
      gray: '#A0A2A4',
      yellow: '#EDDD64',
      orange: { 100: '#EDAD64', 200: '#DF9540', disabled: '#FADCBA' },
      green: { 100: '#64EDAD', 200: '#48A373', disabled: '#C7F9E2' },
      purple: { 100: '#8964ED', 200: '#5648A3', disabled: '#D6C9F9' },
      blue: { 100: '#64A4ED', 200: '#4A7FA3', disabled: '#B9D5F4' },
      'blue-dark': '#243B55',
      'blue-dark-hover': '#41596D',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      blue: '0px -14px 0px -4px #64A4ED',
      green: '0px -14px 0px -4px #64EDAD',
      DEFAULT: '0px 4px 6px #141E30, 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md:
        '0 4px 6px -1px  0px 4px 16px #141E30, 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg:
        '0 10px 15px -3px  0px 4px 16px #141E30, 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl:
        '0 20px 25px -5px  0px 4px 16px #141E30, 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

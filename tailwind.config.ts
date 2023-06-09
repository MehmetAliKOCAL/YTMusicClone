import type { Config } from 'tailwindcss';
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        ytblack: 'rgb(3,3,3)',
        ytgray: 'rgb(129,129,129)',
        ytred: 'rgb(255,0,0)',
      },
      fontFamily: {
        robotoExt: ['Roboto', 'sans-serif'],
      },
      screens: {
        yt2xs: '480px',
        ytxs: '530px',
        ytsm: '615px',
        ytmd: '935px',
        ytlg: '1150px',
        ytxl: '1365px',
        yt2xl: '1580px',
        yt3xl: '1800px',
      },
      spacing: {
        '13': '3.25rem',
      },
      width: {
        inherit: 'inherit',
      },
    },
  },
};

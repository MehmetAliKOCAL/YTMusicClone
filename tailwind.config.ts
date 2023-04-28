import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
    theme: {
    extend: {
      colors: {
        ytblack: 'rgb(3,3,3)',
        ytgray: 'rgb(129,129,129)'
      },
      fontFamily:{
        robotoExt:['Roboto', 'sans-serif']
      },
      screens:{
        ytxs:'530px',
        ytsm:'615px',
        ytmd:'935px',
        ytlg:'1150px',
        ytxl:'1365px',
        yt2xl:'1580px'
      },
      spacing:{
        '13':'3.25rem'
      }
    }
  }
}
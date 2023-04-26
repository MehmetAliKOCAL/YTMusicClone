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
        ytsm:'615px',
        ytmd:'935px',
        ytlg:'1150px',
        ytxl:'1350px'
      }
    }
  }
}
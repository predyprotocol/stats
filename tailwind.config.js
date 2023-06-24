module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      green: '#0ECB81',
      purple: '#8109B7',
      deepgreen: '#0CD876',
      'transparent-green': '#04ECA61A',
      red: '#FF4040',
      'transparent-red': '#FF40401A',
      blue: '#338BFF',
      background: '#000000',
      secondaly: '#FFFFFF12',
      third: '#5c6371',
      forth: '#2b3139',
      subtext: '#adb4c3',
      deactivetext: '#FFFFFF20',
      primary: '#0C1845',
      black0: '#00000000',
      black3: '#0000004C',
      black4: '#0000005E',
      black5: '#00000080',
      black8: '#000000C0',
      white0: '#FFFFFF05',
      white1: '#FFFFFF20',
      white3: '#FFFFFF4C',
      white5: '#FFFFFF80',
      white7: '#FFFFFFB0',
    },
    container: {
    },
    extend: {
      boxShadow: {
        'sm': '0 0px 0px 1.75px rgba(255, 255, 255, 0.05)',
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'trade': '368px auto',
        'lending': '72px 368px auto',
        'trade-sm': 'minmax(0px, 1fr)',
      },
      gridTemplateRows: {
        'trade': '480px 412px',
        'lending-sm': '24px 24px 300px',
        'trade-sm': '24px auto 300px',
      }
    }
  },
  plugins: [],
}

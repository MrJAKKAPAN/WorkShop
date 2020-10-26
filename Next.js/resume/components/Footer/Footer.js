
const style = {
    position: 'ab',
    right: 0,
    bottom: 0,
    left: 0,
    padding: '1rem',
    // backgroundColor: '#2b2a2a',
    color:'#000',
    textAlign: 'center',
    fontSize:'14px',
    fontFamily: 'Balsamiq Sans',
  }
  
  const dates = () =>(
    new Date().getFullYear()
  ) 

  const Footer = () => (
    <div>
      <div style={style}>
      Copyright ©{dates()} &nbsp;All Right Reserved by &nbsp; Jakkapn Sitthikan &nbsp;
      </div>
    </div>
  )
  
  export default Footer;
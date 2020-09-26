import Link from 'next/link'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';



const OnHeader = () => (
  <div >
    <div className="containers" style={containers}>
      <div className="incontainer">
        
        <div className="flexCenter">
        <Avatar className="Avatar" alt="jakkapan" src="/image/jakkapan.png"  style={{left:'25%',width:'150px', height:'150px', border:'5px solid #fff' }} />  
        <p >Jakkapan Sitthikan</p>
        </div>
         
          </div>
         
        <video autoPlay loop muted style={video}>
                <source src="/video/OnHead4.mp4" type="video/mp4" />
        </video>
    </div>


    <style jsx>{`
      :global(body) {
        margin: 0;
        padding: 0;
        position: relative;
      }
      .incontainer {
        width:100%;
        display:flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
        position:absolute;
        top: 20%;
      }
      p {
        color:#fff;
        font-size:40px;
        font-family: 'Balsamiq Sans', cursive;
      }

    `}</style>
  </div>
)



const containers = {
  width:'100%',
  // overFlow:'hidden',
  zIndex:'100',
 
}
const video = {
    position: 'relative',
    width: '100%',
    objectFit: 'cover',
    // top: '-10%',
    zIndex: '1',
    height: '47vh',
    opacity:'0.9'
}

export default OnHeader;
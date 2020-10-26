import React, { Component } from "react";
import game from "../image/gameCus.png";
import ReactTypingEffect from 'react-typing-effect';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container" >
          <div className="row" >
            <div className="col" >

            <header>
                {/* <div className="container"> */}
                    <section className="header-info">
                    <ReactTypingEffect
                      text={["I'm Jakkapan"]}
                      cursorRenderer={cursor => <h1>{cursor}</h1>}
                      displayTextRenderer={(text, i) => {
                        return (
                          <h1>
                            {text.split('').map((char, i) => {
                              const key = `${i}`;
                              return (
                                <span
                                  key={key}
                                  style={i%2 === 0 ? { color: '#000'} : {}}
                                >{char}</span>
                              );
                            })}
                          </h1>
                        );
                      }}        
                    />
                        <p>Lorem, ipsum dolor sit  Magni, earum. Recusandae!Lorem, ipsum dolor sit  Magni, earum. Recusandae!Lorem, ipsum dolor sit  Magni, earum. Recusandae!</p>
                        <a href="#" className="header-btn">Get CV.</a>
                    </section>
                {/* </div> */}
                {/* </div> */}
            </header>
            
            </div>
            <div className="col" >
              <header className="header-base" >
                <img className="imageGame" src={game} style={{marginLeft:'20%',}} height='748px' />
              </header>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Home;

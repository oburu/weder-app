import React, {Component} from 'react';

class Burger extends Component{
  render(){
    return(
      <section className="section burger-layer">
        <div className="burger-menu">
          <div id="burger-container" className="burger-container open">
              <div id="burger" className="burger">
                  <a>
                     <span>&nbsp;</span>
                     <span>&nbsp;</span>
                     <span>&nbsp;</span>
                  </a>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Burger;

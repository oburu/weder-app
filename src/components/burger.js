import React, {Component} from 'react';

const CLASS_NAME = 'burger-container open';

class Burger extends Component{
  constructor(props){
    super(props);

    this.state = {
      myClass: CLASS_NAME
    }
  }

  onBurguerClick(e){
    let value = this.state.myClass === CLASS_NAME ? 'burger-container' : CLASS_NAME;
    this.setState({
      myClass: value
    });
    this.props.showMenu();
  }

  render(){
    return(
      <section className="section burger-layer">
        <div className="burger-menu">
          <div id="burger-container" className={this.state.myClass} onClick={(e) => this.onBurguerClick(e)}>
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

import React, {Component} from 'react';

class SearchPanel extends Component{
  render(){
    return(
      <section className="section menu-layer">
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <div className="row">
              <div className="menu-wrapper animate-menu">
                <div className="menu-element">
                  <span className="logo"></span>
                </div>
                <div className="menu-element main-search">
                  <form className="input-group">
                    <input type="text" className="form-control" placeholder="Your city name"/>
                    <span className="input-group-btn">
                      <button className="btn btn-secondary" type="submit">Search</button>
                    </span>
                  </form>
                </div>
                <div className="menu-element">
                  <p>Made with love and sweat by <a href="#" target="_blank">Rebus.io</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchPanel;

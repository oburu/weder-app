import React, {Component} from 'react';

class SearchPanel extends Component{
  constructor(props){
    super(props);

    this.state = {
      myClass: 'menu-wrapper'
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        myClass: 'menu-wrapper animate-menu'
      });
    },1);
  }

  onFormSubmit(e){
    e.preventDefault();
    var location = this.refs.location.value;

    if (location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }

  render(){
    return(
      <section className={this.props.menuDown}>
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <div className="row">
              <div className={this.state.myClass}>
                <div className="menu-element">
                  <span className="logo"></span>
                </div>
                <div className="menu-element main-search">
                  <form className="input-group" onSubmit={this.onFormSubmit}>
                    <input className="form-control" type="search" ref="location" placeholder="Search weather by city"/>
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

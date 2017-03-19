import React from 'react';

class Page extends React.Component {
  constructor(){
    super();
    // who knows what this is for
    this.state = { active: <Home />,
                   tab: 'home' }
    this.showHome = this.showHome.bind(this)
    this.showOtters = this.showOtters.bind(this)
    this.showRaccoons = this.showRaccoons.bind(this)
  }

  showHome(e){
    this.setState({
      active: <Home/>
    })
  }

  showOtters(e){
    this.setState({
      active: <Otters/>
    })
  }

  showRaccoons(e){
    this.setState({
      active: <Raccoons/>
    })
  }

  render(){
    return( <div className="content">
              <ul className='tabs'>
                <li className='active' onClick={this.showHome}>Home</li>
                <li onClick={this.showOtters}>Otters</li>
                <li onClick={this.showRaccoons}>Raccoons</li>
              </ul>
              <div className="tabContent">
                {this.state.active}
              </div>
            </div>)
  }
}

// stateless function component
const Home = () => <div className='tabContent'>
                    <h1>This was supposed to be about restaurants</h1>
                    <img src="http://imgs.abduzeedo.com/files/articles/baby-animals/Baby-Animals-011.jpg" />
                    <p>I think it should be about cute baby animals instead.</p>
                   </div>

// class component - this can have state, unlike stateless function component
class Otters extends React.Component {
  render(){
    return (<div className='tabContent'>
              <h1>Otters are pretty cute</h1>
              <h2>Especially the baby ones</h2>
              <img src="http://img.huffingtonpost.com/asset/2000_1000/5751a756130000fb0738383d.jpeg?cache=2ainbbh601" />
            </div>)
  }
}


// class component - this can have state, unlike stateless function component
class Raccoons extends React.Component {
  render(){
    return (<div className='tabContent'>
              <h1>Raccoons are also adorable</h1>
              <h2>Even if people call them trash pandas</h2>
              <img src="http://www.cutestpaw.com/wp-content/uploads/2014/11/baby-raccoon.jpg" />
            </div>)
  }
}

export default Page

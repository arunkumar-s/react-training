import React, { Component } from 'react';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {compareUsingColour:false};

    this.getCells = this.getCells.bind(this);
    this.handleRunClick = this.handleRunClick.bind(this);
  }

  getCells = () => {
    const cells = window.sample75kdata.map((item) => {
      if(this.state.compareUsingColour){
        let colourClass = '';
        if(item.value > 5.5){
          colourClass = 'bg-success';
        }
        else if (item.value > 4.5 && item.value <5.5)
        {
          colourClass = 'bg-info';
        }
        else
        {
          colourClass = 'bg-danger';
        }
        return <span key={item._id} className={"cell reactcell " + colourClass}> {item.value} </span>;
      }
      else
      {
        return <span key={item._id} className="cell reactcell "> {item.value} </span>; 
      }
    }); 
    return cells;
  }
  
  handleRunClick = () => {
    this.setState({compareUsingColour:true});
  }

  render() {
    const app = <div className="App">
                  <button id="reactrun" onClick={this.handleRunClick} type="button" className="btn btn-primary">Run Using React</button>
                  <div className="row">
                      <div className="col-md-12">
                          <div id="reactoutput">
                            {this.getCells()}
                          </div>
                      </div>
                </div>
                </div>;
    return app;
  }
}

export default App;

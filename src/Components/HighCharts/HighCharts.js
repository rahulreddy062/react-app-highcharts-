import Highcharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';
import React,{ Component } from 'react';



class HighCharts extends Component{
    state = {
        title:{
            text:"My Chart"
        },
        series:[{
            data:[1,2,3]
        }]
    }
    componentDidMount(){
        
        fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    let updatedState = {...this.state}
    console.log(updatedState.series[0].data.push(json.id));
    this.setState({state:updatedState})
    })
    
    }
    componentDidUpdate(){
        
        setTimeout(()=>{
            
            fetch('https://jsonplaceholder.typicode.com/todos/2'   )
            .then(response => response.json())
            .then(json => {
              let updatedState = {...this.state}
              console.log(updatedState.series[0].data.push(json.id));
              this.setState({state:updatedState})
              })
        },1000)
    }
    render(){
        
        return(
            <div>
                <HighChartsReact  highcharts = {Highcharts} options = {this.state}/>
            </div>
        )
    }
}

export default HighCharts;
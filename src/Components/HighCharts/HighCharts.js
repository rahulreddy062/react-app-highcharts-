import Highcharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';
import React,{ Component } from 'react';



class HighCharts extends Component{
    constructor(props){
        super(props);
           
             let a = JSON.stringify(sessionStorage.getItem("state"));
             sessionStorage.setItem('state',JSON.stringify(a));    
        
    }
    state = {
        // chart:{
        //     type:'column'
        // },
        yAxis: {
            title: {
                text: 'Fradulent Frequency'
            }
        },    
        title:{
            text:"My Chart"
        },
        series:[{
            name:["fradulent data"],
            color:"#ff0000",
            data:[0] 
        },
    {
        name:[" non fradulent data"],
        color:"#00ff00",
        data:[0]
    },
    {
        name:["on hold"],
        color:"#FFA500",
        data:[0]
        }],

       
    stackLabels: {
        enabled: true,
        style: {
            fontWeight: 'bold',
            color: ( // theme
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || 'gray'
        }
    },
    totalFraudulentData:0,
    totalNonFraudulentData:0,
    totalOnHoldData:0,
    consolidatedState:{}
}


componentDidMount(){ 
   
      console.log('componentDIdMount');
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
     
  let updatedState = {...this.state};
     updatedState.series[0].data.push(json.id);
    //  updatedState.series[1].data.push(json.STATS_ML.VALID);
    //  updatedState.series[2].data.push(json.STATS_ML.ON_HOLD);
    //  const fraud = json.STATS_ML.FRAUD;
    //  const valid = json.STATS_ML.VALID;
    // const on_hold = json.STATS_ML.ON_HOLD;
    //  const oldfraud = this.state.totalFraudulentData;
    //  const oldnonfraud = this.state.totalNonFraudulentData;
    //  const old_on_hold = this.state.totalOnHoldData;
    
    //  updatedState.totalOnHoldData = on_hold + old_on_hold;
    //  updatedState.totalNonFraudulentData = valid + oldnonfraud;
    //  updatedState.totalFraudulentData = fraud + oldfraud;
    
     this.setState({state:updatedState,
        totalFraudulentData:updatedState.totalFraudulentData,
        totalNonFraudulentData:updatedState.totalNonFraudulentData,
        totalOnHoldData:updatedState.totalOnHoldData});


            // if( JSON.parse(sessionStorage.getItem('state',this.state))===[] && Object().keys(JSON.parse(sessionStorage.getItem('state',this.state))).length < Object.keys(this.state).length){
            //     sessionStorage.setItem('state',JSON.stringify(this.state));
            // }
      
           
       
    
    })
    
    }
    componentDidUpdate(){
        
        setTimeout(()=>{
           
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                let updatedState = {...this.state};
                updatedState.series[0].data.push(json.id);
            //     updatedState.series[1].data.push(json.STATS_ML.VALID);
            //     updatedState.series[2].data.push(json.STATS_ML.ON_HOLD);
            //     const fraud = json.STATS_ML.FRAUD;
            //     const valid = json.STATS_ML.VALID;
            //    const on_hold = json.STATS_ML.ON_HOLD;
            //     const oldfraud = this.state.totalFraudulentData;
            //     const oldnonfraud = this.state.totalNonFraudulentData;
            //     const old_on_hold = this.state.totalOnHoldData;
               
            //     updatedState.totalOnHoldData = on_hold + old_on_hold;
            //     updatedState.totalNonFraudulentData = valid + oldnonfraud;
            //     updatedState.totalFraudulentData = fraud + oldfraud;
               
                this.setState({state:updatedState,
                   totalFraudulentData:updatedState.totalFraudulentData,
                   totalNonFraudulentData:updatedState.totalNonFraudulentData,
                   totalOnHoldData:updatedState.totalOnHoldData});
                   
                
              
                    sessionStorage.setItem('state',JSON.stringify(this.state));
                
               
                //   let a = [] ;
                //   console.log('componentdidUpdate');
                //   a = JSON.parse(localStorage.getItem('state'));
                //   console.log(a);
                //   a.series.data = this.state.data;
                //   localStorage.setItem('state',JSON.stringify(a));
                //   a.push(this.state);
              })
        },2000);
        // localStorage.setItem('state',JSON.parse(this.state))
    }
    
    
    render(){
        
        return(
            <div>
                <HighChartsReact  highcharts = {Highcharts} options = {JSON.parse(sessionStorage.getItem("state",this.state))}/>
       
                <p>
                    {this.state.totalFraudulentData}
                </p>
                <p>
                    {this.state.totalNonFraudulentData}
                </p>
                <p>
                    {this.state.totalNonFraudulentData}
                </p>
            </div>
        )
    }
}

export default HighCharts;
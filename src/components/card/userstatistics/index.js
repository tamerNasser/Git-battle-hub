import React from 'react';
import './style.css';
import { getData } from "../../../tools/getData";

class Statistics extends React.Component {
  state = {
    reposData:"",
    search:this.props.finish,
    langs:""
  }
  componentDidUpdate(){
    if(this.state.search===1){
        this.doit();
        this.setState({search:this.props.finish})
    }
  }
  // componentDidMount() {
  //   this.setState({search:this.props.finish})
  // }
    doit = ()=>{
      console.log("stat",this.props.finish);
      console.log("state",this.state.search);
      if(this.state.search === 1){
        console.log("in");
      getData(this.props.reposUrl).then(data =>{
        console.log("repos" ,data);
         this.setState( {reposData:data} );
         console.log("reposdata",this.state.reposData);
         // this.setState({userRepos:data.reduce((acc,current)=>{
         //   getData(current.languages_url).then(d =>{
         //     return acc.concat(Object.keys(d))
         //   })
         // },[])});

      });
      console.log("user langs",this.userLangs);
      this.setstate({search:0})
      console.log("after finish",this.state.search);
    }

  }


  render() {

    return (
      // <div id="table">
        <table id="table">
          <tr>
            <td>Projects count</td>
            <td>{this.props.reposCount}</td>
          </tr>
          <tr>
            <td>Lines of code</td>
            <td>{this.props.lines}</td>
          </tr>
          <tr>
            <td>Languages</td>
            <td>{this.state.langs}</td>
          </tr>
          <tr>
            <td>Followers</td>
            <td>{this.props.followers}</td>
          </tr>
        </table>
      // </div>
    );
  }
}

export default Statistics;

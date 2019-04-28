import React from 'react';
import './style.css';
import GInfo from "./userinfo";
import Statistics from "./userstatistics";


class PortfolioCard extends React.Component {
  // state={
  //   find:this.props.find
  // }
  render() {
    console.log("portfolio",this.props.done);
  const {
    avatar_url,
    followers,
    name,
    public_repos,
    repos_url
  } = this.props.userdata;

    return (
      <div>
        <GInfo url_pic = {avatar_url} name = {name}/>
        <Statistics followers={followers} finish={this.props.done} reposCount={public_repos} reposUrl={repos_url}/>
      </div>
    );
  }
}

export default PortfolioCard;

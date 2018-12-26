import React from 'react';
import Newsitem from './Newsitem';
class News extends React.Component{
  render(){
    let nameElement = <div>Burak</div>;
    return(
      <div>
        { nameElement }
        { 2 + 2 == 4 ? "Evet":"Hayır"}
        <Newsitem/>
      </div>
    )
  }
}

export default News;
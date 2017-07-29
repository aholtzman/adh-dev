import React, { Component } from 'react'
import Image from './Image'
import Desc from './Desc'
import ItemWrap from './ItemWrap'
import Title from './Title'
import Role from './Role'
import Url from './Url'
import TextWrap from './TextWrap'

class PortItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div>
        <ItemWrap>
          <Image
            src={this.props.data.image}
            alt={this.props.data.title}
          />
          <TextWrap>
          <Title>{this.props.data.title}</Title>
          <hr></hr>
          <br></br>
          <Desc>{this.props.data.desc}</Desc>
          <br></br>
          <Role>{this.props.data.role}</Role>
          <br></br>
          <hr></hr>
          <br></br>
          <Role>{this.props.data.code}</Role>
          <br></br>
          <Url href={this.props.data.url} target='_blank'>{this.props.data.url}</Url>
          </TextWrap>
        </ItemWrap>
      </div>
    );
  }
}

export default PortItem

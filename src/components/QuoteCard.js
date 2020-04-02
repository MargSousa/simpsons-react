import React from 'react';
import './QuoteCard.css';

class QuoteCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <figure className="QuoteCard">
        <figcaption>
          <p><cite className="name">{this.props.simpson.character}</cite></p>
          <blockquote>{this.props.simpson.quote}</blockquote>
        </figcaption>
        <img className="image"
          src={this.props.simpson.image}
          alt={this.props.simpson.character} />
      </figure>
    );
  }
}


export default QuoteCard;
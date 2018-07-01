import React, { Component } from "react";
import get from "lodash/get";
import styled from "styled-components";

const Styled404 = styled.div`
  img {
    width: 100%;
    cursor: pointer;
  }
`;

const StyledLoading = styled.div`
  display: block;
  text-align: center;
  padding: 5rem;
  margin: 2rem;
  animation: blink 0.6s linear infinite;
  border: 1px solid pink;
  font-weight: bold;
  font-size: 2rem;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

class NotFoundPage extends Component {
  constructor() {
    super();
    this.state = { gif: null };
    this.getRandomGiphy();

    this.getRandomGiphy = this.getRandomGiphy.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      gif: null
    });
    this.getRandomGiphy();
  }
  getRandomGiphy(tags = "fail") {
    const giphyRequest = new Request(
      `https://api.giphy.com/v1/gifs/random?api_key=${
        process.env.GATSBY_GIPHY_API_KEY
      }&tag=${tags}&rating=g`
    );

    fetch(giphyRequest)
      .then(response => {
        return response.json();
      })
      .then(body => {
        const gif = get(body, "data.image_url", "test");
        this.setState({
          gif: gif
        });
        return gif;
      });
  }

  render() {
    const { gif } = this.state;
    return (
      <Styled404 className="container">
        <h1>404 ERROR: NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness 😭</p>
        {gif && (
          <img src={gif} onClick={this.handleClick} alt="Random animated gif" />
        )}

        {!gif && <StyledLoading>Loading...</StyledLoading>}
        <p>
          <small>Click on the Giphy for another one!</small>
        </p>
      </Styled404>
    );
  }
}

export default NotFoundPage;

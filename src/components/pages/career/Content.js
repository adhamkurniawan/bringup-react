import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body content has-text-grey-dark">
          <div className="container">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <h2>Open Position</h2>
              </div>
            </div>

            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <div className="box box-hover">
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="images/position/fe.png" alt="Front End Developer" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>Front End Developer</strong> <small>Tech</small> <small>Team</small>
                          <br />
                          <small>3 Days Ago</small>
                          <br />
                          Chicharrones air plant next level ipsum truffaut meh. Ea roof party chia hashtag, try-hard squid synth tote bag.
                          <a href="fe.html">Read More</a>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <div className="box box-hover">
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="images/position/be.png" alt="Back End Developer" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>Back End Developer</strong> <small>Tech</small> <small>Team</small>
                          <br />
                          <small>6 Days Ago</small>
                          <br />
                          Chicharrones air plant next level ipsum truffaut meh. Ea roof party chia hashtag, try-hard squid synth tote bag.
                          <a href="be.html">Read More</a>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <div className="box box-hover">
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="images/position/sa.png" alt="System Analyst" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>System Analyst</strong> <small>Analyst</small> <small>Team</small>
                          <br />
                          <small>15 Days Ago</small>
                          <br />
                          Chicharrones air plant next level ipsum truffaut meh. Ea roof party chia hashtag, try-hard squid synth tote bag.
                          <a href="sa.html">Read More</a>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Content;

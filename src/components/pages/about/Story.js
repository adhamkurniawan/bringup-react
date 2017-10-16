import React, { Component } from 'react';

class Story extends Component {
  render() {
    let mapStyle = {
      border: 0
    }

    return (
      <section className="hero">
        <div className="hero-body content has-text-grey-dark">
          <div className="container">
            <h2>Our Story</h2>
            <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
            <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et justo sodales elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie. Cloud bread drinking vinegar affogato etsy readymade health goth bitters post-ironic helvetica whatever. Farm-to-table subway tile esse, gochujang stumptown hexagon bicycle rights tumeric velit lumbersexual meggings tousled cornhole.</p>
            <div className="columns">
              <div className="column is-2">
                <address>
                  4770 Cinnamon Lane <br/>
                  San Antonio <br/>
                  TX 78202 <br/>
                  Phone: 210-838-5057 <br/>
                  Mobile: 210-823-3309
                </address>
              </div>
              <div className="column is-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444567.9728814122!2d-98.79529034292067!3d29.481733417495963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58af04d00eaf%3A0x856e13b10a016bc!2sSan+Antonio%2C+TX%2C+USA!5e0!3m2!1sen!2sid!4v1506929551851" width="100%" height="450" frameborder="0" style={mapStyle} allowFullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Story;

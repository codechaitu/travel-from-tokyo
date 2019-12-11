import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Jumbotron,
  Row,
  Table
} from "reactstrap";

class Jumbotrons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          {/*           
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Jumbotron</strong>
                <div className="card-header-actions">
                  <a
                    href="https://reactstrap.github.io/components/jumbotron/"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="card-header-action"
                  >
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Hello, world!</h1>
                  <p className="lead">
                    This is a simple hero unit, a simple Jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <hr className="my-2" />
                  <p>
                    It uses utility classes for typgraphy and spacing to space
                    content out within the larger container.
                  </p>
                  <p className="lead">
                    <Button color="primary">Learn More</Button>
                  </p>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
           */}
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Nikko</strong>
                <small> Nature</small>
              </CardHeader>
              <CardBody>
                <Jumbotron fluid>
                  <Container fluid>
                    {/* <h1 className="display-3">Fluid jumbotron</h1> */}
                    {/* <p className="lead"> */}
                    <p>
                      Beautiful, splendid, awesome. I don't think words can
                      describe nature in Nikko. Only if you experience it and
                      feel it, you will know it.
                    </p>
                  </Container>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{" "}
                <strong>Tourist Pass / Discount Pass</strong>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th>Traveller</th>
                      <th>Eligible ?</th>
                      <th>Purchase</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Foreigner, with travel visa</td>
                      <td>Yes</td>
                      <td>
                        <a href="http://www.tobu.co.jp/foreign/en/pass/">
                          Tobu Nikko Pass
                        </a>
                      </td>
                      <td>
                        There are two passes. All area pass and Heritage pass,
                        it's better to take all area pass so it will better
                        travel more places and suggestable.
                      </td>
                    </tr>
                    <tr>
                      <td>Foreigner, residing in Japan</td>
                      <td>Yes</td>
                      <td>
                        <a href="http://www.tobu.co.jp/foreign/en/pass/">
                          Tobu Nikko Pass
                        </a>
                      </td>
                      <td>
                        There are two passes. All area pass and Heritage pass,
                        it's better to take all area pass so it will better
                        travel more places and suggestable.
                      </td>
                    </tr>
                    <tr>
                      <td>Japanese</td>
                      <td>No</td>
                      <td>
                        <a href="http://www.tobu.co.jp/foreign/en/access/nikko_kinugawa.html">
                          Access to Nikko
                        </a>
                      </td>
                      <td>
                        There are no pass available, so please enjoy nature by
                        purchasing ticket.
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Travel duration and Stay</strong>
              </CardHeader>
              <CardBody>
                <Jumbotron fluid>
                  <Container fluid>
                    {/* <h1 className="display-3">Fluid jumbotron</h1> */}
                    {/* <p className="lead"> */}
                    <h3>Duration</h3>
                    <p>
                      If you purchase all area pass then 4 days can be travelled
                      in Nikko. I suggest you to purchase it, I will provide a
                      some schedule to visit places so that you could plan
                      better.
                    </p>
                    <h3> Stay</h3>
                    <p>
                      {" "}
                      It's better to book in-advance. I suggest you to choose
                      Airbnb, with superhost tagged house. This is because of
                      two reasons,
                      <br></br>
                      1) Cost of stay in Japan is very high. It will help you
                      with budget planning.
                      <br></br>
                      2) You can know Japanese culture. By talking with house
                      owners and learning about their experiences is a great
                      time to spend.
                    </p>
                  </Container>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{" "}
                <strong>Sample Iternary</strong>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th>Day and time</th>
                      <th>Action</th>
                      <th>Useful links</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Day 1, 07:30</td>
                      <td>Start from Asakusa station</td>
                      <td>
                        <a href="https://www.google.com/maps/place/Tobu+Tourist+Information+Center+ASAKUSA/@35.7112554,139.7956504,17z/data=!4m21!1m15!4m14!1m6!1m2!1s0x60188ec690127e2f:0xf41f021a3a02cff0!2sasakusa+station!2m2!1d139.7977621!2d35.7107924!1m6!1m2!1s0x60188ec6a3877be9:0x65c98fca5dcd3ea3!2sTobu+Tourist+Information+Center+ASAKUSA,+1+Chome-4-1+Hanakawado,+%E5%8F%B0%E6%9D%B1%E5%8C%BA+Taito+City,+Tokyo+111-0033!2m2!1d139.797916!2d35.711718!3m4!1s0x60188ec6a3877be9:0x65c98fca5dcd3ea3!8m2!3d35.711718!4d139.797916">
                          Tobu Asakusa station
                        </a>
                      </td>
                      <td>
                        Starting early is always best. If you take later train
                        or before train, you can use next schedule accordingly.
                        Near Asakusa station, you can visit{" "}
                        <a href="http://www.senso-ji.jp/">sensoji temple</a> if
                        you have time.
                      </td>
                    </tr>
                    <tr>
                      <td>Day 1, 09:30</td>
                      <td>Reach Tobu Nikko station</td>
                      <td>
                        <a href="https://www.google.com/maps?q=tobu+nikko+station&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiiurjtj63mAhVOfXAKHVVpDRoQ_AUoAXoECBEQAw">
                          Tobu Nikko station
                        </a>
                      </td>
                      <td>
                        You can get any information in information center after
                        exiting the ticket gates. I recommend you to ask for
                        maps for Nikko area.
                      </td>
                    </tr>
                    <tr>
                      <td>Day 1, 10:00 - 11:00</td>
                      <td>Reach Akechidaira by bus</td>
                      <td>
                        <a href="https://www.nikko-kotsu.co.jp/ropeway/">
                          Akechidaira Ropeway
                        </a>
                      </td>
                      <td>
                        1) You can freely travel in the bus and ropeway, it is
                        free with all area pass. It applies for next places you
                        travel also.
                        <br></br>
                        2) Views from the top are breathtaking, must experience.
                        Spend some good time there.
                      </td>
                    </tr>
                    <tr>
                      <td>Day 1, 12:00 - 13:00</td>
                      <td>Reach Chuzenji lake</td>
                      <td>
                        <a href="https://www.japan-guide.com/e/e3806.html">
                          Lake Chuzenji{" "}
                        </a>
                      </td>
                      <td>
                        1) From ropeway bus stop, reach chuzenji lake
                        <br></br>
                        2) Take the cruise there, it is also free with all area
                        pass.
                        <br></br>
                        3) Mt.Nantai looks very good, it was a volcano
                        previously.
                        <br></br>
                        4) Take the speed boat.
                      </td>
                    </tr>
                    <tr>
                      <td>Day 1, 13:30 - 14:30</td>
                      <td>Lunch</td>
                      <td></td>
                      <td>
                        1) There are some good restaurants around the lake, so
                        have a good meal enjoying the view
                      </td>
                    </tr>
                    <tr>
                      <td>Day 1, 14:30 - 15:30</td>
                      <td>Reach Kegon Waterfall</td>
                      <td>
                        <a href="https://www.japan-guide.com/e/e3812.html">
                          Kegon Waterfall
                        </a>
                      </td>
                      <td>
                        1) After having lunch, you can walk to the falls. It is
                        very near.
                      </td>
                    </tr>
                    <tr>
                      <td>Day 1, 16:00 - 17:00</td>
                      <td>Return to Nikko</td>
                      <td>
                        <a href="https://www.japan-guide.com/e/e3814.html">
                          Shinkyo Bridge
                        </a>
                      </td>
                      <td>
                        In the evening you can enjoy streets of Nikko and visit
                        the sacred Shinkyo bridge.
                      </td>
                    </tr>
                    <tr>
                      <td>Day 1, End</td>
                      <td>Go to hotel / Airbnb stay place</td>
                      <td></td>
                      <td>
                        You need a break from tierdness of all the long day, so
                        have some good food and take rest for exciting tomorrow.
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Jumbotrons;

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function LeftTabs({ tabs }) {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey={Object.keys(tabs)[0]}>
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            {Object.keys(tabs).map((key, index) => (
              <Nav.Item key={index}>
                <Nav.Link eventKey={key}>{key}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            {Object.keys(tabs).map((key, index) => (
              <Tab.Pane eventKey={key} key={index}>
                {tabs[key]}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabs;

import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import CardsFooter from "components/Footers/CardsFooter.js";
import MainNavbar from "components/Navbars/MainNavbar.js";

// index page sections
import Alerts from "./IndexSections/Alerts.js";
import Buttons from "./IndexSections/Buttons.js";
import Carousel from "./IndexSections/Carousel.js";
import CustomControls from "./IndexSections/CustomControls.js";
import Datepicker from "./IndexSections/Datepicker.js";
import Download from "./IndexSections/Download.js";
import Hero from "./IndexSections/Hero.js";
import Icons from "./IndexSections/Icons.js";
import Inputs from "./IndexSections/Inputs.js";
import Labels from "./IndexSections/Labels.js";
import Login from "./IndexSections/Login.js";
import Menus from "./IndexSections/Menus.js";
import Modals from "./IndexSections/Modals.js";
import Navbars from "./IndexSections/Navbars.js";
import Pagination from "./IndexSections/Pagination.js";
import Pills from "./IndexSections/Pills.js";
import Progress from "./IndexSections/Progress.js";
import Tabs from "./IndexSections/Tabs.js";
import TooltipPopover from "./IndexSections/TooltipPopover.js";
import Typography from "./IndexSections/Typography.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MainNavbar />
        <main ref="main">
          <Hero />
          <Buttons />
          <Inputs />
          <section className="section">
            <Container>
              <CustomControls />
              <Menus />
            </Container>
          </section>
          <Navbars />
          <section className="section section-components">
            <Container>
              <Tabs />
              <Row className="row-grid justify-content-between align-items-center mt-lg">
                <Progress />
                <Pagination />
              </Row>
              <Row className="row-grid justify-content-between">
                <Pills />
                <Labels />
              </Row>
              <Alerts />
              <Typography />
              <Modals />
              <Datepicker />
              <TooltipPopover />
            </Container>
          </section>
          <Carousel />
          <Icons />
          <Login />
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;

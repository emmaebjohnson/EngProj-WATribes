/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// About Us page sections
import Map from "./sections/Map";
import Tribes from "./sections/Tribes";
import NativePopulationBarGraph from "./sections/Featuring";
import Footer from "./sections/Footer";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

function NativeTribes() {
  
  function scrollDownQuarterPage() {
    // Calculate the height of the viewport
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    // Calculate the target scroll position
    const targetScrollPosition = window.scrollY + viewportHeight / 1.3;
    // Scroll to the target position
    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth"
    });
  }

  return (
    <>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              WA Cities Indigenous Names
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
            This site provides a fascinating insight into the rich history of Washington State by showcasing the origins of city names derived from local tribes.
            </MKTypography>
            <MKButton color="default" onClick={scrollDownQuarterPage} sx={{ color: ({ palette: { dark } }) => dark.main }}>
              View map
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Map />
        <Tribes />
        <NativePopulationBarGraph />
        <Footer/>
      </Card>
    </>
  );
}

export default NativeTribes;

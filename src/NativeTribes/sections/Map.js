import React from "react";

// @mui material components
import Container from "@mui/material/Container";
import MKTypography from 'components/MKTypography';
// Material Kit 2 React components
import MKBox from "components/MKBox";

function Map() {
  return (
    <MKBox component="section" py={12}>
       <MKTypography
              variant="h2"
              color="black"
              textAlign = 'center'
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["2xl"],
                },
              })}
            > Interactive Map</MKTypography>
            <MKTypography variant="body1" color="black" align="center" opacity={0.8} mt={1} mb={3} style={{ marginTop: '20px' }}>
       <b>Explore the name origins of WA cities by clicking on points </b>
       <br></br>The logo of each pin corresponds to its tribe
      </MKTypography>
      <Container>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=15c79Q4MY8TCpw2BDzxZbZfPXtPWiNa4&ehbc=2E312F&noprof=1"
          width="100%" // Set width to 100% to match container width
          height="600" // Increase height for a larger map
          style={{ border: "0" }} // Optional: Remove iframe border
          allowFullScreen="" // Allow full screen view
          loading="lazy" // Lazy loading for improved performance
        ></iframe>
      </Container>
    </MKBox>
  );
}

export default Map;

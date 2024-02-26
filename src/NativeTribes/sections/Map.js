import React from "react";

// @mui material components
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";

function Map() {
  return (
    <MKBox component="section" py={12}>
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

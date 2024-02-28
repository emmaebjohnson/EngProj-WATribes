import React from "react";
import MKBox from "components/MKBox";
import bannerImage from "assets/images/banner.png";
import MKTypography from "components/MKTypography";

function Footer() {
  return (
    <>
      <img
        src={bannerImage}
        alt="Banner"
        style={{
          width: "100%",
        }}
      />
      <MKBox
        component="section"
        variant="gradient"
        bgColor="dark"
        position="relative"
        py={6}
        px={{ xs: 2, lg: 0 }}
        mx={-2}
      >
        <MKTypography
          variant="h2"
          color="white"
          align="center"
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["2xl"],
            },
          })}
        >
          References
        </MKTypography>
        <style>
          {`
            .reference-link {
              margin-left: 20px;
              display: block;
              font-size: 0.9rem;
            }
          `}
        </style>
        <MKTypography
          component="a"
          variant="body2"
          color="white"
          opacity={0.8}
          mt={3}
          mb={3}
          href="https://goia.wa.gov/tribal-directory/federally-recognized-indian-tribes-washington-state"
          className="reference-link"
        >
          Governor's Office of Indian Affairs. (n.d.). Federally Recognized Indian Tribes in Washington State. Retrieved from goia.wa.gov: https://goia.wa.gov/tribal-directory/federally-recognized-indian-tribes-washington-state
        </MKTypography>
        <MKTypography
          component="a"
          variant="body2"
          color="white"
          opacity={0.8}
          mt={3}
          mb={3}
          href="http://nativeamericannetroots.net/diary/1465"
          className="reference-link"
        >
          Native American Roots. (2013, March 14). American Indian Place Names in Washington. Retrieved from Native American Net Roots: http://nativeamericannetroots.net/diary/1465
        </MKTypography>
        <MKTypography
          component="a"
          variant="body2"
          color="white"
          opacity={0.8}
          mt={3}
          mb={3}
          href="https://www.census.gov/library/stories/2023/10/2020-census-dhc-a-aian-population.html"
          className="reference-link"
        >
          United States Census Bureau. (2023, October 3). Detailed Data for Hundreds of American Indian and Alaska Native Tribes. Retrieved from census.gov: https://www.census.gov/library/stories/2023/10/2020-census-dhc-a-aian-population.html
        </MKTypography>

        <MKTypography
          variant="body2"
          fontWeight="regular"
          color="white"
          mt={3}
          sx={{ textAlign: "center" }}
        >
          Created by Emma Johnson<br />
          <i>DISCLAIMER! Based on my own research, data may be incorrect or incomplete. Please email me if there is an error: emma.e.johnson@wsu.edu</i>
        </MKTypography>
        <MKTypography
          variant="body2"
          color="white"
          opacity={0.8}
          fontWeight="regular"
          sx={{ textAlign: "center" }}
        >
          Fonts and component styles from Creative Tim
        </MKTypography>
      </MKBox>
    </>
  );
}

export default Footer;

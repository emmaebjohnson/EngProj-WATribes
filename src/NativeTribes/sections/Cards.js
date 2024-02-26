import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function HorizontalTeamCard({ image, name, website }) {
  return (
    <Card sx={{ p: 2, height: "100%", display: "flex" }}>
      <Grid container alignItems="center" sx={{ height: "100%" }}>
        <Grid item xs={12} md={6} lg={6}>
          <MKBox display="flex" justifyContent="flex-start">
            <img src={image} alt={name} style={{ maxWidth: "100%", height: "auto" }} />
          </MKBox>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <MKBox p={2}>
            <MKTypography variant="h6">{name}</MKTypography>
            <MKTypography variant="body2" color="text">
              <a href={website} style={{ color: "#007bff", textDecoration: "none" }}>Visit Website</a>
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired, // Add prop validation for "website"
};

export default HorizontalTeamCard;

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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "./Cards";

// Images
import Skagit from "assets/images/skagit.png";
import Tulalip from "assets/images/tulalip.svg";
import Swinomish from "assets/images/swinomish.png";
import Suquamish from "assets/images/suquamish.png";
import Stillaguamish from "assets/images/stillaguamish.png";
import Squaxin from "assets/images/squaxin.png";
import Spokane from "assets/images/spokane.jpg";
import Snoqualmie from "assets/images/snoqualmie.png";
import Skokomish from "assets/images/skokomish.jpg";
import Shoalwater from "assets/images/shoalwater.svg";
import SaukSuiattle from "assets/images/sauk-suiattle.jpg";
import Samish from "assets/images/samish.png";
import Quinault from "assets/images/quinault.jpg";
import Quileute from "assets/images/quileute.png";
import Puyallup from "assets/images/puyallup.png";
import PortGamble from "assets/images/portgamble.jpg";
import Nooksack from "assets/images/nooksack.png";
import Nisqually from "assets/images/nisqually.jpg";
import NezPerce from "assets/images/nezperce.png";
import Muckleshoot from "assets/images/muckleshoot.png";
import Makah from "assets/images/makah.png";
import Lummi from "assets/images/lummi.png";
import LowerElwha from "assets/images/lower-elwha.webp";
import Kalispel from "assets/images/kalispel.png";
import Jamestown from "assets/images/jamestown.png";
import Hoh from "assets/images/hoh.png";
import Cowlitz from "assets/images/cowlitz.jpeg";
import WarmSprings from "assets/images/warm-springs.png";
import Umatilla from "assets/images/ctir.png";
import Colville from "assets/images/colville.png";
import Chehalis from "assets/images/chehalis.png";
import Yakama from "assets/images/yakama.webp";

import bannerImage from "assets/images/banner.png"
const tribeData = [
  {
    tribe: "Upper Skagit Indian Tribe",
    address: "25944 Community Plaza, Sedro Woolley, WA 98284",
    county: "Skagit",
    description: "https://upperskagittribe-nsn.gov",
    picture: Skagit,
  },
  {
    tribe: "Tulalip Tribes",
    address: "6406 Marine Drive, Tulalip, WA 98271",
    county: "Snohomish",
    description: "https://www.tulaliptribes-nsn.gov/",
    picture: Tulalip,
  },
  {
    tribe: "Swinomish Indian Tribal Community",
    address: "11404 Moorage Way, LaConner, WA 98257",
    county: "Skagit",
    description: "https://www.swinomish-nsn.gov/",
    picture: Swinomish,
  },
  {
    tribe: "Suquamish Tribe",
    address: "PO Box 498, Suquamish, WA 98392-0498",
    county: "Kitsap",
    description: "https://www.suquamish.nsn.us/",
    picture: Suquamish,
  },
  {
    tribe: "Stillaguamish Tribe of Indians",
    address: "PO Box 277, Arlington, WA 98223-0297",
    county: "Snohomish",
    description: "https://www.stillaguamish.com/",
    picture: Stillaguamish,
  },
  {
    tribe: "Squaxin Island Tribe",
    address: "10 SE Squaxin Lane, Shelton, WA 98584",
    county: "Mason, Thurston",
    description: "https://www.squaxinisland.org/",
    picture: Squaxin,
  },
  {
    tribe: "Spokane Tribe of Indians",
    address: "PO Box 100, Wellpinit, WA 99040",
    county: "Spokane, Stevens",
    description: "https://www.spokanetribe.com/",
    picture: Spokane,
  },
  {
    tribe: "Snoqualmie Indian Tribe",
    address: "PO Box 969, Snoqualmie, WA 98065",
    county: "King",
    description: "https://www.snoqualmietribe.us/",
    picture: Snoqualmie,
  },
  {
    tribe: "Skokomish Indian Tribe",
    address: "N. 80 Tribal Center Road, Shelton, WA 98584",
    county: "Mason",
    description: "https://www.skokomish.org/",
    picture: Skokomish,
  },
  {
    tribe: "Shoalwater Bay Indian Tribe",
    address: "PO Box 130, Tokeland, WA 98590",
    county: "Pacific",
    description: "https://www.shoalwaterbay-nsn.gov/",
    picture: Shoalwater,
  },
  {
    tribe: "Sauk-Suiattle Indian Tribe",
    address: "5318 Chief Brown Lane, Darrington, WA 98241",
    county: "Skagit",
    description: "https://www.sauk-suiattle.com/",
    picture: SaukSuiattle,
  },
  {
    tribe: "Samish Indian Nation",
    address: "PO Box 217 2918 Commercial Ave, Anacortes, WA 98221",
    county: "Skagit",
    description: "https://www.samishtribe.nsn.us/",
    picture: Samish,
  },
  {
    tribe: "Quinault Indian Nation",
    address: "PO Box 189, Taholah, WA 98587",
    county: "Grays Harbor, Jefferson",
    description: "https://www.quinaultindiannation.com/",
    picture: Quinault,
  },
  {
    tribe: "Quileute Tribe",
    address: "PO Box 279, La Push, WA 98350",
    county: "Clallam",
    description: "https://www.quileutenation.org/",
    picture: Quileute,
  },
  {
    tribe: "Puyallup Tribe",
    address: "3009 E Portland Ave, Tacoma, WA 98404",
    county: "Pierce",
    description: "https://www.puyallup-tribe.com/",
    picture: Puyallup,
  },
  {
    tribe: "Port Gamble S’Klallam Tribe",
    address: "31912 Little Boston Road NE, Kingston, WA 98346",
    county: "Kitsap",
    description: "https://www.pgst.nsn.us/",
    picture: PortGamble,
  },
  {
    tribe: "Nooksack Indian Tribe",
    address: "4979 Mount Baker Hwy Suite F, Deming, WA 98244",
    county: "Whatcom",
    description: "https://www.nooksack-nsn.gov/",
    picture: Nooksack,
  },
  {
    tribe: "Nisqually Indian Tribe",
    address: "4820 She-Nah-Num Drive SE, Olympia, WA 98513",
    county: "Thurston",
    description: "https://www.nisqually-nsn.gov/",
    picture: Nisqually,
  },
  {
    tribe: "Nez Perce Tribe",
    address: "PO Box 305, Lapwai, ID 83540",
    description: "https://nezperce.org/",
    picture: NezPerce,
  },
  {
    tribe: "Muckleshoot Indian Tribe",
    address: "39015 172nd Avenue SE, Auburn, WA 98092",
    county: "King",
    description: "https://www.muckleshoot.nsn.us/",
    picture: Muckleshoot,
  },
  {
    tribe: "Makah Tribe",
    address: "PO Box 115, Neah Bay, WA 98357",
    county: "Clallam",
    description: "https://www.makah.com/",
    picture: Makah,
  },
  {
    tribe: "Lummi Nation",
    address: "2616 Kwina Road, Bellingham, WA 98226",
    county: "Whatcom",
    description: "https://www.lummi-nsn.gov/",
    picture: Lummi,
  },
  {
    tribe: "Lower Elwha Klallam Tribe",
    address: "2851 Lower Elwha Road, Port Angeles, WA 98363",
    county: "Clallam",
    description: "https://www.elwha.org/",
    picture: LowerElwha,
  },
  {
    tribe: "Kalispel Tribe of Indians",
    address: "PO Box 39, Usk, WA 99180",
    county: "Pend Oreille",
    description: "https://www.kalispeltribe.com/",
    picture: Kalispel,
  },
  {
    tribe: "Jamestown S’Klallam Tribe",
    address: "1033 Old Blyn Highway, Sequim, WA 98382",
    county: "Clallam",
    description: "https://www.jamestowntribe.org/",
    picture: Jamestown,
  },
  {
    tribe: "Hoh Indian Tribe",
    address: "P.O. Box 2196 2464 Lower Hoh Rd, Forks, WA 98331",
    county: "Jefferson",
    description: "https://www.hohtribe-nsn.org/",
    picture: Hoh,
  },
  {
    tribe: "Cowlitz Indian Tribe",
    address: "1055 9th Avenue Suite B, Longview, WA 98632",
    county: "Clark, Cowlitz",
    description: "https://www.cowlitz.org/",
    picture: Cowlitz,
  },
  {
    tribe: "Confederated Tribes of Warm Springs Reservation of Oregon",
    address: "1233 Veterans Street, PO Box C, Warm Springs, OR 97761",
    description: "https://warmsprings-nsn.gov/",
    picture: WarmSprings,
  },
  {
    tribe: "Confederated Tribes of the Umatilla Indian Reservation",
    address: "6411 Timine Way, Pendleton, OR 97801",
    description: "https://ctuir.org/",
    picture: Umatilla,
  },
  {
    tribe: "Confederated Tribes of the Colville Reservation",
    address: "PO Box 150, Nespelem, WA 99155",
    county: "Ferry, Okanogan",
    description: "https://www.colvilletribes.com/",
    picture: Colville,
  },
  {
    tribe: "Confederated Tribes of the Chehalis Reservation",
    address: "420 Howanut Road PO Box 536, Oakville, WA 98568",
    county: "Grays Harbor, Thurston",
    description: "https://www.chehalistribe.org/",
    picture: Chehalis,
  },
  {
    tribe: "Confederated Tribes and Bands of the Yakama Nation",
    address: "PO Box 151, Toppenish, WA 98948",
    county: "Klickitat, Yakima",
    description: "https://www.yakama.com/",
    picture: Yakama,
  },
];
   

function Tribes() {
  return (
    <div style={{ position: "relative" }}>
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
      <Container>
        <Grid container spacing={3}>
          {tribeData.map((item, index) => (
            <Grid item xs={12} lg={3} key={index}>
              <MKBox height="100%">
                <HorizontalTeamCard
                  image={item.picture}
                  name={item.tribe}
                  address={item.address}
                  county={item.county}
                  website={item.description}
                />
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
    <img
        src={bannerImage}
        alt="Banner"
        style={{
          width: "100%",
        }}
      />
    </div>
  );
}

export default Tribes;
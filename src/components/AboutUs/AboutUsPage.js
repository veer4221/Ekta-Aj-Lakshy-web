import Grid from "@material-ui/core/Grid";

import React, { Suspense, lazy } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";

const AboutUsSangathan = lazy(() =>
  import("../HomePage/AboutUsSangathan/AboutUsSangathan")
);
const JoinWithUs = lazy(() => import("./JoinWithUs"));

const AboutUsPage = () => {
  return (
    <>
      <Grid container spacing={0} className="page">
        <Grid item xs={12} sm={6}>
          {/* <AboutUsSangathan /> */}
          {/* </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} className="page">
            <Grid item xs={12}>
              <div style={{ display: "flex", justifyContent: "center" }}> */}
          {/* <img
                        src="assets/images/logo512.png"
                        Width="60%"
                        height="80%"
                        style={{ border: "5px solid rgb(172, 24, 24)" }}
                      /> */}
          {/* </div> */}
          {/* </Grid>
            <Grid item xs={12}> */}

          <p
            style={{
              padding: "10%",
              color: "rgb(199, 38, 38)",
              wordWrap: "break-word",
            }}
          >
           
            <h4>એકતાએજલક્ષ્યસંગઠનનુંલક્ષ્ય </h4>
            {`                                             એકતા એજ લક્ષ્ય સંગઠન ની શરૂઆત ગુજરાત થી થઈ છે એકતા એજ લક્ષ્ય સંગઠન છ પુખ્ત શાખા તથા પાચ પેટા શાખા અને એક આ દરેક નું નિયંત્રણ કરતી મુખ્ય શાખા સાથે સનાતન સંસ્કૃતિની તમામ બાબતોને આવરી ને હિંદુત્વ ના તમામ મુદ્દા પર કામ કરે છે. 
"આ સંગઠનનો ઉદ્દેશ્ય અલગ અલગ થઈને જાતિઓમાં વહેંચાયેલા દરેક હિંદુ પરિવારો ને એક કરવાનો છે."
                        800થી વધારે મુગલોના આક્રમણ થયા ૨૦૦ વર્ષથી વધારે અંગ્રેજોના અત્યાચાર સહન કર્યા બાદ આ વિદેશી આક્રમણકારીઓ એ જે ભારતની અંદર ફૂટ પાડી છે, હિંદુઓની અંદર જ્ઞાતિવાદના વાળા ઉભા કર્યા છે અને કહેવાતા રીતિ-રિવાજો કે મૂલ્યો જેમાંના ઘણાં ખરા મૂલ્યો કે રિવાજો ભારતના હતા જ નહીં સંસ્કૃતિની પરંપરા નો હિસ્સો છે જ નહીં પણ આ ષડયંત્ર કર્યા.એ ભાગલા પાડવા અને આગળ જઈ સનાતન સંસ્કૃતિ તૂટી જાય સંપૂર્ણ નષ્ટ થઈ જાય વિનિપાત થઈ જાય એના માટે અનેકો રીતિ રિવાજોનુ ગઠન કર્યું જે ક્યારે ભારત ના હતાજ નહિ, એકતા એજ લક્ષ્ય સંગઠન આવા પાયાવિહોણા રિવાજો તથા સમાજની અંદર વ્યાપેલા દુષણો તથા જ્ઞાતિવાદના વાડા દૂર કરી એકતા સ્થાપવાના પ્રયાસ કરતુ સંગઠન જે સંપૂર્ણપણે ભારતને હિંદુરાષ્ટ્ર બનાવવા ના ઉદ્દેશથી કાર્ય કરે છે. વસુદેવ કુટુંબકમ ની ભાવના એટલા માટે આવે છે કે સમગ્ર વિશ્વમાં સનાતન ધર્મ છે પરંતુ જ્યાં સનાતન નું અપમાન થતું હોય ત્યાં વસુદેવ કુટુંબકમ ની ભાવના ના હોય ત્યાં શ્રીકૃષ્ણ નીતિ તથા ચાણક્ય નીતિ થી કામ લેવું જ પડે છે.
                      સંગઠન સમાજ ને સાચી દિશા આપી લોક સેવા, સમાજ સેવા સાથે સાથે સામાજિક મૂલ્યો નીતિઓ નું  ગઠન ગૌસેવા, પશુ સેવા, રાજનૈતિક દબાવો (જે સનાતન સંસ્કૃતિના હિતમાં કાયદા કાનુન ફેરફાર માટે) રાજનીતિક, કૂટનીતિક અને રણનીતિક આમ ત્રણ બાબત પર ની પૂર્ણતા થી કાર્ય કરે છે.

 `}
          </p>
          {/* </Grid>
          </Grid>
        </Grid> */}
          {/* <h3 style={{ color: "rgb(172, 24, 24)", textAlign: "center" }}> */}
          {/* Join With Us */}
          {/* </h3> */}
          {/* </Grid> */}
          {/* <Grid item xs={12}> */}
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          {/* <JoinWithUs /> */}
          {/* </Suspense> */}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            paddingTop: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <br></br>
          <br></br>
          <img
            src="assets/images/about/about1.png"
            height={isBrowser ? `300px` : `200px`}
            width={isBrowser ? `500px` : `300px`}
            style={{
              border: "2px solid #cfa7a7",
              margin: "10px",
              boxShadow: "10px 10px 5px #ccc",
              borderRadius: "25px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            paddingTop: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <br></br>
          <br></br>
          <img
            src="assets/images/about/about2.png"
            height={isBrowser ? `300px` : `200px`}
            width={isBrowser ? `500px` : `300px`}
            style={{
              border: "2px solid #cfa7a7",
              margin: "10px",

              boxShadow: "10px 10px 5px #ccc",
              borderRadius: "25px",
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <p
            style={{
              padding: "10%",
              color: "rgb(199, 38, 38)",
              wordWrap: "break-word",
            }}
          >{` એકતા એજ લક્ષ્ય સંગઠનના લક્ષ્યો :-
          -અખંડ હિંદુરાષ્ટ્ર ની ભાવના અને ભારતને હિંદુરાષ્ટ્ર બનાવવા માટેના પ્રયાસો.
          -જાતિવાદ માં ફસાયેલા હિંદુઓને સાચી માહિતી તથા દિશા બતાવી એકતાના તાંતણે બાંધવા.
          -સનાતન સંસ્કૃતિ પર થતા ષડયંત્ર ને અર્જુનનું તીર  (એન્ટિક મિસાઈલ) બની રોકવા. 
          -સમાજની અંદર સમરસતા સ્થાપવા.
          -વિદેશી કાયદાઓ માં ફેરફાર કરાવી સ્વદેશી કાયદાઓ અમલમાં લાવવા.
          -વિદેશી રહેણીકરણી તથા ભાષાને બદલે સ્વદેશી રહેણીકરણી અને ભાષાનો ઉપયોગ કઈ રીતે વધારો એના કાર્યો.
          -ભારતમાંથી લવજેહાદ ને સંપૂર્ણ રીતે નષ્ટ કરવું.
          -ભારતમાં દરેક પ્રકારના જેહાદ થઈ રહ્યા છે, તેને સંપૂર્ણ પ્રમાણમાં રોકી સનાતની ગઠન કરવું.
          -ગૌમાતા ની હત્યા સંપૂર્ણ પણે બંધ કરવા માટે ના કાર્યો.
          -દરેક સનાતનીઓને રોજગાર મળી રહે તે માટેના કાર્યો.
          -યુવાધનને સાચી માહિતી તથા રાષ્ટ્રવાદી વિચારધારા થી સફળ કરવા, સાચા ઈતિહાસોથી અવગત કરાવવા, તથા યુવાનોને સાચી દિશામાં દોરવા.
          ભારતને આવનારા સમયમાં મહાસત્તા બનાવવા માટે ના કાર્યો, રણનીતિ અને કૂટનીતિથી સફળ બનાવવા, દરેક સામાન્ય માણસોને પૂરતું જ્ઞાન આપવું તથા માર્ગદર્શન કરવું.
          કૃષિ પ્રધાન દેશ છે ભારત પરંતુ વિદેશી દવાઓ તથા ખાતર ના કારણે ભારતની કસવાળી જમીન નષ્ટ થઇ રહી છે તો તેને  ગૌ આધારિત ખેતી તરફ કઈ રીતે વાળવા તેની સમજણ તથા ઓર્ગેનિક ખેતી નું મહત્વ જણાવી ભારતને સંપૂર્ણ ઓર્ગેનિક બનાવવા માટેના પ્રયત્નો.
           આયુર્વેદ ભારતની સૌથી મોટી દેન છે તો આયુર્વેદને ઘર-ઘર સુધી લઈ જવું અને લોકોને આડઅસર વગર બીમારીના ઈલાજો ઘરે બેઠા થાય એ રીતે લોકોને આયુર્વેદ વિશે ની માહિતી આપવી અને એના ઉપચાર કેન્દ્રો ખોલવા.
          ભારત ને નષ્ટ કરવામાં સૌથી મોટો હાથ વિદેશી શિક્ષણ પ્રણાલીનો છે, દેશ આજે શિક્ષિત હોવા છતાં પણ દિશાહીન થઈ ગયો છે, કેમકે બાહ્ય શિક્ષણ પ્રણાલી ભારત માટે ક્યારેય યોગ્ય છે જ નહિ. આ એ જ ભારત છે કે જ્યાં શિક્ષણ પ્રણાલી માં એ સમજણ એ જ્ઞાન હતું કે વિદેશી લોકો પણ ભારતની અંદર શિક્ષા પ્રાપ્ત કરવા આવતા હતા, પણ જેમ જેમ વિદેશી લોકોનું ભારત પર આક્રમણો થયા.કેવી રીતે ભારતીય શિક્ષણ પ્રણાલીને સંપૂર્ણપણે નષ્ટ કરવામાં આવી ! એ શિક્ષણ પ્રણાલી ને પાછી જીવંત કરવા માટે એકતા એજ લક્ષ્ય સંગઠન સામાજિક લોકોની મદદથી આવી સનાતની શાળાઓ અને ગુરુકુળો ની સ્થાપના કરશે.
          ભારતના જે સાચા ઈતિહાસો છે એને ફરીથી ઉજાગર કરી લોકો સમક્ષ રજુ કરવા.
          આપણા ઈતિહાસો,વેદો અને શાસ્ત્રોમાં જે છેડછાડ કરવામાં આવ્યા છે અને એને ખોટી રીતે પ્રયોગ કરી લોકો સમક્ષ રજૂ કરવામાં આવી રહ્યા છે,તેને રોકી સાચા ઈતિહાસ, સાચા શાસ્ત્ર,વેદ તથા જ્ઞાન લોકો સુધી અવગત કરાવું.
          વૈદિક સંસ્કૃતિનો પ્રચાર કરી લોકોને યોગ અને વેદ તરફ લઈ જવા.
          `}</p>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUsPage;

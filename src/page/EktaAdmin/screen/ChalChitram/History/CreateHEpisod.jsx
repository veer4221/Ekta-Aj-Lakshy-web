import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Divider, Grid, TextField, IconButton } from "@material-ui/core";
import { lighten, makeStyles } from "@material-ui/core/styles";

import TablePagination from "@material-ui/core/TablePagination";

import Paper from "@material-ui/core/Paper";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CreateIcon from "@material-ui/icons/Create";
import { Form, Button, Row, Col } from "react-bootstrap";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useNavigate, useParams } from "react-router";

import { useEffect } from "react";
import { createVideoAPI } from "../../../../../api";
// import { convertBase64, blobToBase64 } from '../../helper/base64Converter'
// import { convertBase64 } from "../../../../helper/base64Converter";
// import { createPostAPI } from "../../../../api";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function CreateHEpisod() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params)
  const [image, setImage] = useState();
  const [isimage, setIsImage] = useState(false);
  const [title, setTitle] = useState();
  const [video_description, setvideo_description] = useState(
    `એકતાએજલક્ષ્યસંગઠનનુંલક્ષ્યએકતા એજ લક્ષ્ય સંગઠન ની શરૂઆત ગુજરાત થી થઈ છે એકતા એજ લક્ષ્ય સંગઠન છ પુખ્ત શાખા તથા પાચ પેટા શાખા અને એક આ દરેક નું નિયંત્રણ કરતી મુખ્ય શાખા સાથે સનાતન સંસ્કૃતિની તમામ બાબતોને આવરી ને હિંદુત્વ ના તમામ મુદ્દા પર કામ કરે છે. આ સંગઠનનો ઉદ્દેશ્ય અલગ અલગ થઈને જાતિઓમાં વહેંચાયેલા દરેક હિંદુ પરિવારો ને એક કરવાનો છે. 800થી વધારે મુગલોના આક્રમણ થયા ૨૦૦ વર્ષથી વધારે અંગ્રેજોના અત્યાચાર સહન કર્યા બાદ આ વિદેશી આક્રમણકારીઓ એ જે ભારતની અંદર ફૂટ પાડી છે, હિંદુઓની અંદર જ્ઞાતિવાદના વાળા ઉભા કર્યા છે અને કહેવાતા રીતિ-રિવાજો કે મૂલ્યો જેમાંના ઘણાં ખરા મૂલ્યો કે રિવાજો ભારતના હતા જ નહીં સંસ્કૃતિની પરંપરા નો હિસ્સો છે જ નહીં પણ આ ષડયંત્ર કર્યા.એ ભાગલા પાડવા અને આગળ જઈ સનાતન સંસ્કૃતિ તૂટી જાય સંપૂર્ણ નષ્ટ થઈ જાય વિનિપાત થઈ જાય એના માટે અનેકો રીતિ રિવાજોનુ ગઠન કર્યું જે ક્યારે ભારત ના હતાજ નહિ, એકતા એજ લક્ષ્ય સંગઠન આવા પાયાવિહોણા રિવાજો તથા સમાજની અંદર વ્યાપેલા દુષણો તથા જ્ઞાતિવાદના વાડા દૂર કરી એકતા સ્થાપવાના પ્રયાસ કરતુ સંગઠન જે સંપૂર્ણપણે ભારતને હિંદુરાષ્ટ્ર બનાવવા ના ઉદ્દેશથી કાર્ય કરે છે. વસુદેવ કુટુંબકમ ની ભાવના એટલા માટે આવે છે કે સમગ્રહ વિશે સનાતન છે પરંતુ જ્યાં સનાતન નું અપમાન થતું હોય ત્યાં વસુદેવ કુટુંબકમ ની ભાવના ના હોય ત્યાં શ્રીકૃષ્ણ નીતિ તથા ચાણક્ય નીતિ થી કામ લેવું જ પડે છે. સંગઠન સમાજ ને સાચી દિશા આપી લોક સેવા, સમાજ સેવા સાથે સાથે સામાજિક મૂલ્યો નીતિઓ નું સનાતની ગઠન ગૌસેવા, પશુ સેવા, રાજનૈતિક દબાવો (જે સનાતન સંસ્કૃતિના હિતમાં કાયદા કાનુન ફેરફાર માટે) રાજનીતિક, કૂટનીતિક અને રણનીતિક આમ ત્રણ બાબત પર ની પૂર્ણતા થી કાર્ય કરે છે એકતા એજ લક્ષ્ય સંગઠનનું લક્ષ્યો :- અખંડ હિંદુરાષ્ટ્ર ની ભાવના અને ભારતને હિંદુરાષ્ટ્ર બનાવવા માટેના પ્રયાસો. જાતિવાદ માં ફસાયેલા હિંદુઓને સાચી માહિતી તથા દિશા બતાવી એકતાના તાંતણે બાંધવા. સનાતન સંસ્કૃતિ પર થતા ષડયંત્ર ને અર્જુનનું તીર (એન્ટિક મિસાઈલ) બની રોકવા. સમાજની અંદર સમરસતા સ્થાપવા. વિદેશી કાયદાઓ માં ફેરફાર કરાવી સ્વદેશી કાયદાઓ અમલમાં લાવવા. વિદેશી રહેણીકરણી તથા ભાષાને બદલે સ્વદેશી રહેણીકરણી અને ભાષાનો ઉપયોગ કઈ રીતે વધારો એના કાર્યો. ભારતમાંથી લવજેહાદ ને સંપૂર્ણ રીતે નષ્ટ કરવું. ભારતમાં દરેક પ્રકારના જેહાદ થઈ રહ્યા છે, તેને સંપૂર્ણ પ્રમાણમાં રોકી સનાતની ગઠન કરવું. ગૌમાતા ની હત્યા સંપૂર્ણ પણે બંધ કરવા માટે ના કાર્યો. દરેક સનાતનીઓને રોજગાર મળી રહે તે માટેના કાર્યો. યુવાધનને સાચી માહિતી તથા રાષ્ટ્રવાદી વિચારધારા થી સફર કરવા, સાચા ઈતિહાસોથી અવગત કરાવવા, તથા યુવાનોને સાચી દિશામાં દોરવા. ભારતને આવનારા સમયમાં મહાસત્તા બનાવવા માટે ના કાર્યો, રણનીતિ અને કૂટનીતિથી સફળ બનાવવા, દરેક સામાન્ય માણસોને પૂરતું જ્ઞાન આપવું તથા માર્ગદર્શન કરવું. કૃષિ પ્રધાન દેશ છે ભારત પરંતુ વિદેશી દવાઓ તથા ખાતર ના કારણે ભારતની કસવાળી જમીન નષ્ટ થઇ રહી છે તો તેને તથા ગૌ આધારિત ખેતી તરફ કઈ રીતે વાળવા તેની સમજણ તથા ઓર્ગેનિક ખેતી નું મહત્વ જણાવી ભારતને સંપૂર્ણ ઓર્ગેનિક બનાવવાના માટેના પ્રયત્નો. આયુર્વેદ ભારતની સૌથી મોટી દેન છે તો આયુર્વેદને ઘર-ઘર સુધી લઈ જવું અને લોકોને આડઅસર વગર બીમારીના ઈલાજો ઘરે બેઠા થાય એ રીતે લોકોને આયુર્વેદ વિશે ની માહિતી આપવી અને એના ઉપચાર કેન્દ્રો ખોલવા. ભારત ને નષ્ટ કરવામાં સૌથી મોટો હાથ વિદેશી શિક્ષણ પ્રણાલીનો છે, દેશ આજે શિક્ષિત હોવા છતાં પણ દિશાહીન થઈ ગયો છે, કેમકે બાહ્ય શિક્ષણ પ્રણાલી ભારત માટે ક્યારેય યોગ્ય છે જ નહિ. આ એ જ ભારત છે કે જ્યાં શિક્ષણ પ્રણાલી માં એ સમજણ એ જ્ઞાન હતું કે વિદેશી લોકો પણ ભારતની અંદર શિક્ષા પ્રાપ્ત કરવા આવતા હતા, પણ જેમ જેમ વિદેશી લોકોનું ભારત પર આક્રમણો થયા.કેવી રીતે ભારતીય શિક્ષણ પ્રણાલીને સંપૂર્ણપણે નષ્ટ કરવામાં આવી ! એ શિક્ષણ પ્રણાલી ને પાછી જીવંત કરવા માટે એકતા એજ લક્ષ્ય સંગઠન સામાજિક લોકોની મદદથી આવી સનાતની શાળાઓ અને ગુરુકુળો ની સ્થાપના કરશે. ભારતના જે સાચા ઈતિહાસો છે એને ફરીથી ઉજાગર કરી લોકો સમક્ષ રજુ કરવા. આપણા ઈતિહાસો,વેદો અને શાસ્ત્રોમાં જે છેડછાડ કરવામાં આવ્યા છે અને એને ખોટી રીતે પ્રયોગ કરી લોકો સમક્ષ રજૂ કરવામાં આવી રહ્યા છે,તેને રોકી સાચા ઈતિહાસ, સાચા શાસ્ત્ર,વેદ તથા જ્ઞાન લોકો સુધી અવગત કરાવું. વૈદિક સંસ્કૃતિનો પ્રચાર કરી લોકોને યોગ અને વેદ તરફ લઈ જવા. એકતા એજ લક્ષ્ય સંગઠનની છ પુખ્ત શાખાઓ અને પાંચ પેટા શાખાઓ આ પ્રમાણે છે :- 1) મુખ્ય શાખા:- પેટા શાખા 1) અર્જુન શાખા 2)સમરસતા શાખા 2) યુવા શાખા :- 3) કામધેનુ શાખા :- 4) હિંદુ રોજગાર શાખા:- પેટા શાખા 1) ધરતીપુત્ર શાખા 5) આઈટી સેલ શાખા:- 6) પ્રચાર-પ્રસાર શાખા:- 7) નારી શક્તિ શાખા:- પેટા શાખા 1) ગૃહિણી ઘડતર:- 2)ગૃહિણી વિકાસ:`
  );
  const [episode_number, setepisode_number] = useState(parseInt(params.episod));
  const [video_title, setvideo_title] = useState("");
  const [video_url, setvideo_url] = useState("");
  const [video_length, setvideo_length] = useState("");
  const [video_category, setvideo_category] = useState("");
  const [video_type, setvideo_type] = useState("video");
  const [videoImage, setVideoImage] = useState("");
  const keywords = [
    { value: "સમગ્ર", enum: "all" },
    { value: "ચૂકશો નહીં", enum: "important" },
    { value: "રોજગારશાખા", enum: "rojgharShakha" },
    { value: "મુખ્યશાખા", enum: "mukhyaShakha" },
    { value: "આઇટી સેલ", enum: "itcell" },
    { value: "નારી શક્તિ શાખા", enum: "nariShakha" },
    { value: "યુવા શાખા", enum: "yuvaShakha" },
    { value: "કામધેનુ શાખા", enum: "kamdhenuShakha" },
    { value: "પ્રચાર-પ્રસાર શાખા", enum: "pracharprasarShakha" },
    { value: "એકલવ્ય સમિતિ", enum: "eklavySamiti" },
    { value: "સમર્પણ સમિતિ", enum: "samarpanSamiti" },
    { value: "ગુપ્ત સમિતિ", enum: "guptSamiti" },
    { value: "કામધેનુ સમિતિ", enum: "kamdhenuSamiti" },
  ];
  const classes = useStyles();
  const url = window.location.href;
  const getLastItem = (thePath) =>
    thePath.substring(thePath.lastIndexOf("/") + 1);

  const dispatch = useDispatch();
  const addPostFuncOnSubmit = async () => {
    // const v = await blobToBase64(image)
    // console.log(v)
    //   {
    //     "video_title":"ram ram",
    //    "video_url":"https://www.youtube.com/watch?v=nIXTEzMvEuI&ab_channel=HinduYUVAUSA",
    //    "video_length":"22:28",
    //    "video_category":"yuvaShakha",
    //    "video_type":"video"
    //  }
    // const res = await createPostAPI(post);
    // if (res.data.success == true && res.status === 200)
    //   navigate(`/ektaAdmin/PostList`);
    // dispatch(addPostAction(post))
  };

  const submitfunc = async (e) => {
    e.preventDefault();
   

    const payload = {
      episode_number,
      video_title,
      video_description,
      video_url,
      video_length,
      video_category:"history",
      video_type:"history",
      history_id: params.id,
    };
    const res = await createVideoAPI(payload);
    if (res.data.success == true && res.status === 200)
      navigate(`/EktaAdmin/HEpisodList/${params.id}`);
    //  console.log("payload::",payload);
  };

  return (
    <div className={classes.root}>
      <Form
        // style={{ paddingLeft: "50px", paddingRight: "50px" }}
        onSubmit={submitfunc}
      >
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <div style={{ display: "flex" }}>
              <h4 style={{ color: "grey", paddingLeft: "10px", width: "50%" }}>
                Hએપિસોડ ઉમેરો
              </h4>
              <div
                style={{
                  textAlign: "right",
                  width: "50%",
                  paddingRight: "10px",
                }}
              >
                <Button
                  variant="success"
                  onClick={() => navigate(`/EktaAdmin/HEpisodList/${params.id}`)}
                >
                  <ArrowBackIcon />
                  Back
                </Button>
              </div>
            </div>
            <br></br>
            <Divider />
            <div style={{ width: "90%", textAlign: "right" }}>
              {/* <TextField style={{ paddingRight: '10px' }} id="standard-basic" label="Search" /> */}
            </div>
          </Grid>
          <Grid item xs={6}>
            <Form style={{ paddingLeft: "50px", paddingRight: "50px" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                {" "}
                <Form.Label style={{ color: "#4153a4" }}>
                  Video Titel
                </Form.Label>
                <Form.Control
                  style={{ backgroundColor: "#eeeff7" }}
                  type="text"
                  placeholder="name@example.com"
                  onChange={(e) => setvideo_title(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                {" "}
                <Form.Label style={{ color: "#4153a4" }}>
                  Episod Number
                </Form.Label>
                <Form.Control
                value={episode_number}
                  style={{ backgroundColor: "#eeeff7" }}
                  type="number"
                
                  onChange={(e) => setepisode_number(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label style={{ color: "#4153a4" }}>Video URL</Form.Label>
                <Form.Control
                  style={{ backgroundColor: "#eeeff7" }}
                  as="textarea"
                  rows={1}
                  onChange={(e) => {
                    setvideo_url(e.target.value);
                    var URL = [];
                    URL[0] = e.target.value;
                    var i,
                      r,
                      result,
                      rx =
                        /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

                    for (i = 0; i < URL.length; ++i) {
                      r = URL[i].match(rx);
                      result = r[1];
                    }

                    setVideoImage(
                      `https://img.youtube.com/vi/${result}/sddefault.jpg`
                    );
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label style={{ color: "#4153a4" }}>
                  Video Length
                </Form.Label>
                <Form.Control
                  style={{ backgroundColor: "#eeeff7" }}
                  as="textarea"
                  rows={1}
                  onChange={(e) => setvideo_length(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label style={{ color: "#4153a4" }}>
                  Video Description
                </Form.Label>
                <Form.Control
                value ={video_description}
                  style={{ backgroundColor: "#eeeff7" }}
                  as="textarea"
                  rows={5}
                  onChange={(e) => setvideo_description(e.target.value)}
                />
              </Form.Group>

              
            </Form>
          </Grid>
          <Grid item xs={4}>
            <img
              style={{ border: "1px solid black" }}
              src={videoImage}
              alt="veer"
              width="600px"
              height="400px"
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="success"
                type="submit"
                style={{ margin: "10px" }}
              >
                create
              </Button>
            </div>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
}

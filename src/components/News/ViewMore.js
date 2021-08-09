import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { Grid } from "@material-ui/core";
// import "../../../style/aboutUsMtextView.css";
import "../../style/buttoncss.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewMore({ Image }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="ourBtn">
      <Button color="primary" onClick={handleClickOpen}>
        || Read More ||
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar} style={{ backgroundColor: "white" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              style={{
                color: "rgb(172, 24, 24)",
              }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h6"
              className={classes.title}
              style={{
                color: "rgb(172, 24, 24)",
                fontFamily: "Samarkan",
                fontSize: "30px",
              }}
            >
              Ekta Ej Laksh
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container spacing={3} className="page">
          <Grid item xs={12}>
            <h1
              style={{
                textAlign: "center",
                color: "rgb(172, 24, 24)",
                paddingTop: "5px",
                fontFamily: "Samarkan",
              }}
            >
              {" "}
              || Post ||
            </h1>
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={Image}
                Width="60%"
                height="80%"
                style={{ border: "5px solid rgb(172, 24, 24)" }}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <h3
              style={{
                textAlign: "center",
                color: "rgb(172, 24, 24)",
                fontFamily: "Samarkan",
                paddingTop: "5px",
              }}
            >
              || Post Titel ||
            </h3>

            <p
              style={{
                padding: "10%",
                color: "rgb(199, 38, 38)",
                wordWrap: "break-word",
              }}
            >
              ऋग्वेद की व्याख्या या टीका करने वाले पंडितों ने ऋग्वेद के मंत्रों
              का वर्गीकरण अष्टकों, कांडों के अनुसार किया है लेकिन ऊपर डाउनलोड
              करने के लिए दिये गए पुस्तक में लेखक ने ऋग्वेद का वर्गीकरण अध्यायों
              के अनुसार किया हैं। पूरे ऋग्वेद में कुल 10 अध्याय हैं। वेद के
              विभिन्न अंग और उपांग हिंदू धर्म के चारों वेदों के शिक्षा, कल्प,
              निरूक्त, व्याकरण, छंद, व्याकरण और ज्योतिष 6 अंग हैं और सांख्य,
              योग, वैशेषिक, न्याय, मीमांसा और वेदांत ये 6 उपांग हैं। इन छह अंग
              और उपांगों को ही दर्शन किया जाता है। श्रुति धर्मग्रन्थ उपनिषद भी
              वेदों के ज्ञान का विस्तार ही हैं। महर्षि कृष्णद्वैपायन वेदव्यास
              पुराणों के रचयिता हैं। महर्षि वेदव्यास का नाम 'व्यास' भी इसीलिए
              पड़ा क्योंकि उन्होंने वेदों के ज्ञान कि व्याख्या की थी। यजुर्वेद,
              सामवेद, अथर्ववेद और ऋग्वेद स्तुति यानी प्रशंसा प्रधान ग्रन्थ हैं।
              ऋग्वेद में अग्नि, इन्द्र, वरूण आदि देवताओं की प्रशंसा और स्तुति कि
              गई हैं और इसमें देवताओं को परमात्मा प्रतिरूप माना गया हैं। ऋग्वेद
              में देवताओं के स्तुतियों के अलावा जीव और प्रकृति, ज्ञान और विज्ञान
              तथा इस संसार के विभिन्न पदार्थों का उल्लेख है। इस वेद के विवरणों
              में उस समय की पूरी तरह विकसित आर्य लोगों की राती-रिवाजों, सामाजिक
              नियमों एवं व्यवहारों का पता भी चलता है। चोरी, धोखा एवं विश्वासघात
              जैसे कई अपराधों और मनुष्य के दोषों का वर्णन भी इस ग्रंथ में हैं।
              ----*---- केवल पढ़ने के लिए: घर का स्वामी, समाज का मालिक, गुरू या
              महनत सहनशील बनकर ही अनुयायियों को सन्मार्ग में लगाये रख सकते हैं।
              असहनशील स्वामी या गुरू परिवार या समाज को नहीं चला सकता। यही बात
              अधीनस्थ सदस्यों पर भी है। वे भी यदि सहनशील न हों तो परिवार या समाज
              में न निभ सकते हैं और न कोई उन्नति कर सकते हैं। जिस परिवार या समाज
              में आपस में कटाकटी चलती है, वह शीघ्र नष्ट हो जाता है। समाज का कोई
              सदस्य गड़बड़ हो तो केवल वही गिरेगा, किन्तु यदि मालिक या गुरू गड़बड़
              तथा असहनशील हो तो समाज बिखर जायेगा। यदि स्वामी या गुरू ठीक है, तो
              समाज व्यवस्थित रहेगा। विनम्रता केवल अधीनस्थ सदस्यों में ही
              विनम्रता चाहिए, ऐसी बात नहीं है, किन्तु परिवार एवं समाज के स्वामी
              एवं गुरू में भी विनम्रता की महान आवश्यकता है। स्वामी एवं गुरू को
              तो अधिक विनम्र होना चाहिए। विनम्र होकर ही वह साथियों को सम्हाल
              पायेगा। अहंकारी एवं अकड़बाज स्वामी या गुरू अनुगामियों को क्षुब्ध
              बनाकर उनसे कट जाता है। जो जितने ही ऊंचे पद पर हो, उसे उतना ही मन
              से विनम्र होना चाहिए, तभी वह किसी समूह को अनुशासित कर सकता है।
              स्वार्थ-त्याग एवं क्षमावृत्ति अपने मन के स्वार्थ को जीतकर ही
              अनुगामियों की रक्षा की जा सकती है। साथियों के मन तथा शरीर की रक्षा
              करना स्वामी का कर्तव्य है। स्वामी या गुरू को चाहिए कि वह
              अनुगामियों को मानसिक सन्तोष दे तथा उनकी शारीरिक व्याधि में उनके
              साथ सहानुभूति एवं उनकी यथाशक्ति चिकित्सा एवं सेवा का प्रबन्ध करे।
              सद्गुणों की चर्चा, सत्योपदेश तथा रचनात्मक दिशा में प्ररेणा देकर ही
              अनुगामियों को मानसिक सन्तोष दिया जा सकता है। अपने अनुगामियों की हर
              प्रकार से रक्षा करना स्वामी या गुरू का कर्तव्य है। स्नेहभाव स्वामी
              या गुरू को मां की तरह स्नेहहृदय होना चाहिए। स्वामी एवं गुरू के
              मीठे वचन, कोमल व्यवहार एवं{" "}
            </p>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}

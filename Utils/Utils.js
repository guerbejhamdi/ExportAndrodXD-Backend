

const Button = require('../Widgets/Button');
const EditText = require('../Widgets/EditText');
const TextView = require('../Widgets/TextView');
const ImageView = require('../Widgets/ImageView');
const ScrollView = require('../Widgets/ScrollView');
const Relativelayout = require('../Widgets/Relativelayout');
const Switch = require('../Widgets/Switch');


class Utils{

static ParseByAndroidClass(element,typeWidget,doc) {
    if(typeWidget=="Button"){
      console.log("eni bouton");
        new Button().Parsejsontoxml(element,doc); 
    }else if (typeWidget=="EditText"){
      console.log("eni EditText");
      new EditText().Parsejsontoxml(element,doc); 
      // new EditText().GenerateWidget();
    }else if(typeWidget=="TextView"){ 
      console.log("eni TextView");
      new TextView().Parsejsontoxml(element,doc); 
    //  new TextView().GenerateWidget();
    }else if(typeWidget=="ImageView"){ 
      console.log("eni ImageView");
      new ImageView().Parsejsontoxml(element,doc); 
    }else if(typeWidget=="Relativelayout"){ 
      console.log("eni Relativelayout");
      new Relativelayout().Parsejsontoxml(element,doc);
    }else if(typeWidget=="Switch"){ 
      console.log("eni Switch");
      new Switch().Parsejsontoxml(element,doc);
    } if(typeWidget=="ScrollView"){ 
      console.log("eni ScrollView");
      new ScrollView().Parsejsontoxml(element,doc); 
    }
    
    else{

      return {};
            // let data={};
            //     data["NOTYPE"]="NOTYPE";
            // return data;
          }

    }


}



module.exports = Utils


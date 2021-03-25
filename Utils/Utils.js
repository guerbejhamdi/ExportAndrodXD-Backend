

const Button = require('../Widgets/Button');


class Utils{

static ParseByAndroidClass(element,typeWidget,doc) {
    if(typeWidget=="Button"){
      console.log("eni bouton");
        new Button().Parsejsontoxml(element,doc); 
    }else if (typeWidget=="EditText"){
      // new EditText().GenerateWidget();
    }else if(typeWidget=="TextView"){ 
    //  new TextView().GenerateWidget();
    }else{

      return {};
            // let data={};
            //     data["NOTYPE"]="NOTYPE";
            // return data;
          }

    }


}



module.exports = Utils


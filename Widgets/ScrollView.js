const Widget = require('../Widgets/Widget');
var builder = require('xmlbuilder');
const Utils = require('../Utils/Utils');

/**
 * ScrollView.
 *
 * @class ScrollView
 * @extends {Widget}
 */
class ScrollView extends Widget{


    Parsejsontoxml(element,doc) {




        var constraintlayout = builder.create('androidx.constraintlayout.widget.ConstraintLayout');
        constraintlayout.att('android:layout_width', 'match_parent');
        constraintlayout.att('android:layout_height', 'match_parent'); 

        element.children.forEach(child => {

            Utils.ParseByAndroidClass(child,child[".class"],constraintlayout);
                
          });


       
        
        if(element["scrollingType"]=="horizontal"){

           











    }else {








    }


}


}



module.exports = ScrollView

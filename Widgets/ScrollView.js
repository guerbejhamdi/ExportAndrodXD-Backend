const Widget = require('../Widgets/Widget');
var builder = require('xmlbuilder');
//const Utils = require('../Utils/Utils');

/**
 * ScrollView.
 *
 * @class ScrollView
 * @extends {Widget}
 */
class ScrollView extends Widget{


    Parsejsontoxml(element,doc) {


        const Utils = require('../Utils/Utils');

        var constraintlayout = builder.create('androidx.constraintlayout.widget.ConstraintLayout');
        constraintlayout.att('android:layout_width', 'wrap_content');
        constraintlayout.att('android:layout_height', 'wrap_content'); 

        element.children.forEach(child => {

            Utils.ParseByAndroidClass(child,child[".class"],constraintlayout);
                
          });


       
        
        if(element["scrollingType"]=="horizontal"){

            var parentLayout = builder.create('HorizontalScrollView');

         } else {

            var parentLayout = builder.create('ScrollView');

            }
            parentLayout.att('android:layout_width', element["width"]+"dp");
            parentLayout.att('android:layout_height',element["height"]+"dp" ); 

           
            parentLayout.att('app:layout_constraintEnd_toEndOf','parent'); 
            parentLayout.att('app:layout_constraintStart_toStartOf','parent'); 
            parentLayout.att('app:layout_constraintTop_toTopOf','parent'); 


            parentLayout.att('android:layout_marginStart',element["x"]+"dp" ); 
            parentLayout.att('android:layout_marginTop',element["y"]+"dp" ); 

    
            parentLayout=parentLayout.importDocument(constraintlayout);
            doc=doc.importDocument(parentLayout);

}


}



module.exports = ScrollView

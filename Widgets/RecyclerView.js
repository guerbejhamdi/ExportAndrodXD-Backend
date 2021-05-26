const JavaGen = require("../Utils/JavaGen");
const Widget = require("./Widget");
const dotenv = require('dotenv');
var builder = require('xmlbuilder');

var fs = require('fs');
/**
 * RecyclerView.
 *
 * @class RecyclerView
 * @extends {Widget}
 */



dotenv.config({
  path: './config/config.env'
});
class RecyclerView extends Widget {


  Parsejsontoxml(element, doc) {
    const Utils = require("../Utils/Utils");
    var dirPastLivePath = __dirname + process.env.DIR_PASTLIVE_PATH;
    const nb = nbIter;

    let item = doc.ele("androidx.recyclerview.widget.RecyclerView");
    item.att('android:id', "@+id/recycler" + nb);
    item.att('android:layout_width', element["width"] + "dp");
    item.att('android:layout_height', element["height"] + "dp");
    item.att('app:layout_constraintStart_toStartOf', 'parent');
    item.att('app:layout_constraintTop_toTopOf', 'parent');
    item.att('android:layout_marginStart', element["x"] + "dp");
    item.att('android:layout_marginTop', element["y"] + "dp");
    if (element["marginRight"] != undefined) {
      item.att('app:layout_constraintEnd_toEndOf', 'parent');
      item.att('android:layout_marginEnd', element["marginRight"] + "dp");
    }

    if(element["marginBottom"]!=undefined){
      item.att('app:layout_constraintBottom_toBottomOf','parent');
      item.att('android:layout_marginBottom',element["marginBottom"]+"dp" ) ;
    }

    item.up()



    var row = builder.create('androidx.constraintlayout.widget.ConstraintLayout');
    row.att('xmlns:android', 'http://schemas.android.com/apk/res/android');
    row.att('xmlns:app', 'http://schemas.android.com/apk/res-auto');
    row.att('xmlns:tools', 'http://schemas.android.com/tools');
    row.att('android:layout_width', element["cellSize"]["width"] + "dp");
    row.att('android:layout_height', (element["cellSize"]["height"] + element["paddingY"]) + "dp");





    element.children.forEach(child => {

      Utils.ParseByAndroidClass(child, child[".class"], row);

    });


    JavaGen.generateModelClass(element, nb);
    JavaGen.generateAdapter(element, nb);
    importActivity = JavaGen.generateRecyclerImport();
    attributeActivity = JavaGen.generateRecyclerAttributs(nb);
    codeActivity = JavaGen.generateRecyclerCode(element, nb);

    global.nbIter = (++global.nbIter);

    row = row.toString({ pretty: true })

    fs.writeFile(dirPastLivePath + "row" + nb + ".xml", row, 'utf8', function (err) {
      if (err) return console.log(err);

    });


  }




}



module.exports = RecyclerView

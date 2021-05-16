

const fs = require('fs');
const dotenv = require('dotenv');


dotenv.config({
    path: './config/config.env'
});
class JavaGen {


    static generateModelClass(recycler, iter) {

        var dirPastRecyclerPath = __dirname + process.env.DIR_PASTE_CLASS_MODEL_PATH;


        fs.readFile('./RecyclerModel/ClassModel.txt', 'utf8', function (err, data) {

            if (err) {
                return console.log(err);
            }


            var constructorParams = "";
            var contentConstructor = ""


            data = data.replace(/ClassName/g, "Class" + iter);

            for (const child of recycler.children) {
                data = generateCodeJavaFromElement(child, data);
                constructorParams += "," + convertType(child[".class"]) + " " + child[".id"];
                contentConstructor += "this." + child[".id"] + " = " + child[".id"] + " ;\n        ";


            }
            data = data.replace("//parms", constructorParams.substring(1));
            data = data.replace("//ContentConstra", contentConstructor);

            data = data.replace("//Attribute", "");
            data = data.replace("//Getter", "");
            data = data.replace("//Setter", "");

            const name = "Class" + iter;
            console.log(name);

            fs.writeFile(dirPastRecyclerPath + name + ".java", data, 'utf8', function (err) {
                if (err) return console.log(err);

                console.log(iter);

            });

        })


    }

    static generateAdapter(recycler, iter) {

        var dirPastRecyclerPath = __dirname + process.env.DIR_PASTE_CLASS_MODEL_PATH;

        fs.readFile('./RecyclerModel/AdapterModel.txt', 'utf8', function (err, data) {

            if (err) {
                return console.log(err);
            }
            data = data.replace(/AdapterName/g, "Adapter" + iter);
            data = data.replace(/ClassName/g, "Class" + iter);
            data = data.replace(/rowName/g, "row" + iter);

            for (const child of recycler.children) {
                data = generateCodeAdapterFromElement(child, data);

            }

            data = data.replace("//BindView", "");
            data = data.replace("//viewHolderAttribute", "");
            data = data.replace("//viewHolderContent", "");




            const name = "Adapter" + iter;
            console.log(name);


            fs.writeFile(dirPastRecyclerPath + name + ".java", data, 'utf8', function (err) {
                if (err) return console.log(err);

                console.log(nbClass);

            });


        })


    }


}
function generateCodeAdapterFromElement(element, data) {

    const type = element[".class"];
    const name = element[".id"];
    data = data.replace("//BindView", BindView(element) + "\n        //BindView");
    data = data.replace("//viewHolderAttribute", generateAttribute(type, name) + "\n        //viewHolderAttribute");
    data = data.replace("//viewHolderContent", viewHolderContent(element) + "\n            //viewHolderContent");

    return data;


}

function generateCodeJavaFromElement(element, data) {
    const type = convertType(element[".class"]);
    const name = element[".id"];
    data = data.replace("//Attribute", generateAttribute(type, name) + "\n    //Attribute");
    data = data.replace("//Getter", generateGetter(type, name) + "\n    //Getter");
    data = data.replace("//Setter", generateSetter(type, name) + "\n    //Setter");

    return data;
}

function BindView(element) {

    if (element[".class"] == "ImageView") {

        return "holder." + element[".id"] + ".setImageResource(singleItem.get" + capitalizeFirstLetter(element[".id"]) + "());";

    } else if (element[".class"] == "TextView") {

        return "holder." + element[".id"] + ".setText(singleItem.get" + capitalizeFirstLetter(element[".id"]) + "());";

    }



}




function viewHolderContent(element) {

    return element[".id"] + " = itemView.findViewById(R.id." + element[".id"] + ")";


}
function generateGetter(typeAttribute, nameAttribute) {

    return "public " + typeAttribute + " get" + capitalizeFirstLetter(nameAttribute) + "() { \n     return " + nameAttribute + "; \n  }";


}
function generateSetter(typeAttribute, nameAttribute) {

    return "public void set" + capitalizeFirstLetter(nameAttribute) + "(" + typeAttribute + " " + nameAttribute + ") { \n     this." + nameAttribute + "= " + nameAttribute + "; \n  }";

}
function generateAttribute(typeAttribute, nameAttribute) {

    return "private " + typeAttribute + " " + nameAttribute + ";";

}




function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function convertType(type) {
    if (type == "ImageView") {
        return "int";

    } else if (type == "TextView") {
        return "String";

    }

}




module.exports = JavaGen


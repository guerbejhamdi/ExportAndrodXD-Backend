

 const fs  = require('fs');
 const dotenv = require('dotenv');

 
dotenv.config({
    path: './config/config.env'
  });
class JavaGen{

    generateGetter(typeAttribute,nameAttribute) {

        return "public "+typeAttribute+" get"+capitalizeFirstLetter(nameAttribute)+"() { \n return "+nameAttribute+"; \n }";

 
    }
    generateSetter(typeAttribute,nameAttribute) {

        return "public "+typeAttribute+" set"+capitalizeFirstLetter(nameAttribute)+"("+typeAttribute+" "+nameAttribute+") { \n this."+nameAttribute+"= "+nameAttribute+"; \n }";
 
    }
   generateAttribute(typeAttribute,nameAttribute) {

        return "private "+typeAttribute+" "+nameAttribute+";";
 
    }


    static generateModelClass(recycler){
       
     var dirPastRecyclerPath = __dirname + process.env.DIR_PASTE_CLASS_MODEL_PATH;

  fs.readFile('./RecyclerModel/ClassModel.txt', 'utf8',  function (err,data) {
    
    if (err) {
      return console.log(err);
    }

  

   


    var constructorParams="";
    var contentConstructor=""

    // data = data.replace(/\/\/Attribute/g, "this is a test \n --tag");
    // data= data.replace(/--tag/g, "this is a test \n --tag");;
       data= data.replace(/ClassName/g, "Class"+nbAdapter);

    
    //   recycler.children.forEach((child) => {
    //     generateCodeJavaFromElement(child,data);
    //     constructorParams+=","+convertType(child[".class"])+" "+child[".id"];
    //     contentConstructor+="this."+child[".id"]+" = "+ child[".id"]+" ;\n";
             
    //    });

       for  (const child of recycler.children) {
        data= generateCodeJavaFromElement(child,data);
        constructorParams+=","+convertType(child[".class"])+" "+child[".id"];
        contentConstructor+="this."+child[".id"]+" = "+ child[".id"]+" ;\n        ";
     
      
        }
        data= data.replace("//parms", constructorParams.substring(1));
        data= data.replace("//ContentConstra",contentConstructor);

        data= data.replace("//Attribute","");
        data= data.replace("//Getter", "");
        data= data.replace("//Setter", "");
     
        
    
      fs.writeFile(dirPastRecyclerPath+"test2Java"+".java", data, 'utf8', function (err) {
            if (err) return console.log(err);
        
        
        });
     //  return data;
  })


    }
 





    }
    function generateGetter(typeAttribute,nameAttribute) {

        return "public "+typeAttribute+" get"+capitalizeFirstLetter(nameAttribute)+"() { \n     return "+nameAttribute+"; \n  }";

 
    }
    function  generateSetter(typeAttribute,nameAttribute) {

        return "public void set"+capitalizeFirstLetter(nameAttribute)+"("+typeAttribute+" "+nameAttribute+") { \n     this."+nameAttribute+"= "+nameAttribute+"; \n  }";
 
    }
    function  generateAttribute(typeAttribute,nameAttribute) {

        return "private "+typeAttribute+" "+nameAttribute+";";
 
    }



    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    function convertType(type){
        if(type=="ImageView"){
            return "int" ;

        }else if(type=="TextView")
        {
            return "String";

        }

    }

     function generateCodeJavaFromElement(element,data){
        const type =convertType(element[".class"]);
        const name=element[".id"];
        data= data.replace("//Attribute", generateAttribute(type,name)+"\n    //Attribute");
        data= data.replace("//Getter", generateGetter(type,name)+"\n    //Getter");
        data= data.replace("//Setter", generateSetter(type,name)+"\n    //Setter");
     
        return data;
    }


    module.exports = JavaGen






class JavaGen{

    static generateGetter(typeAttribute,nameAttribute) {

        return "public "+typeAttribute+" get"+capitalizeFirstLetter(nameAttribute)+"() { \n return "+nameAttribute+"; \n }";

 
    }
    static generateSetter(typeAttribute,nameAttribute) {

        return "public "+typeAttribute+" set"+capitalizeFirstLetter(nameAttribute)+"("+typeAttribute+" "+nameAttribute+") { \n this."+nameAttribute+"= "+nameAttribute+"; \n }";
 
    }
    static generateAttribute(typeAttribute,nameAttribute) {

        return "private "+typeAttribute+" "+nameAttribute+";";
 
    }
 





    }


    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }


    module.exports = JavaGen


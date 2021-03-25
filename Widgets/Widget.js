

class Widget {

    constructor() {
        if (this.constructor == Widget) {
          throw new Error("Abstract classe can't be instantiated.");
        }
      }
    
      GenerateWidget(any) {
        throw new Error("Method GenerateWidget must be implemented.");
      }

      
    


}


module.exports = Widget

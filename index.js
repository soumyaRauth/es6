/**
 * Constructor function
 */


function Language(){
    this.title="Japanese";
    this.country="Japan";
    this.speak=function (){
        console.log("Speak");
    }
}

const lang=new Language();
lang.speak();
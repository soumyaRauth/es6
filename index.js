/**
 * Hoisting 
 * Here the variable is declared after it's initialization 
 * But still it will work because during the compilation, JS will pull all off it's declaration 
 * to the top of the script. As a result var1 here will have a declaration available
 * But let will display error because the concept of hoisting does not apply on let
 */

if(true){
    var1=2;
    console.log(var1)
        var var1;
}




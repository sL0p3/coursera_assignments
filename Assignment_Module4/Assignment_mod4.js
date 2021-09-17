var somenames = new Array();
somenames[0] = "Yaakov";
somenames[1] = "Jhon";
somenames[2] = "Jen";
somenames[3] = "jason";
somenames[4] = "paul";
somenames[5] = "frank";
somenames[6] = "larry";
somenames[7] = "paula";
somenames[8] = "laura";
somenames[9] = "jim";

for (var i = 0; i< somenames.length; i++){
    if (somenames[i].charAt(0) ==='J' || somenames[i].charAt(0)==='j'){
        console.log("Goodbye "+ somenames[i]);
    }
    else{
        console.log("Hello "+ somenames[i]);
    }
}
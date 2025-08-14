
// problem- 01

function totalFine( fare ) {
   
    if(fare <= 0 || typeof fare !== "number"){
       return "Invalid"
    } else {
       let fine = fare + fare * (20 / 100) + 30; 
        return fine;
    }
      
}

// problem - 02


function  onlyCharacter( str ) {
         if(typeof str !== "string"){
            return "Invalid";
         } else {
           return str.replaceAll(' ', '').toUpperCase();
         }
}

// problem-03

function  bestTeam( player1, player2 ) {
  if( typeof player1 !== "object" || typeof player2 !== "object"  ){
    return "Invalid";
  } else{
    let sum1 = player1.foul + player1.cardR + player1.cardY;
    let sum2 = player2.foul + player2.cardY + player2.cardR;
    // first similer nested
     if(sum1 === sum2){
       return "Tie";
     }
    //  second similer nested
    if(sum1 > sum2){
        return player2.name;
    }else {
        return player1.name;
    }
  }
}

 // problem - 04

function  isSame(arr1 , arr2 ) {
       if(!Array.isArray(arr1) || !Array.isArray(arr2)){
           return "Invalid"
       } else {
        //  first nested 
             let lengthCount = arr1.length;
             let lengthCount2 = arr2.length;
            if(lengthCount !== lengthCount2){
               return false;
            }
            for(let i = 0; i < arr1.length; i++){
              if(arr1[i] !== arr2[i]) {
                return false;
              }
              
            }
            return true;
       }
}

// problem - 05
function  resultReport( marks ) {
          if(!Array.isArray(marks)){
           return "Invalid"
       } 
       let failCount = 0;
       let passCount = 0;
       let sum = 0;
       for(let i = 0; i < marks.length; i++){
         sum = sum + marks[i];
         if(marks[i] >= 40){
           passCount ++
         } 
         if(marks[i] < 40){
           failCount ++
         }
       }
       let average = marks.length === 0 ? 0 : Math.round(sum / marks.length);
      //  create object
      let report = {
        finalScore : average,
          pass : passCount,
          fail: failCount
      }
      return report;
       
}








   




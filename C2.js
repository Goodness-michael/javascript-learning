// there are ttwo gymnast teams Dolphins and pandas
// they compete 3times
// the team with highest average score wins
// calculate the average for each team

// test data
// data 1:dolphins score 96, 108 and 89. pandas score 88,91 and 110

let dolphinsScore =(96 +108+ 89);
 console.log(dolphinsScore);

  dolphinsAverage = dolphinsScore/3
  console.log(dolphinsAverage);

  let pandasScore =(88+91+110);
  console.log(pandasScore);
  pandasAverage =pandasScore/3
  console.log(pandasAverage);

  if (dolphinsAverage>pandasAverage){
     console.log("dolphin wins");}
     else if(dolphinsAverage< pandasAverage){
        console.log("panda wins");
     } else{console.log("this is a tie");}



     if(dolphinsAverage>pandasAverage && dolphinsAverage>= 100){
        console.log("dolphin wins");
     }else if (dolphinsAverage < pandasAverage && pandasAverage>=100){
        console.log("panda wins");
     } else{
        console.log ("no team wins")
     }

     
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

function alphabetWar(fight){
    let score1 = 0;
    let score2 = 0;
    let split = fight.split('')
    split.forEach((letter)=>{
      if(letter === 'z')
        score1 +=1
      if(letter === 'd')
        score1 +=2
      if(letter === 'q')
        score1 +=3
      if(letter === 'm')
        score1 +=4
      if(letter === 's')
        score2 +=1
      if(letter === 'b')
        score2 +=2
      if(letter === 'p')
        score2+=3
      if(letter === 'w')
        score2+=4
    })
    if (score1 > score2) return "Right side wins!"
    else if (score1 < score2) return "Left side wins!"
    else if (score1 == score2) return "Let's fight again!"
  }
  alphabetWar("zdqmwpbs")
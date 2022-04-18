// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

function rgb(r, g, b){
    let colorCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let red1 = Math.floor(r/16)
    let red2 = ((r/16) % 1) * 16
    let green1 = Math.floor(g/16)
    let green2 = ((g/16) % 1) * 16
    let blue1 = Math.floor(b/16)
    let blue2 = ((b/16) % 1) * 16
    
    if(r < 16){
      red1 = 0
    }
    if(r == 16){
      red1 = 1
      red2 = 0
    }
    if(r < 0){
      red1 = 0
      red2 = 0
    }
    
    
    
    if(g < 16){
      green1 = 0
    }
    if(g == 16){
      green1 = 1
      green2 = 0
    }
    if(g < 0){
      green1 = 0
      green2 = 0
    }
    
    
    if(b < 16){
      blue1 = 0
    }
    if(b == 16){
      blue1 = 1
      blue2 = 0
    }
    if(b < 0){
      blue1 = 0
      blue2 = 0
    }
    
    
    
    
    if(r > 255){
      red1 = 15
      red2 = 15
    }
    if(g > 255){
      green1 = 15
      green2 = 15
    }
    if(b > 255){
      blue1 = 15
      blue2 = 15
    }
    return `${colorCodes[red1]}${colorCodes[red2]}${colorCodes[green1]}${colorCodes[green2]}${colorCodes[blue1]}${colorCodes[blue2]}`
    
  }
  
  rgb(0, 0, -20)
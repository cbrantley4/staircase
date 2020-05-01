function staircase(n) {
    const maxStairBlocks = n
    const maxFloors = n
    let stairLayers = []
    for(let i=0;i<maxFloors;i++) {
      let skipBlock = maxStairBlocks -i-1
      let stairBlocks = []
      // we add blocks to the stairLayer
      //  but we skip putting a block depending on the skipBlock variable
      for(let j=0;j<maxStairBlocks;j++) {
        if(skipBlock>0) 
          stairBlocks.push(' ')
        else
          stairBlocks.push('#')
        skipBlock--
      }
      stairLayers.push(stairBlocks)
    }
    console.log(stairLayers)
    for(let row of stairLayers) {
      console.log(row.join(''))
    }
  }
  staircase(6);
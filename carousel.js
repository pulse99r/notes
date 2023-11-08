let data = ['item 1', 'item 2', 'item 3','item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10', 'item 11', 'item 12', 'item 13', 'item 14', 'item 15'];
 
let folder = './img/'; 
let image = folder


let carousel = []
let start = 0
let end = start + 4
let calls = 0
for (let i=start; i<end; i++){
  carousel.push(data[i])
}
console.log('Initial Carousel ===>',carousel)
const move = (dir) => {
  calls += 1
  carousel = []
  let index = 0
  let count = 4;
  if(dir === 'right'){
    start += 1
    index = start
    end = start + 4;
    for (let i=start; i< end; i++){
      if (end < data.length - 1 && count >= 0){
        carousel.push(data[index])
        index += 1
        count -= 1
      } else {
        index = data.indexOf(data.length-1) - 4
      }
    }
  }
  if(dir === 'left'){
    start = data.indexOf(carousel[0]) > 0 ? data.indexOf(carousel[0]) : 0;
    index = start
    end = start + 4;
    for (let i=start; i< end; i++){
      if (end < data.length - 1 && count >= 0){
        carousel.push(data[index])
        index += 1
        count -= 1
      } else {
        index = 0
      }
    }
  }
  
  console.log(calls,dir,carousel)
  return carousel
}

move('right')
move('right')
move('right')
move('right')
move('right')
move('right')
move('right')
move('right')
move('right')
move('right')
move('right')
move('right')
move('right')
move('right')
move('right')
move('right')
move('right')
move('left')
move('left')
move('left')
move('left')
move('left')
move('left')
move('left')
move('left')
move('left')
move('left')
move('left')
move('left')
move('left')
move('left')
move('left')
move('left')
move('left')
move('left')
move('left')
move('right')

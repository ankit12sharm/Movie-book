const leftRow = [
   [0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0],
]
const rightRow = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
]

leftRow.map((e,i) => {
    console.log(e);
    e.map((el,ind) => {
        const div = document.createElement('div');
        div.innerText = 'L' + (ind + (5 * i) + 1)
          if(leftRow[i][ind]==0){
            div.style.background = 'red'
          }
          else{
            div.style.background = 'skyblue'
          }

        div.addEventListener('click',() => {
          let confrimation = confirm('Are you sure,you Booked Seat ? ')

          if(confrimation){
            leftRow[i][ind] = 1;
            div.style.background = 'skyblue'
          }
        })
        document.getElementById('leftRow').append(div)
    })
})
rightRow.map((e,i) => {
    console.log(e);
    e.map((el,ind) => {
        const div = document.createElement('div');
        div.innerText = 'R' + (ind + (5 * i) + 1)
          if(rightRow[i][ind]==0){
            div.style.background = 'red'
          }
          else{
            div.style.background = 'skyblue'
          }
          
        div.addEventListener('click',() => {
          let confrimation = confirm('Are you sure,you Booked Seat ? ')

          if(confrimation){
            rightRow[i][ind] =1;
            div.style.background = 'skyblue'
          }
        })
        document.getElementById('rightRow').append(div)
    })
})

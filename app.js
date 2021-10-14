// function hoverEffect(){
//     const subby = document.querySelector('.box-team-title');
//     subby.classList.add('sub:hover');
// }
// document.querySelector('.box-team').addEventListener('click', hoverEffect);
// hoverEffect();

// const ptag = document.querySelector('.ptag');
// const htag = document.querySelector('htag');
// document.querySelector('.discovered').addEventListener('click', hovA)
// function hovA() {
//     ptag.classList.add('discoveredp');
//     htag.classList.add('discoveredh1');
// }
const text2 = document.getElementById('text');
document.getElementById('discover').addEventListener('click', ()=>{
    document.getElementById('discover').style='width: 80%';
    text2.classList.add('text2')
})
// days =['Sunday','Monday','Tuesday','Wednesday','Tthursday','Friday','Saturday']; 
// var date = new Date();
// todayDate = days[date.getDay()];
// console.log(`yoo its a ${todayDate} in this bitch though`)

// const app = express();
// app.post('/', (req, res) => {
//     req.body.newtodo
//     res.send(toDO);
// });
const inputText = document.querySelector('.input');
 let two ='workout';
 var item = [];
var items;
var newitem;

inputText.addEventListener('click', submit=()=>{
    items = document.getElementById('two');
    document.querySelector('.ptag').innerHTML=items.value;
    item.push(document.querySelector('.ptag').innerHTML)
    console.log(item);
})




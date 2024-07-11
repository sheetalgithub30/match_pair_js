const cards = document.querySelector("#cards");
const attempts = document.querySelector("#attempt");
const restart = document.querySelector("#restart");

var data =[
  {
    emoji:"🚗",
    name:"car",
    show:false,
  },
  {
    emoji:"🐶",
    name:"dog",
    show:false,
  },
  {
    emoji:"🐵",
    name:"monkey",
    show:false,
  },
  {
    emoji:"🍭",
    name:"lolly",
    show:false,
  },
  {
    emoji:"🪔",
    name:"diya",
    show:false,
  },
  {
    emoji:"🚗",
    name:"car",
    show:false,
  },
  {
    emoji:"🪔",
    name:"diya",
    show:false,
  },
  {
    emoji:"🍭",
    name:"lolly",
    show:false,
  },
  {
    emoji:"🦀",
    name:"lobster",
    show:false,
  },
  {
    emoji:"🐶",
    name:"dog",
    show:false,
  },
  {
    emoji:"🦀",
    name:"lobster",
    show:false,
  },
  {
    emoji:"🐵",
    name:"monkey",
    show:false,
  },
  {
    emoji:"⭐",
    name:"star",
    show:false,
  },
  {
    emoji:"🍔",
    name:"Burger",
    show:false,
  },
  {
    emoji:"⭐",
    name:"star",
    show:false,
  },
  {
    emoji:"🍔",
    name:"Burger",
    show:false,
  },

]


var first = -1; 
var second = -1; 
var score = 0;
var attempt = 0;

function displayData(){
    cards.innerHTML="";
    data.forEach((data,index)=>{
        if(data["show"] == true){
            let div = document.createElement("div");
            div.classList.add("active-box");
            let emoji = document.createElement("h1");
            emoji.classList.add("emoji");
            emoji.innerHTML = data["emoji"];
            div.append(emoji);
            cards.append(div)

        }
        else{
            {
                let div = document.createElement("div")
                div.classList.add("box")
                div.addEventListener("click",() => {
                handleClick(index)})
                cards.append(div)
            }
        }
    })
    attempts.innerHTML = attempt;
} 


function handleClick(index)
{
    attempt++;
    if(first == -1)
    {
        data[index]["show"] = true;
        displayData();
        first = index
    }
    else if (second == -1)
    {
        data[index]["show"] = true;
        displayData();
        second = index

        setTimeout(checkImages, 1000 )
      
    }

}


function checkImages()
{
    if(data[first].name == data[second].name)
    {
        first = -1;
        second = -1;

        score += 10;
        document.getElementById("score").innerText = score

    }
    else
    {
        data[first].show = false;
        data[second].show = false;
        first = -1;
        second = -1;
        displayData();
    }
}

function shuffle()
{
    let len = data.length;
    let ans = []
    for(let i = 0 ; i < len ; i++ )
    {
        let randomIndex = Math.floor(Math.random() * data.length)
        ans.push(data[randomIndex])
        data.splice(randomIndex,1)
        
    }
    data = [...ans];
    
}


window.addEventListener("load",()=>{
    displayData();
    shuffle();
})
class WebSeries{
    constructor(title,director,ratings,streamingOn){
        this._title=title;
        this._director=director;
        this._ratings=ratings;
        this._streamingOn=streamingOn;
    }

get title(){
    return this._title;
}
set title(x){
    this._title=x;
}

get director(){
    return this._director;
}
set director(x){
    this._director=x;
}

get ratings(){
    return this._ratings;
}
set ratings(x){
    this._ratings=x;
}
get streamingOn(){
    return this._streamingOn;
}
set streamingOn(x){
    this._streamingOn=x;
}

printDataOnConsole(){
    let title = document.getElementById("title").value;
    let director = document.getElementById("director").value;
    let ratings = document.getElementById("ratings").value;
    let streamingOn = document.getElementById("streamingOn").value;
    let out1 = document.getElementById("output1");

console.log(title);
console.log(director);
console.log(ratings);
console.log(streamingOn);


    out1.innerHTML = title;
    out1.innerHTML = director;
    out1.innerHTML = ratings;
    out1.innerHTML = streamingOn;
}



printData(data){
    console.log("data ", data);
   }

}

const WebSeriesArr =[
    new WebSeries(
        "Inception",
        "Christopher Nolan",
        "8.8",
        "Netflix",
    ),
    new WebSeries(
        "Interstellar",
        "Christopher Nolan",
        "8.7",
        "Netflix"
      ),
      new WebSeries(
        "Prison Break",
        "Paul T. Scheuring",
        "8.3",
        "Amazon Prime"
      ),
      new WebSeries(
        "Rang De Basanti",
        "Rakeysh Omprakash",
        "8.1",
        "Hot Star"
      ),
      
      new WebSeries(
        "Rockstar",
        "Imtiaz Ali",
        "7.7",
        "Amazon Prime"
      ),
      new WebSeries(
        "Air",
        "Ben Affleck",
        "7.3",
        "Netflix"
      ),
];

const myObj = new WebSeries();
for (let i=0; i<WebSeriesArr.length; i++){
    myObj.printData(WebSeriesArr[i]);

    myObj.printData(WebSeriesArr[i].title.toUpperCase());
}

function getValues(){
    myObj.printDataOnConsole();
}

function removeCard(id){
    // console.log(id);

    const element = document.getElementById(id);
    let myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve(); }, 4000);
      });
      myPromise.then(function() {
    element.remove();
  });
}


//   const txt1 = document.getElementById('title')
//   const btn1 = document.getElementById('btn1')
//   const out1 = document.getElementById('output1')

//   function fun1(){
//     out1.innerHTML = txt1.value;
//   }

//   btn1.addEventListener('click',myObj.printDataOnConsole());

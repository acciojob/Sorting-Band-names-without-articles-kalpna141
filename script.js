//your code here
// let arr=['Tajmahal', 'Victoria Memorial', 'The Virupaksha Temple'];
// let updateList=arr.map*((element)=>
// 	{
// 		let words=element.split(" ");
// 		let updateString=words.reduce((prev, current, index)=>{
// 			if(current!='The' && current!="an" && current!="a"){
// 				return prev + " " + current;
// 			}
// 			return prev;
// 		}, "")
// return updateString;
// });
// let mp={};
// updateList.forEach( (element, index) =>{
// 	mp[element]= arr[index];
// });
// updateList.sort();
// let finalAns=updateList.map((element)=>{
// 	return mp[element];
// })
// const ul=document.getElementById("band")
// finalAns.forEach((item)=>
// 	{
// 		const li=document.createElement("li");
// 		li.innerText=item;
// 		ul.append(li);
// 	})

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
touristSpots.sort((a, b) => {
    const articles = /^(The|A|An)\s+/i; 

    const spotA = a.replace(articles, '');
    const spotB = b.replace(articles, '');
  
    return spotA.localeCompare(spotB);
  });
console.log(touristSpots);
  
 const ulElement = document.getElementById('band');


ulElement.innerHTML = '';


touristSpots.forEach((spot) => {
  const liElement = document.createElement('li');
  liElement.textContent = spot;
  ulElement.appendChild(liElement);
});
						   
				  
			

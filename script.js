// let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal']
// let articles = ['A', 'AN', 'THE']
// bandNames.sort((a,b)=>(strip(a)>strip(b))?1:-1)
// const ref= document.getElementByTagName("ul")[0]
// for(let i=0; i<bandNames.length; i++)
// 	{
// 		const li=document.createElement("li")
// 		li.innerText=bandNames[i]
// 		ref.append(li)
// 	}

// function strip(word) {
// 	let arr=word.split(" ")
// 	let s=""
// 	for(let i=0; i<arr.length; i++){
// 		if(articles.indexOf(arr[i].toUpperCase())=== -1)

// 		{
// 			s=s+arr[i];
// 		}
	
// }
//  return s.trim()
				  
// }			
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Pink Floyd'];

function removeArticles(name) {

const articles = ['a', 'an', 'the'];

const words = name.split(' ');

const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));

const modifiedName = filteredWords.join(' ');

return modifiedName;
}
bandNames.sort((a, b) => {
const nameA = removeArticles(a);
const nameB = removeArticles(b);
return nameA.localeCompare(nameB);
});

const bandList = document.getElementById('band');

for (let i = 0; i < bandNames.length; i++) {
const li = document.createElement('li');
li.textContent = bandNames[i];
bandList.appendChild(li);
}

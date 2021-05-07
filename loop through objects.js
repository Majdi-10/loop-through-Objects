function emptyObject(){
return {}
}

//6
function addProperty(object, key){
        object[key]=true    
}
//7
function deleteProperty(object, key){
	delete object[key]
}
//8
function addObjectProperty(object1,key,object2){
	object1[key]=object2
}
// data modling with moussa 
function makeBook(Title1, Author1, Genre1,NumberofPages1,){

	return {
		Title:Title1,
		Author:Author1,
		Genre:Genre1,
		NumberofPages:NumberofPages1,
	}
};

 var book1 = makeBook("The Glass Hotel","Emily St. John Mandel","mystery",320,);
 var book2 = makeBook("Harry Potter and the Sorcerer's Stone","J.K. Rowling","fantasy",308);
 var book3 = makeBook("Romeo and Juliet","William Shakespeare","tragedy",480);

function displaBook(book){
	return "the title is"+ " " +book.Title+ " " +"written by" +" "+ book.Author +" "+ " it gendre is" +" " + book.Genre +" "+ "and it come's with " +" "+ book.NumberofPages +" "+ "pages"
};

var books =[book1,book2,book3]

function displayBooks(books){
	var display =" ";
	for(var i =0;i<books.length;i++){
		display = display + (i+1) +"."+displaBook(books[i])+ "\n"
	}
	return display;
}

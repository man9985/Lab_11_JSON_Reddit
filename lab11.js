$(function () {
	$.get("https://www.reddit.com/r/aww/.json", function(response){
		
		response.data.children.forEach(function(parameter){ 
		var author = parameter.data.author
		var title = parameter.data.title	
		var thumbnail = parameter.data.thumbnail
		var url = parameter.data.url
		var num = parameter.data.num_comments
			

		var	container = $("<div>")
		var	makeTitle = $("<h2 class='inline'>").text(title);
		var makeUrl = $("<a>").attr("href", url);
		var makeImage = $("<img class='thumbnail'>").attr("src", thumbnail);
		var	makeAuthor = $("<p class='inline'>").text(author);
		var	makeComments = $("<p class='inline'>").text(num + " Comments");
		$("#reddit").append(container);
		container.append(makeImage, makeTitle, makeAuthor, makeComments);
		makeTitle.wrap(makeUrl);


	}); 






});


})
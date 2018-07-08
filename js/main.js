// Полифилл matches
(function() {

  // проверяем поддержку
  if (!Element.prototype.matches) {

    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;

  }

})();

// Полифил closest
(function() {

  // проверяем поддержку
  if (!Element.prototype.closest) {

    // реализуем
    Element.prototype.closest = function(css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }

})();

document.addEventListener("click", function (Event) {
	if(!Event.target.closest(".leftPart") && !Event.target.closest(".rightPart") && !Event.target.closest("div.ellips") && !Event.target.closest("p.txt a")) return false;
	if(!Event.target.closest(".disabled")){

		var elem = findRelative(Event.target);

		function findRelative(elem){
			if(!elem.classList.contains("box")) {
				return findRelative(elem.parentNode);
			}else{
				return elem;
			}			
		}

		var paragraph = elem.querySelector("p.txt");

		mouseEnter(null, elem);
		
		if(!elem.classList.contains("selected")){
			elem.classList.add('selected');
			paragraph.classList.add("selected");
			paragraph.innerHTML = paragraph.getAttribute("alternativeContent");
		}else{
			elem.classList.remove('selected');
			paragraph.classList.remove("selected");
			paragraph.innerHTML = "Чего сидишь? Порадуй котэ, <a>купи.</a>";
		}

	}else{
		return false;
	}
});

function mouseEnter(Event, elem){
	if(elem){
		var ellips = elem.querySelector("div.ellips");
		if(!elem.classList.contains("selected")){
			ellips.style.background	= "";
		}else{
			ellips.style.background	= "";
		}
	}else{
		var ellips = Event.target.querySelector("div.ellips");
		if(!Event.target.classList.contains("selected")){
			ellips.style.background	= "#65bae5";
		}else{
			ellips.style.background	= "#dd508a";
		}
	}
				
}

function mouseLeave(Event){
			var ellips = Event.target.querySelector("div.ellips");
			ellips.style.background	= "";
}


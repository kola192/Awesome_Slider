//Selecting Elements
let sliderImgs = Array.from(document.querySelectorAll('.slider-container img')),
		
		slidesCount = sliderImgs.length,
		
		currentSlide = 1,
		
		slideNumberElement = document.getElementById('slide-number'),
		
		nextButton = document.getElementById('next'),
		
		prevButton = document.getElementById('prev'),
		
		Bulets = document.getElementById('indicators');


// Handel next and preveious button
nextButton.onclick = nextSlide;

prevButton.onclick = prevSlide;


//Creat list items for the indicators
 let indicatorElement = document.createElement('ul');

indicatorElement.setAttribute('id', 'indicators-ul')

for(i=1; i<=slidesCount; i++) {
	
	let indicatorItem = document.createElement('li');
	
	indicatorItem.setAttribute('data-index', i);
	
	indicatorItem.appendChild(document.createTextNode(i));
	
	indicatorElement.appendChild(indicatorItem)
	
}


Bulets.appendChild(indicatorElement);


let indicatorList = document.getElementById('indicators-ul');

let indicatorBulets = Array.from(indicatorList.children);



//Handel the number of slides 
for(let i=1; i<indicatorBulets.length; i++) {
	
	indicatorBulets[i].onclick = function(){
		
		currentSlide = parseInt(this.getAttribute
		('data-index'));
		
		cheker();
		
	}
	
}



function nextSlide() {
	
	if(currentSlide >= slidesCount) {
		 	 
			currentSlide = 1;
		
			cheker();
		
		 } else {
			 
			 currentSlide++;
		 
			 cheker();
		 
		 }
	
} 

function prevSlide() {
	if(currentSlide <= 1) {
		  
		currentSlide = slidesCount;
			
		cheker();
		
		 } else {
			 
			 currentSlide--;
		 
		   cheker();
		 
		 }
} 

function cheker() {
	
	slideNumberElement.textContent = `Slide#${currentSlide} of ${slidesCount}`;
	
	removeActive();
	
	sliderImgs[currentSlide - 1].classList.add('active');
	
	indicatorList.children[currentSlide - 1].classList.add('active');
	
}

cheker();


function removeActive() {
	
	sliderImgs.forEach(function (img) {
		
		img.classList.remove('active');
		
	});
	
	
	indicatorBulets.forEach(function (Bulet) {
		
		Bulet.classList.remove('active');
		
	});
	
};

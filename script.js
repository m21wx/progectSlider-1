
	let slider = document.querySelector('.slider')
	
	console.log(slider.clientWidth)
	let index = 0;
	document.querySelector('.slider-1 .ntnIcons .left')
	.addEventListener('click',()=>{
		index = index - 60
		slider.style.transform=`rotateX(-6deg)  rotateY(${index}deg)`
		

	});
	document.querySelector('.slider-1 .ntnIcons .right')
	.addEventListener('click',()=>{
		index = index + 60
		slider.style.transform=`rotateX(-6deg)  rotateY(${index}deg)`
		
	
	})
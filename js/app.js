const contenedorServicio = document.querySelectorAll('.contenedorServicio');
contenedorServicio.forEach(contenedorServicio =>{
	contenedorServicio.addEventListener('click', () =>{
		contenedorServicio.classList.toggle('active');
	})
})

const fresco = document.querySelectorAll('.fresco');
fresco.forEach(fresco  =>{
	fresco.addEventListener('click', () =>{
		fresco.classList.toggle('active');
	})
})

const grande= document.querySelector('.grande')
const punto= document.querySelectorAll('.punto')

punto.forEach( ( cadaPunto, i ) =>{
	punto[i].addEventListener('click',()=>{
		let position= i 
		let operacion= position * -20
		grande.style.transform = `translateX(${ operacion }%)`

		punto.forEach((cadaPunto, i) =>{
			punto[i].classList.remove('activo')
		})

		punto[i].classList.add('activo')

	})
})
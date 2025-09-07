// Dots Grid Mouse Interaction
document.addEventListener('DOMContentLoaded', function() {
	const hero = document.getElementById('hero');
	const dotsGrid = document.getElementById('dotsGrid');
	
	if (hero && dotsGrid) {
		hero.addEventListener('mousemove', function(e) {
			const rect = hero.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			
			// Calcular el porcentaje de posición del mouse
			const mouseX = (x / rect.width) * 100;
			const mouseY = (y / rect.height) * 100;
			
			// Aplicar transformación basada en la posición del mouse
			const moveX = (mouseX - 50) * 0.1; // Factor de movimiento sutil
			const moveY = (mouseY - 50) * 0.1;
			
			// Aplicar la transformación a los pseudo-elementos
			dotsGrid.style.setProperty('--mouse-x', moveX + 'px');
			dotsGrid.style.setProperty('--mouse-y', moveY + 'px');
		});
		
		// Reset cuando el mouse sale del área
		hero.addEventListener('mouseleave', function() {
			dotsGrid.style.setProperty('--mouse-x', '0px');
			dotsGrid.style.setProperty('--mouse-y', '0px');
		});
	}
});

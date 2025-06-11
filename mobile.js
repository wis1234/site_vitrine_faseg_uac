// Sélectionnez les éléments nécessaires
const menuToggle = document.getElementById('mobile-menu');
const mainMenu = document.getElementById('main-menu');

// Ajoutez un événement au clic sur le bouton hamburger
menuToggle.addEventListener('click', () => {
		// Basculez la classe 'active' sur le menu et le bouton
		mainMenu.classList.toggle('active');
		menuToggle.classList.toggle('active');
});
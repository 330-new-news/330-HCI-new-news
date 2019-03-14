const button = document.querySelector('button')

button.addEventListener('click', onSignUp)

function onSignUp() {
	localStorage.setItem('signedIn', 'true')
	window.location.href = 'index.html'
}

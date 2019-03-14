const signOutButton = document.querySelector('a.sign-out')

signOutButton.addEventListener('click', onSignOut)

function onSignOut() {
	localStorage.removeItem('signedIn')
	window.location.href = 'index.html'
}

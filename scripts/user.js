const userElement = document.querySelector('div.user')

if (localStorage.getItem('signedIn') === 'true') {
	userElement.innerHTML = '<a class="user" href="user.html"></a>'
}
else {
	userElement.innerHTML = '<a class="sign-up" href="sign-up.html">Sign up</a>'
}

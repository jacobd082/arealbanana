function go() {
    localStorage.setItem('Name', document.getElementById('name').value)
    localStorage.setItem('user', 'true')
    localStorage.setItem('xp', '0')
    
    window.open('https://www.arealbanana.com/user', '_self')
}
const button = document.getElementById('clickme')
  
const name =document.getElementById('user')
const password =document.getElementById('password')
   
   button.addEventListener('click', () => {
       fetch('/')
           .then(res => res.json())
           .then(data => {
               console.log(data)
               user.textContent = data.user
               password.textContent = data.password
              
           })
           .catch(err => {
               // handle error
               console.log(err)
           })
   })
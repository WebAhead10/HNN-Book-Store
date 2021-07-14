const button = document.getElementById('clickme')
  
const user =document.getElementById('user')
const password =document.getElementById('password')
   
   button.addEventListener('click', () => {
       fetch('/user-profile')
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
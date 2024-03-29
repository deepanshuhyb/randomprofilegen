function fetchuser() {
  fetch('https://randomuser.me/api/')
  .then((res)=> {
      showspinner();
      return res.json()})
  .then((data)=>{
      hidespinner();
      displayUser(data.results[0]);
  });
}



function displayUser(user){
  if(user.gender == "male"){
      document.querySelector('body').style.backgroundColor = 'blue';
  }else{
      document.querySelector('body').style.backgroundColor = 'lightblue';
  }
  document.querySelector('.flex').innerHTML=`<img class="w-48 h-48 rounded-full mr-8" src="${user.picture.large}"/>
  <div class="space-y-3">
    <p class="text-xl">
      <span class="font-bold">Name: </span> ${user.name.title} ${user.name.first} ${user.name.last}
    </p>
    <p class="text-xl">
      <span class="font-bold">Email: </span> ${user.email}
    </p>
    <p class="text-xl">
      <span class="font-bold">Phone: </span> ${user.phone}
    </p>
    <p class="text-xl">
      <span class="font-bold">Location: </span> ${user.location.street.number} ${user.location.street.name}
    </p>
    <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
  </div>`

}
function showspinner() {
  document.querySelector('.spinner').style.display = 'block';
}
function hidespinner() {
  document.querySelector('.spinner').style.display = 'none';
}


document.querySelector("button").addEventListener('click', fetchuser);

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//agregue el punto para que tuviera bien la etiqueta 
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');
const data = await response.json();// lo agregué para que el data funcione 

//agregé async para que await funcionara lkndlsknd
function async displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = `${data.name}`;//le puse backticks a los tres para hacerlos template strings
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  //le puse un signo de $ antes de la n para que lo llamara correctamente 
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
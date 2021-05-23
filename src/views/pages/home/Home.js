import { api, postform } from "../../../service/api";

async function getRandomJoke() {
  const request = await api.get('random')
  const response = request.data
  return response
}
//getRandomJoke()

let Home = {

  is_private: false,

  render: async () => {
    const jokes = await getRandomJoke();
    let view = `
          <div>
            <h1>Primeira página</h1>
            <img src=${jokes.icon_url} alt=${jokes.value}>
            <p>${jokes.value}</p>
          </div>

              <div class="formcontainer">

              <form id="form">

              <input type="text" id="name" placeholder="name" >
              <input type="text" id="email" placeholder="email" >
              <input type="text" id="phone" placeholder="phone" >
              <input type="submit" value="Enviar" >
              
              </form>

              </div>
      `;

    return view
  },

  after_render: async () => { 
    let formcontent=document.getElementById('form');
    formcontent.addEventListener('submit', e=>{
      e.preventDefault();
      let name=document.querySelector('#name').value,
      email=document.querySelector('#email').value,
      phone=document.querySelector('#phone').value

      let postData={
        name,
        email,
        phone
      }
postform.post('',postData).then(
  response=>{
    alert('Tudo certo')
  }
).catch(e=>alert('Algo errado'))

    })
  }
}

export default Home;
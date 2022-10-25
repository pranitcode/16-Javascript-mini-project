
const jokeBtn = document.querySelector("#jokeBtn");
const jokebox = document.querySelector("#joke");
const url = 'https://v2.jokeapi.dev/joke/Any';


const fetchData = async () => {
     const data = await fetch(url)
     const res = await data.json()
     return res.type === "single" ? { joke: res.joke } : { setup: res.setup, delivery: res.delivery }     
}
 

jokeBtn.addEventListener("click", async (e) => {
    const myjoke = await fetchData()    
    myjoke.joke ? jokebox.innerHTML = `<p>${myjoke.joke}</p>` :
    jokebox.innerHTML = `<p> ${myjoke.setup} </p> <br /> <p>${myjoke.delivery}</p>`
})
       






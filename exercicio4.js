function junta(){

   let divs = Array.from(document.querySelectorAll('div'))
   
   let junta = divs.reduce((j, i) =>  j + i.textContent, '')

   console.log(junta)
}
// Dado el siguiente array de objetos, pintar en el DOM tarjetas con los detalles de los siguientes libros. También hay que darle algo de estilos con clases CSS correspondientes (es un buen ejercicio propenso a flexbox):

{/* <section>
    <article>
        <h3>Title:Things Fall Apart</h3>
        <p>Author: Chinua Achebe</p>
        <p>Country: Nigeria</p>
        <img src="imagen" alt="">
        <p>Language: English</p>
        <p>Año: 1958</p>
    </article>
    <article>
        <h3>Title:Fairy tales</h3>
        <p>Author: Hans Christian Andersen</p>
        <p>Country: Denmark</p>
        <img src="imagen" alt="">
        <p>Language: English</p>
        <p>Año: 1958</p>
        <p>Pages: 784</p>
    </article>
    ...
    <article>
        ...
    </article>
</section> */}


const books = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "../assets/ThingsFallApart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "../assets/fairyTales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "../assets/DivineComedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "../assets/TheEpicOfGilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "../assets/TheBookOfJob.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    }]


 for (let i = 0; i < books.length ; i++) {
        
    let article = document.createElement("article");
    article.classList.add("article");
    article.classList.add("article");

    let titulo = document.createElement("h3");
    titulo.textContent = "Titulo: " + books[i].title;
    titulo.classList.add("titulo");
    article.appendChild(titulo);

    let autor = document.createElement("p");
    autor.textContent = "Autor: " + books[i].author;
    autor.classList.add("autor");
    article.appendChild(autor);

    let pais = document.createElement("p");
    pais.textContent = "Pais: " + books[i].country;
    pais.classList.add("pais");
    article.appendChild(pais);

    let img = document.createElement("img");
    img.src = books[i].imageLink;
    titulo.classList.add("img");
    article.appendChild(img);

    let lengua = document.createElement("p");
    lengua.textContent = "Lengua: " + books[i].language;
    lengua.classList.add("lengua");
    article.appendChild(lengua);

    let year = document.createElement("p");
    year.textContent = "Año: " + books[i].year;
    year.classList.add("year");
    article.appendChild(year);

    let section = document.createElement("section");
    section.classList.add("section");
    section.appendChild(article);

    let libros = document.querySelector("body");
    libros.appendChild(section);
}





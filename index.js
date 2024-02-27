function Book(title, author, year, genre, pages) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.pages = pages;
  }
  
  let library = [];
  
  //Добавить книжку
  function addBook(title, author, year, genre, pages) {
    const bookNew = new Book(title, author, year, genre, pages);
    library.push(bookNew);
  }
  
  // Найти книжку по автору
  function findBooksByAuthor(author) {
  const authorBook = library.filter((book) => book.author === author);
  return authorBook;
  }
  
  // Посчитать страницы
  function averagePagesReport() {
    const numberPages = library.reduce((acc, book) => acc + book.pages, 0);
    return numberPages / library.length;
  }
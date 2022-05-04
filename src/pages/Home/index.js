import axios from "axios";
import React, { useEffect, useState } from "react";
import Book from "components/Book";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function handleGetBooks() {
      axios
        .get("http://localhost:3030/books")
        .then((response) => setBooks(response.data))
        .catch(() => alert("Erro ao tentar recuperar os livros."));
    }
    handleGetBooks();
  }, []);

  return (
    <div className='container'>

      <div className='container-books'>
        {books.map(book => <Book key={book.id} item={book} />)}
      </div>
    </div>
  );
}

export default Home;

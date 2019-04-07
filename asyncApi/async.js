// get a book with async/await

async function GetBookByID(id) {
    let book = await RetrieveBookFromServer(id);
    console.log(book.title);
    return book;
}

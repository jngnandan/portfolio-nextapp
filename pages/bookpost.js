import Link from 'next/link'



const BookPost  = (props) => {
    const {book} = props
    console.log(book.id)
    return(
        <Link href={`/books/${book.id}`}>
        <div className='m-4 p-3 pb-12 outline outline-offset-2 outline-1 rounded'>
                  <p className='text-xl py-2' key={book.id}>{book.data.title}</p>
                  <p className='text-sm text-gray-300 pl-2' key={book.id}>{book.data.author}</p>
        </div>
        </Link>
       
    )
}
export default BookPost;
import express from 'express'
import {Book} from '../models/bookModels.js'

const router = express.Router();


//4. Route for Save a new book
router.post('/', async (request, response) => {
    try {
        if(
            !request.body.title || 
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fileds: title, author, publishYear',
            });
        }

        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        const book = await Book.create(newBook);

        return response.status(201).send(book);
    }
    catch (error) {
        console.log(error)
        response.status(500).send({message: error.message});
    }
});

//5.Route for get all books from database
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});
        // return response.status(200).json(books);
        // return books with customize with length and book in data array
        return response.status(200).json({
            count: books.length,
            data: books
        })
    } 
    catch (error) {
        console.log(error.message);
        response.status(500).send({messsage: error.message});
    }
})

//6. Get one books id in data books with mongoose
router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
})

//7. Route for Update a Book
router.put('/:id', async (request, response) => {
    try{
        if(
            !request.body.title || 
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'send all required fileds: title, author, publishYear',
            });
        }
        const {id} = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).json({message: 'Book Not Found'});
        }
        return response.status(200).send({message: 'Book updated succesfully'})
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//8. Delete Book with mongoose
router.delete('/:id', async (request, response) => {
    try{
        const {id} = request.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message: 'Book Not Found'});
        }
        return response.status(200).send({message: 'Book deleted succesfully'})

    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

export default router;
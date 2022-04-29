import { gql } from '@apollo/client';

export const login_user = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
         _id
         username
      }
    }
  }
`;

export const add_user = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const save_user = gql`
  mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      savedBooks {
        bookId
        title
        authors
        image
        description
        link
      }
    }
  }
`;
export const save_book = gql`
	  mutation saveBook($bookId: ID!) {
	    saveBook(savedBook: $bookId) {
	      _id
	      username
	      email
	      savedBooks  {
	        bookId
	        authors
	        description
	        title
	        image
	      }
	    }
	  }
	`;



export const remove_book = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        title
        authors
        image
        description
        link
      }
    }
  }
`;

'use strict';


/**
 * Borrow and return a book
 * Passing ISBN and option header to determined if borrow or return a book.
 *
 * shortISBN String pass a required IS
 * action String borrow or return a book
 * returns List
 **/
exports.borrowOrReturnBook = function(shortISBN,action) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "author" : "Patrick Rothfuss",
  "isbn" : "756404746",
  "name" : "The Name of the Wind"
}, {
  "author" : "Patrick Rothfuss",
  "isbn" : "756404746",
  "name" : "The Name of the Wind"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


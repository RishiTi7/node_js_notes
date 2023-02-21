const express = require('express')


//always follow the order req,res
const author = ( req, res, next) => {
  const {user} = req.query 
  if (user === "john") {
    req.user = { name: "john", id: 3 };
    next();
  } else {
    res.status(401).send("fuck you");
  }
};

module.exports = author;

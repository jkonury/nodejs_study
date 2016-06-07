'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'jade');
app.set('views', './views_jade');

app.locals.pretty = true;

app.get(['/', '/index'], (req, res) => {
  res.render('index', {usingJade: true});
});

app.get('/attributes', (req, res) => {
  res.render('attributes');
});

app.get('/case', (req, res) => {
  res.render('case');
});

app.get('/extends', (req, res) => {
  res.render('extends');
});

app.get('/includes', (req, res) => {
  res.render('includes');
});

app.get('/iteration', (req, res) => {
  res.render('iteration');
});

app.get('/mixin', (req, res) => {
  res.render('mixin');
});

app.use((req, res, next) => {
  res.status(404).render('error', {status: 404});
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).render('error', {status: 500});
});

app.listen(3000, () => {
  console.log('Connected 3000 port');
});

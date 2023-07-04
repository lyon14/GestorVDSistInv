const supertest = require('supertest');

describe('BodegasController', function() {
  describe('GET #listar()', function() {
    it('deberia retornar todas las bodegas', function(done) {
      supertest(sails.hooks.http.app)
        .get('/bodegas')
        .expect(200, function(err, res){
          //console.log(res.body);
          done(err);
        });
    });
  });
  describe('POST #crear()', function() {
    it('deberia crear una bodega', function(done) {
      supertest(sails.hooks.http.app)
        .post('/bodegas')
        .send({nombre: 'Bodega 1', direccion: 'Direccion 1'})
        .expect(200, function(err, res){
          //console.log(res.body);
          done(err);
        });
    });
  });
  describe('GET #buscarId()', function() {
    it('deberia retornar una bodega', function(done) {
      supertest(sails.hooks.http.app)
        .get('/bodegas/2')
        .expect(200, function(err, res){
          //console.log(res.body);
          done(err);
        });
    });
    it('deberia retornar error 400 bad request porque no es un int(id) si no que un string()', function(done) {
      supertest(sails.hooks.http.app)
        .get('/bodegas/asd')
        .expect(400, function(err, res){
          //console.log(res.body);
          done(err);
        });
    });
  });
});

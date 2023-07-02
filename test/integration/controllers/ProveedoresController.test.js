const supertest = require('supertest');

describe('ProveedoresController', function() {
  describe('GET #listar()', function() {
    it('deberia retornar todos los proveedores', function(done) {
      supertest(sails.hooks.http.app)
        .get('/proveedores')
        .expect(200, function(err, res){
          //console.log(res.body);
          done(err);
        });
    });
  });
  describe('POST #crear()', function() {
    it('deberia crear un proveedor', function(done) {
      supertest(sails.hooks.http.app)
        .post('/proveedores')
        .send({nombre: 'Proveedor 1', direccion: 'Direccion 1'})
        .expect(200, function(err, res){
          //console.log(res.body);
          done(err);
        });
    });
  });
  describe('GET #buscarId()', function() {
    it('deberia retornar un proveedor', function(done) {
      supertest(sails.hooks.http.app)
        .get('/proveedores/2')
        .expect(200, function(err, res){
          //console.log(res.body);
          done(err);
        });
    });
    it('deberia retornar error 404 not found', function(done) {
      supertest(sails.hooks.http.app)
        .get('/proveedores/100')
        .expect(404, function(err, res){
          //console.log(res.body);
          done(err);
        });
    });
  });
});

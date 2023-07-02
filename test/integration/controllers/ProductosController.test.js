const supertest = require('supertest');

describe('ProductosController', function() {
  describe('GET #listar()', function() {
    it('deberia retornar todos los productos', function(done) {
      supertest(sails.hooks.http.app)
        .get('/productos')
        .expect(200, function(err, res){
          //console.log(res.body);
          done(err);
        });
    });
  });
  describe('POST #crear()', function() {
    it('deberia crear un producto', function(done) {
      supertest(sails.hooks.http.app)
        .post('/productos')
        .send({nombre: 'Producto 1', descripcion: 'Descripcion 1', precio: 1000, cantidad: 10, bodega: 1, proveedor: 1})
        .expect(200, function(err, res){
          //console.log(res.body);
          done(err);
        });
    });
  });
  describe('GET #buscarId()', function() {
    it('deberia retornar un producto', function(done) {
      supertest(sails.hooks.http.app)
        .get('/productos/2')
        .expect(200, function(err, res){
          //console.log(res.body);
          done(err);
        });
    });
    it('deberia retornar error 404 not found', function(done) {
      supertest(sails.hooks.http.app)
        .get('/productos/100')
        .expect(404, function(err, res){
          //console.log(res.body);
          done(err);
        });
    });
  });
});

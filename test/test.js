const chai = require("chai");
const chaiHttp = require("chai-http");
const { describe } = require("mocha");
const server = require("../index");

//Assertion library

chai.should();

chai.use(chaiHttp);

describe("APIS TEST SUITE", () => {
  describe("POST /login", () => {
    it("should send token", (done) => {
      chai
        .request(server)
        .post("/login")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          done();
        });
    });
  });

  describe("PATCH /update-product", () => {
    it("should change the name value to Apple", (done) => {
      const product = {
        title: "Orange",
      };
      chai
        .request(server)
        .patch("/update-product")
        .send(product)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          //   response.body.should.have.property("product");
          done();
        });
    });
  });

  describe("POST /resize-image", () => {
    it("should resize the image", (done) => {
      const body = {
        src: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      };
      chai
        .request(server)
        .post("/resize-image")
        .send(body)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          done();
        });
    });
  });
});

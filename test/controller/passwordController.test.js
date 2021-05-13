const passwordController = require('../../src/controllers/passwordController');

var mockRes = {
    statusCode: 0,
    responseBody: 0,
    status : function(status) {
        this.statusCode = status;
        return this;
    },
    send : function(body) {
        this.responseBody = body;
        return this;
    }
};

it('should test the validate method', () => {

    var mockReq = {
        params: {
            password:'test'
        }
    }

    passwordController.validate(mockReq, mockRes);

    expect(mockRes.statusCode).toBe(200);
    expect(mockRes.responseBody).toBe(false);
})

it('should test the validate method', () => {

    const mockReq = {
        params: {
            password:'AbTp9!fok'
        }
    }

    passwordController.validate(mockReq, mockRes);

    expect(mockRes.statusCode).toBe(200);
    expect(mockRes.responseBody).toBe(true);
})
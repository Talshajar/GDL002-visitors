const { signIn } = require ('../src/main.js');


describe('signIn', () => {
    it('deberia poder iniciar sesion con email y password', () => {
        return signIn("rocio.chavoya@gmail.com").then((data)=>{
        expect(data).toBe('rocio.chavoya@gmail.com');
       }) 
    })
});

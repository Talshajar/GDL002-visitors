import { signIn } from '../src/main';

//const firebase

//describe('signIn', () => {
//    it('deberia poder iniciar sesion con email y password', () => {
//        return signIn("laboratoria@gmail.com").then ((data)=>{
//        expect(data).toBe('laboratoria@gmail.com');
//       }) 
//    })
//});

import {signIn} from '../src/index';

describe('signIn', () => {
    it('deberia poder iniciar sesion con email y password', () => {
        return signIn("rocio.chavoya@gmail.com").then ((data)=>{
        expect(data).toBe('rocio.chavoya@gmail.com');
       }) 
    })
});

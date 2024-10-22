import { formatCurrency } from "../../scripts/utils/money.js";

describe('test suite: Curreny Format', ()=>{
    it('Coverts Cents to dollars', ()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });
    
    it('Work with zero', ()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });
    
    it('Round to nearest', ()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
    
});
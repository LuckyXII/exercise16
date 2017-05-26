import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe("Test Form",()=>{
    it("has content",()=>{
        let wrap = shallow(<Form/>);
        const input = <input type="text" />;
        expect(wrap.contains(input)).toBe(true);
    });
});
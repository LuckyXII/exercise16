import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe("test Button",()=>{
    it("check className",()=>{
        let wrap = shallow(<Button/>);
        const name = "buttonClass";
        expect(wrap.hasClass(name)).toBe(true);
    });
});
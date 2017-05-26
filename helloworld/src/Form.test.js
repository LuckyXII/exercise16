import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe("Test Form",()=>{
    it("has content",()=>{
        let wrap = shallow(<Form/>);
        const input = <section>
            <form action="#">
                <input type="text"
                       name="email"
                />
                <input type="text"
                       name="name"
                />
            </form>
        </section>;
        expect(wrap.contains(input)).toBe(true);
    });

});
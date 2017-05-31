import React from 'react';
import { shallow, mount, render} from 'enzyme';
import Form from './Form';

describe("Test Form",()=>{
    it("has content",()=>{
        let wrap = mount(<Form/>);
        let props = wrap.instance();
        const input = <section>
            <form action="#">
                <input type="text"
                       name="email"
                       onChange={props.update}
                       value={props.email}

                />
                <input type="text"
                       name="name"
                       onChange={props.update}
                       value={props.name}
                />
            </form>
        </section>;
        expect(wrap.contains(input)).toBe(true);
    });

});
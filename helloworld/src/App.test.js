import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from "enzyme";

describe("react tests",()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        shallow(<App />, div).render();
    });

    it("check contains",()=>{
        let wrapper = shallow(<App />);
        const class_name = "App";
        const html = "Hello";
        const event = "click";

        expect(wrapper.hasClass(class_name)).toBe(true);
        expect(wrapper.contains(html)).toBe(true);
        expect(wrapper.simulate(event)).toBe("test Click");

    });

});



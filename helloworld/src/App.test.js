import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from "enzyme";


describe("react tests",()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        shallow(<App />, div).render();
    });

    it("check contains",()=>{
        let wrapper = shallow(<App />);
        const class_name = "App";
        expect(wrapper.hasClass(class_name)).toBe(true);
    });

    it("check state",()=>{
        let wrapper = shallow(<App />);
        let state = wrapper.state("email");
        expect(state).toBe("");
    });

    it("test updateemail",()=>{
        let txt = "Email";
        let wrapper = mount(<App />);
        wrapper.find("Form").children("form").children("input").first().simulate("change",{
            target:{
                value:txt
            },
            type:"change"
        });
        const newState = wrapper.state("email");

        expect(newState).toBe(txt);
    });

    it("test updatename",()=>{
        let txt = "Name";
        let wrapper = mount(<App />);
        wrapper.find("Form").children("form").children("input").at(1).simulate("change",{
            target:{
                value:txt
            },
            type:"change"
        });
        const newState = wrapper.state("name");
        expect(newState).toBe(txt);
    });

    it("test clear",()=>{
        let wrapper = mount(<App />);
        wrapper.setState({email:"email", name:"name"});
        wrapper.find("Button").children("input").simulate("click");
        const stateName = wrapper.state("name");
        const stateEmail = wrapper.state("email");
        expect(stateName).toBe("");
        expect(stateEmail).toBe("");
    });

});



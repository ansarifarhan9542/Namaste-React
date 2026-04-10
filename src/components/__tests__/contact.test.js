import {render,screen} from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("Contact us page test cases",()=>{
   
    it("should load contact us component",()=>{

    render(<Contact/>)

    // Querying
    const heading=screen.getByRole("heading");
    // Assertion

    expect(heading).toBeInTheDocument();
})

it("should load button inside contact component",()=>{

    render(<Contact/>)

    const button=screen.getByRole("button");
    // Assertion
    
    expect(button).toBeInTheDocument();
})

it("should load 2 input boxes ont the contact component",()=>{
      
    render(<Contact/>)

    // Querying
    const InputBoxes=screen.getAllByRole("textbox");

    // Assertion
    expect(InputBoxes.length).toBe(2);
})
})



import { beforeEach, test } from "vitest";
import {expect} from "vitest"
import {render, screen} from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import Spline from '../components/Spline.jsx';


describe("Landing testing", () =>{
    beforeEach(()=>{
        render(
         <Spline/>
    
        )
    })
    test("should render spline image", ()=>{
        const Spline = screen.getByRole('img', { name: /spline/i });
        expect(Spline).toBeDefined();
    })

})
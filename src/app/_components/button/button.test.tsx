import { describe } from "node:test";
import { Button } from ".";
import { render, screen } from "@testing-library/react"

describe('Button Component', () => {

    test("renders a default button", () => {
        const { getByText } = render(<Button>Click Here</Button>)
        expect(getByText("Click Here")).toBeInTheDocument()
    })

    test("disables the button when isDisabled prop is true", () => {
        render(<Button isDisabled={true}>Click here</Button>)
        expect(screen.getByRole("button")).toBeDisabled()
    })

    test("applies the correct css class for deferent button variants", () => {
        const { rerender } = render(<Button variant="primary">click here</Button>)
        expect(screen.getByRole("button")).toHaveClass("btn-primary")

        rerender(<Button variant="info">click here</Button>)
        expect(screen.getByRole("button")).toHaveClass("btn-info")
    })


    test("show rendered button", () => {
        render(<Button variant="primary" isOutline={true} size="large" isDisabled={true}>Click here</Button>)
        screen.debug()
    })


    test("applies the correct css class for deferent button Size", () => {
        const { rerender } = render(<Button size="large">CLick Here</Button>)
        expect(screen.getByRole("button")).toHaveClass("btn-lg")

        rerender(<Button size="tiny">CLick Here</Button>)
        expect(screen.getByRole("button")).toHaveClass("btn-xs")
    })

    test("applies the correct css class when is isOutline prop is true", () => {
        render(<Button isOutline>click here</Button>)
        expect(screen.getByRole("button")).toHaveClass("btn-outline")
    })

    test("applies the correct css class for deferent button Shape", () => {
        const { rerender } = render(<Button shape="wide">click here</Button>)
        expect(screen.getByRole("button")).toHaveClass("btn-wide")

        rerender(<Button shape="square">click here</Button>)
        expect(screen.getByRole("button")).toHaveClass("btn-square")
    })

    test("applies the correct css class  when is isLoading prop is true", () => {
        render(<Button isLoading>click here</Button>)
        expect(screen.getByRole("button")).toHaveClass("pointer-events-none", "opacity-80")
    })
})
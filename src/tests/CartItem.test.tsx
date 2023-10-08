import { fireEvent, render} from "@testing-library/react"
import CartItem, { cartItemProps } from "../components/CartItem"

const fakeProps: cartItemProps = {
    id: 2,
    title: "Amazing product",
    amount: 4,
    price: 874,
    handleChangeByAmount: vitest.fn(),
    removeItem: vitest.fn()
}

describe.only("Render cartItem", () => {
    it("should check if text is rendered and if buttons works", () => {
        const {getByText, getByRole, getByDisplayValue} = render(<CartItem id={fakeProps.id} title={fakeProps.title} amount={fakeProps.amount} price={fakeProps.price} handleChangeByAmount={fakeProps.handleChangeByAmount} removeItem={fakeProps.removeItem}></CartItem>)

        const renderdTitleAndPrice = getByText(`${fakeProps.title} - (${fakeProps.price * fakeProps.amount},-)`)

        const renderdAmount = getByDisplayValue(4)
        
        const renderdHandleChangeByAmountPos = getByRole("button", {name: "+"})
        const renderdHandleChangeByAmountNeg = getByRole("button", {name: "-"})
        const renderdRemoveItem = getByRole("button", {name: "X"})

        expect(renderdTitleAndPrice).toBeInTheDocument()

        expect(renderdAmount).toBeInTheDocument()
        expect(renderdAmount).toHaveAttribute("readonly")
        expect(renderdAmount).toHaveValue(4)

        expect(renderdHandleChangeByAmountPos).toBeInTheDocument()
        expect(renderdHandleChangeByAmountNeg).toBeInTheDocument()
        expect(renderdRemoveItem).toBeInTheDocument()

        fireEvent.click(renderdHandleChangeByAmountPos)
        expect(fakeProps.handleChangeByAmount).toHaveBeenCalled()
        fireEvent.click(renderdHandleChangeByAmountNeg)
        expect(fakeProps.handleChangeByAmount).toHaveBeenCalledTimes(2)
        fireEvent.click(renderdRemoveItem)
        expect(fakeProps.removeItem).toHaveBeenCalled()
    })
})
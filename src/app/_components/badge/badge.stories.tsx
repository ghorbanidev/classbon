import { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
    component: Badge,
    tags: ["autodocs"],
    decorators: [
        (Story) => {
            document.documentElement.classList.add("dark")
            return <Story />
        }
    ]
}

export default meta;

type Story = StoryObj<typeof Badge>


export const BrandColor: Story = {
    render: () => (
        <>
            <Badge>default</Badge>
            <Badge variant="neutral">neutral</Badge>
            <Badge variant="primary">primary</Badge>
            <Badge variant="secondary">secondary</Badge>
            <Badge variant="accent">accent</Badge>
            <Badge variant="ghost">ghost</Badge>
        </>
    )
}


export const StateColors: Story = {
    render: () => (
        <>
            <Badge variant="success">success</Badge>
            <Badge variant="info">info</Badge>
            <Badge variant="warning">warning</Badge>
            <Badge variant="error">error</Badge>
        </>
    )
}


export const BadgeSize: Story = {
    render: () => (
        <>
            <Badge variant="primary" size="tiny">tiny</Badge>
            <Badge variant="primary" size="small">small</Badge>
            <Badge variant="primary" size="normal">normal</Badge>
            <Badge variant="primary" size="large">large</Badge>
        </>
    )
}
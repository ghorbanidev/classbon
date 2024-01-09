import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
    component: Avatar,
    tags: ["autodocs"],
    decorators: [
        (Story) => {
            document.documentElement.classList.add("dark")
            return <Story />
        }
    ]
}

export default meta;


type Story = StoryObj<typeof Avatar>

export const BrandColors: Story = {
    render: () => (
        <>
            <Avatar src="../../../../public/images/developer.jpg" variant="neutral" />
            <Avatar src="../../../../public/images/developer.jpg" variant="primary" />
            <Avatar src="../../../../public/images/developer.jpg" variant="secondary" />
            <Avatar src="../../../../public/images/developer.jpg" variant="accent" />
            <Avatar src="../../../../public/images/developer.jpg" variant="ghost" />
        </>
    ),
};
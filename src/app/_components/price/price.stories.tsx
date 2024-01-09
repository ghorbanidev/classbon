// price.stories.tsx

// import { Meta, StoryObj } from '@storybook/react';
// import { Price } from './price';
// import { Size } from '../types/size.type';


// const meta: Meta<typeof Price> = {
//     component: Price,
//     tags: ["autodocs"],
//     decorators: [
//         (Story) => {
//             document.documentElement.classList.add("dark")
//             return <Story />
//         }
//     ]
// }

// export default meta;

// type Story = StoryObj<typeof Price>

// export const Tests: Story = {
//     render: (args) => (<Button {...args}>Click Here</Button>)
// }

// export const Default: Story = {
//     render: (...args) => (
//         <Price size='large'>Default</Price>
//     )
// }


// Default.args = {
//     size: 'normal' as Size,
//     price: 1000,
// };


// const Template: Story = (args) => <Price {...args} />;
// const Template: StoryAnnotations<ReactRenderer, PriceProps> = (args) => <Price {...args} />;

// export const Default: Story = {
//     render: (args) => (<Price {...args}>Click Here</Price>)
// }
// Default.args = {
//     size: 'normal' as Size,
//     price: 1000,
// };

// export const Free = Template.bind({});
// Free.args = {
//     size: 'normal' as Size,
//     price: 0,
//     text: 'رایگان',
// };

// export const CustomText = Template.bind({});
// CustomText.args = {
//     size: 'normal' as Size,
//     price: 500,
//     text: 'مخصوص شما',
// };

// export const SmallSize = Template.bind({});
// SmallSize.args = {
//     size: 'small' as Size,
//     price: 750,
// };

// export const LargeSize = Template.bind({});
// LargeSize.args = {
//     size: 'large' as Size,
//     price: 1200,
// };

// export const NoPrice = Template.bind({});
// NoPrice.args = {
//     size: 'normal' as Size,
// };

// Add more stories as needed



// ---------------------------------------------------------------------------//



import { Meta, StoryObj } from "@storybook/react";
import { Price } from "./price";

const meta: Meta<typeof Price> = {
    component: Price,
    tags: ["autodocs"],
    decorators: [
        (Story) => {
            document.documentElement.classList.add("dark")
            return <Story />
        }
    ]
}

export default meta;

type Story = StoryObj<typeof Price>


export const PriceSize: Story = {
    render: () => (
        <>
            <Price text="رایگان" />
            <Price text="رایگان" />
            <Price text="رایگان" />
            <Price text="رایگان" />
        </>
    )
}
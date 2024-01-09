import { render } from "@testing-library/react"
import { HomeHeroSection } from "./home-hero-section"

describe("Home Hero Section", () => {
    test("Display the Home Hero Section", () => {
        const { container } = render(<HomeHeroSection />)
        expect(container).toMatchSnapshot(`
            <section className="bg-hero-pattern mt-5 xl:mt-20 xl:bg-left bg-no-repeat bg-center">
            <div className="container flex flex-col-reverse items-center xl:flex-row">
            <div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
                <h3 className="text-xl dark:text-info xl:text-2xl">خوش اومدی به ...</h3>
                <h1 className="font-black gradient text-3xl lg:text-3xl xl:text-5xl">مسیر صعود به قله های برنامه نویسی</h1>
                <p>
                هر جای مسیرِ برنامه‌نویسی که باشی، با هم‌راهی استادهای باتجربهٔ
                کلاسبن می‌تونی بدون محدودیت به قله‌های بالاتر صعود کنی. ما همیشه
                هواتو داریم.
                </p>
                <div className="mt-5 flex gap-4">
                <Button variant="primary" size="large">دوره های ری اکت و نکست</Button>
                <Button variant="neutral" size="large">مشاوره برنامه‌نویسی</Button>
                </div>
                <Image className="grayscale mt-4 opacity-70 m-auto xl:m-0" src="/images/frameworks.png" width={412} height={39} alt="" />
            </div>
            <Image src="/images/programmer-landing.svg" width={702} height={521} alt="کلاسبن" />
            </div>
        </section>
    `)
    })
})
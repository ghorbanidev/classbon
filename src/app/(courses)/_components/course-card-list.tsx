import { CourseSummary } from "@/types/course-summary.interface"
import { CourseCard } from "./course-card"
import { API_URL } from "@/configs/global"

type CourseCardListProps = {
    courses: CourseSummary[]
}


async function getNewestCourses(count: number): Promise<CourseSummary[]> {

    await new Promise((resolve) => setTimeout(resolve, 5000))

    const res = await fetch(`${API_URL}/courses/newest/${count}`, {
        cache: "no-store",
        next: {
            revalidate: 24 * 60 * 60,
            // revalidate: 0,
        }
    })
    return res.json()
}



export const CourseCardList: React.FC<CourseCardListProps> = async ({ courses }: CourseCardListProps) => {

    const newestCoursesData = await getNewestCourses(4)

    return (
        <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
            {
                // courses.map(course => (
                newestCoursesData.map(course => (
                    <CourseCard key={`course-${course.slug}`} {...course} />
                ))
            }
        </div>
    )
}
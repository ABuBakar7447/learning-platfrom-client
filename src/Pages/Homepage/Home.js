import { useLoaderData } from 'react-router-dom';
import HmPgDetails from './HmPgDetails';

const Home = () => {
    const courseData = useLoaderData()
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                courseData.map(course =>
                    <HmPgDetails key={course.id} course={course}></HmPgDetails>
                )
            }
        </div>
    );
};

export default Home;
import { Link } from 'react-router-dom';
import useReviews from '../Hooks/review';
import Review from '../Review/Review';
import './Home.css'


const Home = () => {
    const [review] = useReviews()
    const shortReview = review.slice(0, 3)
    return (
        <div>
            <div className='container'>
                <div className='banner-info'>
                    <h1>Support of Practice</h1>
                    <h2> Why buy a book <br />
                        Please Buy a future </h2>
                </div>
                <div className='banner-img'>
                    <img src="images/book.jpg" alt="" />
                </div>
            </div>
            <div>
                <div className='review-container'>
                    {
                        shortReview.map(persone => <Review key={persone.id} persone={persone}></Review>)
                    }
                </div>


                <Link className='homebtn' to="/reviews">See All Reviews</Link>

            </div>

        </div>
    );
};

export default Home;
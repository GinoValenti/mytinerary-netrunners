import { Link, useParams } from 'react-router-dom';
import HotelsData from '../../components/HotelsData';
import Show from '../../components/Show/Show';
import "./detail.css"
const SingleHotels = () => {
  const { hotelId } = useParams();
  const hotel = HotelsData.find((x) => x.id === hotelId);
  const { photo, name, } = hotel;
  return (
    <>
        <div className='city-details-container'>
            <div className='city-details-banner'>
                <img className='city-details-banner-img' src={photo[2]} alt="" />
                <h2 className='details-title'>{name}</h2>
            </div>
            <div>
                <div className='info-details'>
                <p>{name} is the most fun city in the world</p>

                <h2>Popular shows in your city</h2>
                </div>

                <div className='itinerary-container'>
                    <article className='itinerary-article'>
                <Show></Show>
                    </article>
                </div>
            </div>
        </div>

    </>
  );
}; 

export default SingleHotels;
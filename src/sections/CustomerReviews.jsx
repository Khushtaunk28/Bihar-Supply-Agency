import React, { useEffect, useState } from 'react';

// Optional: replace with your actual card component
const ReviewCard = ({ imgUrl, customerName, rating, feedback }) => (
  <div className="max-w-xs bg-white p-4 rounded-xl shadow-md text-center">
    <img
      src={imgUrl}
      alt={customerName}
      className="w-16 h-16 rounded-full mx-auto"
    />
    <h4 className="font-bold mt-2">{customerName}</h4>
    <p className="text-yellow-500">Rating: {rating} ⭐</p>
    <p className="text-gray-600 mt-2 text-sm">{feedback}</p>
  </div>
);

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://biharsupplybackend-b0d3a28156a5.herokuapp.com/api/reviews');
        const data = await response.json();
        console.log('Fetched reviews:', data);
        setReviews(data.result?.reviews || []);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="py-10">
      <h3 className="text-4xl font-bold text-center font-palanquin">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>

      <div className="mt-16 flex flex-wrap justify-center gap-10">
        {loading ? (
          <p>Loading reviews...</p>
        ) : reviews.length > 0 ? (
          reviews.map((review, index) => (
            <ReviewCard
              key={review.author_name + index}
              imgUrl={review.profile_photo_url}
              customerName={review.author_name}
              rating={review.rating}
              feedback={review.text}
            />
          ))
        ) : (
          <p>No reviews found.</p>
        )}
      </div>
    </section>
  );
};

export default CustomerReviews;

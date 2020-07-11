import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51H3KDxB8rtelKXQn9SKb45v3GRxUJc8WENAdyXrdtQUy1tHoof0scdxIi8IAuUJfUyNqNuXJfH5X6VN1s7S3KcGs00ZP95zjIO');

export const bookTour = async tourId => {
  try {
    // Get checkout session from API
    const session = await axios(`http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`);

    console.log(session);

    // Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('e', err);
  }
  
}
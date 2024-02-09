import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51OhFGmSGV7r3dilwFrFWw8jQX5m5k9MCcOgG1ilmRlnlNhtUk4JuMwSezLCG6n30mF6Na7wE48SbnHUxIe6D8YfO00Pi88ZenX',
);

export const bookTour = async (tourId) => {
  //1.Get checkout session from Api
  try {
    const session = await axios(
      `https://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
    );

    //2.Create checkout form
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};

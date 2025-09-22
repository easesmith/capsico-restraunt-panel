import { Button } from '@/components/ui/button';
import axios from 'axios';

const PaymentPage = () => {
    console.log("api url", import.meta.env.VITE_BACKEND_URL);

    const paymentDetails = {
        razorpay_payment_id: "",
        razorpay_subscription_id: "",
        razorpay_signature: "",
    };

    const handleRazorpayPayment = async () => {
        try {
            const { data } = await axios.post(
              `${import.meta.env.VITE_BACKEND_URL}/payment/make-payment`,
              { amount: "100", currency: "INR" },
              { withCredentials: true }
            );

            console.log("data", data);


            const options = {
                key: import.meta.env.VITE_APP_RAZORPAY_API_KEY,
                amount: "100",
                currency: "INR",
                name: "Capsico",
                description: "Test Transaction",
                image: "",
                order_id: data.order.id,
                handler: async function (response) {
                    console.log("response",response);
                    
                    paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
                    paymentDetails.razorpay_order_id = response.razorpay_order_id;
                    paymentDetails.razorpay_signature = response.razorpay_signature;

                    try {
                        const res = await axios.post(
                            `${import.meta.env.VITE_BACKEND_URL}/payment/verify-payment`, { ...paymentDetails },
                            { withCredentials: true }
                        );
                        console.log("handler", res.data);
                        // if (res.data.success) { }
                    } catch (error) {
                        console.log(error);
                    }
                },
                prefill: {
                    name: "test name",
                    contact: "1234567890"
                },
                notes: {
                    address: "Dento"
                },
                theme: {
                    color: "#3399cc"
                }
            };
            const razor = new window.Razorpay(options);
            razor.open();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <Button onClick={handleRazorpayPayment}>Test Payment</Button>
        </div>
    )
}

export default PaymentPage
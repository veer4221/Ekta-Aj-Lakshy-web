import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  stateUpdateAction,
  updateUserAction,
  updatePaymentStatusAction,
  addUserAction,
} from "../../../Redux/Actions/index";
import axios from "axios";
const PaymentForm = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const [payment, setPayment] = useState(false);
  const [orderId, setOrderId] = useState(``);
  const [paymentID, setPaymentId] = useState(``);
  const [sic, setSic] = useState(``);
  const pay = async (e) => {
    e.preventDefault();

    const res = await axios.get(` http://3.145.10.120:3000/admin/api/v1/user/pay`);
    console.log(res);
    if (res.status != 200) {
      return;
    }

    var options = {
      key: "rzp_test_6X6pp6zdVMKoKv", // Enter the Key ID generated from the Dashboard
      amount: res.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: res.data.currency,
      name: "Ekta ej laksh",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        console.log(response);
        setPayment(true);
        setOrderId(response.razorpay_order_id);
        setPaymentId(response.razorpay_payment_id);
        setSic(response.razorpay_signature);
        if (
          response.razorpay_payment_id &&
          response.razorpay_order_id &&
          response.razorpay_signature
        ) {
          const obj = {
            email:localStorage.getItem("joinUsEmail"),
            payment: "1",
            orderId: response.razorpay_order_id,
            paymentID: response.razorpay_payment_id,
            paymentSignature: response.razorpay_signature,
          };

          dispatch(updatePaymentStatusAction(obj));
        }
      },
      // prefill: {
      //   contact: user.getUserInfo.mobileNumber,
      //   email: user.getUserInfo.email,
      // },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#f7e1ac",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
  };
  return (
    <>
      <div
        className="ourBtn"
        style={{ justifyContent: "center", display: "flex" }}
      >
        {payment && (
          <>
            <h1>Welcome to our Sangathan</h1>
            {/* <h2>{orderId}</h2>
            <h2>{paymentID}</h2>
            <h2>{sic}</h2> */}
          </>
        )}
        {!payment && <button onClick={pay}>|| Pay now ||</button>}
      </div>
    </>
  );
};

export default PaymentForm;

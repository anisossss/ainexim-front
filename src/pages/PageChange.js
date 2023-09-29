import React from "react";
import PaymentSuccess from "/public/loading.json";
import Lottie from "react-lottie";

export default function PageChange(props) {
  function HandleAnimation() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: PaymentSuccess,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return <Lottie options={defaultOptions} height={200} width={200} />;
  }
  return (
    <div
      style={{
        marginTop: "20%",
      }}
    >
      <HandleAnimation />
    </div>
  );
}

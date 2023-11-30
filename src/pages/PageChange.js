import React from "react";
import PaymentSuccess from "/public/assets/lotties/loading.json";
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

    return <Lottie options={defaultOptions} height={500} width={500} />;
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

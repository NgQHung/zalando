import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutAddressForm from "../../containers/checkout/checkout-address-form";
import { useAppDispatch, useAppSelector } from "../../hooks";
import CheckoutAddressExisting from "../../containers/checkout/checkout-address-existing";
import CheckoutAddressSelect from "../../containers/checkout/checkout-address-select";
import CheckoutAddressReview from "../../containers/checkout/checkout-address-review";

const Checkout = () => {
  const [addressIsClicked, setAdressIsClicked] = useState(false);
  const [selectTypeDelivery, setSelectTypeDelivery] = useState(false);
  const addressDelivery = useAppSelector((state) => state.checkoutSlice.addressDelivery);
  const isUpdateAddressDelivery = useAppSelector((state) => state.checkoutSlice.updateAddressDelivery);
  const user = useAppSelector((state) => state.userSlice.user);
  // const navigate = useNavigate();

  // const dispatch = useAppDispatch();
  useEffect(() => {
    // console.log("user: ", user);
    // console.log("addressDelivery: ", addressDelivery);
    // console.log("isUpdateAddressDelivery", isUpdateAddressDelivery);
  }, [user, addressDelivery]);

  return (
    <>
      {addressIsClicked ? (
        <CheckoutAddressReview addressDelivery={addressDelivery!} />
      ) : (
        <div className="delivery flex flex-col max-w-4/5 basis-4/5 ">
          <CheckoutAddressSelect
            setSelectTypeDelivery={setSelectTypeDelivery}
            selectTypeDelivery={selectTypeDelivery}
          />
          <div className={"deliveryDropdown-hidden " + (selectTypeDelivery ? "deliveryDropdown-show" : "")}>
            {addressDelivery && !isUpdateAddressDelivery ? (
              <CheckoutAddressExisting addressDelivery={addressDelivery} setAdressIsClicked={setAdressIsClicked} />
            ) : (
              <CheckoutAddressForm setAdressIsClicked={setAdressIsClicked} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;

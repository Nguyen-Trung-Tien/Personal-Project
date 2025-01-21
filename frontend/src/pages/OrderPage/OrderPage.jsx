import React from "react";
import { Checkbox } from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import imag from "../../assets/images/test.jpg";
import {
  WrapperListOrder,
  WrapperStyleHeader,
  WrapperLeft,
  WrapperRight,
  WrapperInfo,
  WrapperTotal,
  WrapperPriceDiscount,
  WrapperItemOrder,
  WrapperCountOrder,
} from "./style";
import ButtonComponent from "../../component/ButtonComponent/ButtonComponent";
import { WrapperInputNumber } from "../../component/ProductDetailComponent/style";
import { useSelector } from "react-redux";

const OrderPage = () => {
  const order = useSelector((state) => state.order);
  const onChange = (e) => {
    console.log("Checkbox changed:", e.target.checked);
  };

  const handleChangeCount = (action) => {};

  const handleOnChangeCheckAll = (e) => {};

  return (
    <div style={{ background: "#f5f5fa", width: "100%", height: "100vh" }}>
      <div style={{ height: "100%", width: "1270px", margin: "0 auto" }}>
        <h3>Giỏ hàng</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <WrapperLeft>
            <WrapperStyleHeader>
              <span style={{ display: "inline-block", width: "390px" }}>
                <Checkbox onChange={handleOnChangeCheckAll} />
                <span style={{ marginLeft: "12px" }}>
                  Tất cả ({order?.orderItems?.length}) sản phẩm
                </span>
              </span>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  paddingRight: "20px",
                }}
              >
                <span style={{ width: "120px", textAlign: "center" }}>
                  Đơn giá
                </span>
                <span style={{ width: "120px", textAlign: "center" }}>
                  Số lượng
                </span>
                <span style={{ width: "120px", textAlign: "center" }}>
                  Thành tiền
                </span>
                <DeleteOutlined style={{ cursor: "pointer" }} />
              </div>
            </WrapperStyleHeader>
            <WrapperListOrder>
              {order?.orderItems?.map((order, index) => {
                return (
                  <WrapperItemOrder key={index}>
                    <div
                      style={{
                        width: "390px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <Checkbox onChange={onChange} />
                      <img
                        src={imag}
                        alt="Product"
                        style={{
                          width: "77px",
                          height: "79px",
                          objectFit: "cover",
                        }}
                      />
                      <div style={{ fontSize: "13px", color: "#242424" }}>
                        {order?.name}
                      </div>
                    </div>
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingRight: "20px",
                      }}
                    >
                      <span style={{ width: "120px", textAlign: "center" }}>
                        <span style={{ fontSize: "14px", color: "#242424" }}>
                          {order?.price}
                        </span>
                        <WrapperPriceDiscount>
                          {order?.amount}
                        </WrapperPriceDiscount>
                      </span>
                      <WrapperCountOrder>
                        <button onClick={() => handleChangeCount("decrease")}>
                          <MinusOutlined style={{ fontSize: "12px" }} />
                        </button>
                        <WrapperInputNumber
                          defaultValue={order?.amount}
                          value={order?.amount}
                          size="small"
                          onChange={onChange}
                          controls={false}
                        />
                        <button onClick={() => handleChangeCount("increase")}>
                          <PlusOutlined style={{ fontSize: "12px" }} />
                        </button>
                      </WrapperCountOrder>
                      <span
                        style={{
                          width: "120px",
                          textAlign: "center",
                          color: "rgb(254, 56, 52)",
                          fontWeight: "500",
                        }}
                      >
                        {order?.price * order?.amount}
                      </span>
                      <DeleteOutlined style={{ cursor: "pointer" }} />
                    </div>
                  </WrapperItemOrder>
                );
              })}
            </WrapperListOrder>
          </WrapperLeft>
          <WrapperRight>
            <div style={{ width: "100%" }}>
              <WrapperInfo>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Tạm tính</span>
                  <span
                    style={{
                      color: "#000",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  ></span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Giảm giá</span>
                  <span
                    style={{
                      color: "#000",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  ></span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Thuế</span>
                  <span
                    style={{
                      color: "#000",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    300,000₫
                  </span>
                </div>
              </WrapperInfo>
              <WrapperTotal>
                <span>Tổng tiền</span>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <span
                    style={{
                      color: "rgb(254, 56, 52)",
                      fontSize: "24px",
                      fontWeight: "500",
                    }}
                  >
                    420,000₫
                  </span>
                  <span style={{ color: "#000", fontSize: "14px" }}>
                    (Đã bao gồm VAT)
                  </span>
                </span>
              </WrapperTotal>
            </div>
            <ButtonComponent
              // onClick={() => {}}
              size={40}
              textButton="Mua hàng"
              styleTextButton={{
                color: "#fff",
                fontSize: "14px",
                fontWeight: "bold",
              }}
              styleButton={{
                width: "100%",
                background: "#f00",
                height: "48px",
                border: "none",
                borderRadius: "4px",
              }}
            />
          </WrapperRight>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

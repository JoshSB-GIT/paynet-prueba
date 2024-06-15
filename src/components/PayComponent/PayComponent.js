import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaCheck } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { TbCoin } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { CiCalculator1 } from "react-icons/ci";
import "./PayComponent.css";

function PayComponent(props) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handlePaymentChange = (e) => {
    setSelectedPaymentMethod(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      Swal.fire({
        icon: "success",
        title: "Datos guardados",
        text: "Tus datos han sido guardados correctamente!",
      });
      console.log("Formulario válido, enviando datos...");
    } else {
      console.log("Formulario inválido, por favor corrige los errores.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes seleccionar un método de pago.",
      });
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const validateForm = () => {
    return selectedPaymentMethod !== "";
  };

  return (
    <>
      <div className="cont-box">
        <div className="box">
          <div className="box-header">
            <p
              className={`${
                props.liquidationSubmitted
                  ? "box-header--icon"
                  : "box-header--icon--disabled"
              }`}
            >
              {props.liquidationSubmitted ? <FaCheck /> : <IoClose />}
            </p>
            <p className="box-header--title">Pago</p>
          </div>
          <div className="box-content">
            <form className="form-control" onSubmit={handleSubmit}>
              <div className="input-col-4">
                <div
                  className={`radio-box ${
                    selectedPaymentMethod === "efectivo" ? "selected" : ""
                  }`}
                >
                  <div className="radio-box--input">
                    <input
                      type="radio"
                      id="efectivo"
                      name="pays"
                      disabled={!props.liquidationSubmitted}
                      onChange={handlePaymentChange}
                    />
                  </div>
                  <div
                    className={`${
                      props.liquidationSubmitted
                        ? "radio-box--icon"
                        : "radio-box--icon--disabled"
                    }`}
                  >
                    <FaRegMoneyBillAlt />
                  </div>
                  <div className="radio-box--text">
                    <span>Efectivo</span>
                  </div>
                </div>

                <div
                  className={`radio-box ${
                    selectedPaymentMethod === "pse" ? "selected" : ""
                  }`}
                >
                  <div className="radio-box--input">
                    <input
                      type="radio"
                      id="pse"
                      name="pays"
                      disabled={!props.liquidationSubmitted}
                      onChange={handlePaymentChange}
                    />
                  </div>
                  <div
                    className={`${
                      props.liquidationSubmitted
                        ? "radio-box--icon"
                        : "radio-box--icon--disabled"
                    }`}
                  >
                    <TbCoin />
                  </div>
                  <div className="radio-box--text">
                    <span>PSE</span>
                  </div>
                </div>

                <div
                  className={`radio-box ${
                    selectedPaymentMethod === "corresponsal" ? "selected" : ""
                  }`}
                >
                  <div className="radio-box--input">
                    <input
                      type="radio"
                      id="corresponsal"
                      name="pays"
                      disabled={!props.liquidationSubmitted}
                      onChange={handlePaymentChange}
                    />
                  </div>
                  <div
                    className={`${
                      props.liquidationSubmitted
                        ? "radio-box--icon"
                        : "radio-box--icon--disabled"
                    }`}
                  >
                    <AiOutlineShop />
                  </div>
                  <div className="radio-box--text" onClick={handleCancel}>
                    <span>Corresponsal bancario</span>
                  </div>
                </div>

                <div
                  className={`radio-box ${
                    selectedPaymentMethod === "datafono" ? "selected" : ""
                  }`}
                >
                  <div className="radio-box--input">
                    <input
                      type="radio"
                      id="datafono"
                      name="pays"
                      disabled={!props.liquidationSubmitted}
                      onChange={handlePaymentChange}
                    />
                  </div>
                  <div
                    className={`${
                      props.liquidationSubmitted
                        ? "radio-box--icon"
                        : "radio-box--icon--disabled"
                    }`}
                  >
                    <CiCalculator1 />
                  </div>
                  <div className="radio-box--text">
                    <span>Datáfono</span>
                  </div>
                </div>
              </div>
              <div className="col-buttom-3">
                <div className="cont-button-3">
                  <button
                    className="btn btn-danger-outline-custom"
                    onClick={handleCancel}
                  >
                    Cancelar
                  </button>
                </div>
                <div className="cont-button-4">
                  <button
                    className={`${
                      props.liquidationSubmitted
                        ? "btn btn-danger-custom"
                        : "btn btn-danger-custom--disabled"
                    }`}
                    disabled={!props.liquidationSubmitted}
                  >
                    Generar
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="box-footer"></div>
        </div>
      </div>
    </>
  );
}

export { PayComponent };

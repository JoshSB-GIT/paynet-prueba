import React, { useState } from "react";
import Swal from "sweetalert2";
import "./GeneralInfo.css";
import { FaCheck } from "react-icons/fa6";

function GeneralInfo(props) {
  const [formData, setFormData] = useState({
    placa: "",
    confirmacionPlaca: "",
    modelo: "",
    tipoVehiculo: "",
    tipoServicio: "",
    formaPago: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      props.onFormSubmit();
    } else {
      let errorMessages = "";
      for (const key in formErrors) {
        if (formErrors.hasOwnProperty(key)) {
          errorMessages += `${formErrors[key]}, `;
        }
      }
      // Remove the trailing comma and space
      errorMessages = errorMessages.slice(0, -2);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Hay errores en el formulario, por favor corrígelos: ${errorMessages}`,
      });
    }
  };

  const validateForm = (data) => {
    let errors = {};
    const placaRegex = /^[A-Z]{3}\d{3}$/;

    if (!data.placa) {
      errors.placa = "La placa es requerida";
    } else if (!placaRegex.test(data.placa.toUpperCase().replace(/\s+/g, ""))) {
      errors.placa = "Formato de placa erroneo";
    }

    if (!data.confirmacionPlaca) {
      errors.confirmacionPlaca = "La confirmación de placa es requerida";
    } else if (data.placa !== data.confirmacionPlaca) {
      errors.confirmacionPlaca = "Las placas no coinciden";
    }

    if (!data.modelo) {
      errors.modelo = "El modelo es requerido";
    }

    if (!data.tipoVehiculo) {
      errors.tipoVehiculo = "El tipo de vehículo es requerido";
    }

    if (!data.tipoServicio) {
      errors.tipoServicio = "El tipo de servicio es requerido";
    }

    if (!data.formaPago) {
      errors.formaPago = "La forma de pago es requerida";
    }

    return errors;
  };

  return (
    <>
      <div className="cont-title">
        <h2 className="main-title">Liquidación de pines</h2>
      </div>

      <div className="cont-box">
        <div className="box">
          <div className="box-header">
            <p className="box-header--icon">
              <FaCheck />
            </p>
            <p className="box-header--title">Información general</p>
          </div>
          <div className="box-content">
            <form className="form-control" onSubmit={handleSubmit}>
              <div className="input-col-3">
                <div className="con-input">
                  <input
                    type="text"
                    name="placa"
                    value={formData.placa}
                    onChange={handleChange}
                  />
                  <span className="span-input">Placa</span>
                </div>

                <div className="con-input">
                  <input
                    type="text"
                    name="confirmacionPlaca"
                    value={formData.confirmacionPlaca}
                    onChange={handleChange}
                  />
                  <span className="span-input">Confirmación de placa</span>
                </div>

                <div className="con-select">
                  <select
                    name="modelo"
                    value={formData.modelo}
                    onChange={handleChange}
                  >
                    <option>Elegir una opción</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>
                  </select>
                  <span className="span-input">Modelo</span>
                </div>
              </div>

              <div className="input-col-2">
                <div className="con-select">
                  <select
                    name="tipoVehiculo"
                    value={formData.tipoVehiculo}
                    onChange={handleChange}
                  >
                    <option>Elegir una opción</option>
                    <option>carro</option>
                    <option>camioneta</option>
                    <option>eléctrico</option>
                    <option>moto</option>
                    <option>motocarro</option>
                  </select>
                  <span className="span-input">Tipo de vehculo</span>
                </div>

                <div className="con-select">
                  <select
                    name="tipoServicio"
                    value={formData.tipoServicio}
                    onChange={handleChange}
                  >
                    <option>Elegir una opción</option>
                    <option>A1</option>
                    <option>B1</option>
                    <option>C1</option>
                  </select>
                  <span className="span-input">Tipo de servicio</span>
                </div>
              </div>
              <div className="col">
                <div className="col-title">
                  <p>Forma de pago</p>
                </div>
                <div className="cont-radio-buttons">
                  <div className="radio-buttons">
                    <input
                      type="radio"
                      id="contado"
                      name="formaPago"
                      value="Contado"
                      checked={formData.formaPago === "Contado"}
                      onChange={handleChange}
                    />
                    <label>Contado</label>
                  </div>

                  <div className="radio-buttons">
                    <input
                      type="radio"
                      id="tioPaco"
                      name="formaPago"
                      value="Tío Paco"
                      checked={formData.formaPago === "Tío Paco"}
                      onChange={handleChange}
                    />
                    <label>Tío Paco</label>
                  </div>
                </div>

                <div className="cont-button">
                  <button className="btn-primary-custom">Consultar</button>
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

export { GeneralInfo };

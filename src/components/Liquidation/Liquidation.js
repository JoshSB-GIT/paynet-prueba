import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Liquidation.css";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Liquidation(props) {
  const [formData, setFormData] = useState({
    tipoDocumento: "Elegir una opción",
    documento: "",
    nombres: "",
    apellidos: "",
    direccion: "",
    telefono: "",
    correo: "",
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
      console.log("Formulario válido, enviando datos...");
    } else {
      console.log("Formulario inválido, por favor corrige los errores.");
      let errorMessages = "";
      for (const key in formErrors) {
        if (formErrors.hasOwnProperty(key)) {
          errorMessages += `${formErrors[key]}. `;
        }
      }
      // Remove the trailing period and space
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

    const nameRegex = /^[A-Za-z\s]+$/;
    const documentRegex = /^\d+$/;
    const phoneRegex = /^\d{7,15}$/;

    if (data.tipoDocumento === "Elegir una opción") {
      errors.tipoDocumento = "El tipo de documento es requerido";
    }

    if (!data.documento) {
      errors.documento = "El documento es requerido";
    } else if (!documentRegex.test(data.documento)) {
      errors.documento = "El documento debe contener solo números";
    } else if (data.documento.length > 11) {
      errors.documento = "El documento no debe tener más de 11 caracteres";
    } else if (data.documento.length < 1) {
      errors.documento = "El documento no debe tener menos de 1 carácter";
    } else if (parseInt(data.documento, 10) < 0) {
      errors.documento = "El documento no puede ser negativo";
    }

    if (!data.nombres) {
      errors.nombres = "Los nombres son requeridos";
    } else if (!nameRegex.test(data.nombres)) {
      errors.nombres = "Los nombres solo deben contener letras y espacios";
    }

    if (!data.apellidos) {
      errors.apellidos = "Los apellidos son requeridos";
    } else if (!nameRegex.test(data.apellidos)) {
      errors.apellidos = "Los apellidos solo deben contener letras y espacios";
    }

    if (!data.direccion) {
      errors.direccion = "La dirección es requerida";
    }

    if (!data.telefono) {
      errors.telefono = "El teléfono es requerido";
    } else if (!phoneRegex.test(data.telefono)) {
      errors.telefono =
        "El teléfono debe contener solo números y tener entre 7 y 15 dígitos";
    }

    if (!data.correo) {
      errors.correo = "El correo es requerido";
    }

    return errors;
  };

  return (
    <>
      <div className="cont-box">
        <div className="box">
          <div className="box-header">
            <p
              className={`${
                props.generalInfoSubmitted
                  ? "box-header--icon"
                  : "box-header--icon--disabled"
              }`}
            >
              {props.generalInfoSubmitted ? <FaCheck /> : <IoClose />}
            </p>
            <p className="box-header--title">Liquidación</p>
          </div>
          <div className="box-content">
            <form className="form-control" onSubmit={handleSubmit}>
              <div className="input-col-2">
                <div className="col-1">
                  <div className="col-title1">
                    <p>Información del cliente</p>
                  </div>
                  <div className="con-select">
                    <select
                      name="tipoDocumento"
                      value={formData.tipoDocumento}
                      onChange={handleChange}
                      disabled={!props.generalInfoSubmitted}
                    >
                      <option>Elegir una opción</option>
                      <option>Cédula de ciudadanía</option>
                      <option>Tarjeta de identidad</option>
                      <option>Cédula extranjera</option>
                    </select>
                    <span className="span-input">Tipo de documento</span>
                  </div>

                  <div className="con-input">
                    <input
                      disabled={!props.generalInfoSubmitted}
                      type="number"
                      name="documento"
                      value={formData.documento}
                      onChange={handleChange}
                      placeholder="Número de documento"
                      min={0}
                    />
                    <span className="span-input">Número de documento</span>
                  </div>

                  <div className="con-input">
                    <input
                      disabled={!props.generalInfoSubmitted}
                      type="text"
                      name="nombres"
                      value={formData.nombres}
                      onChange={handleChange}
                      placeholder="Nombres"
                    />
                    <span className="span-input">Nombres</span>
                  </div>

                  <div className="con-input">
                    <input
                      disabled={!props.generalInfoSubmitted}
                      type="text"
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleChange}
                      placeholder="Apellidos"
                    />
                    <span className="span-input">Apellidos</span>
                  </div>

                  <div className="con-input">
                    <input
                      disabled={!props.generalInfoSubmitted}
                      type="text"
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleChange}
                      placeholder="Dirección"
                    />
                    <span className="span-input">Dirección</span>
                  </div>

                  <div className="con-input">
                    <input
                      disabled={!props.generalInfoSubmitted}
                      type="number"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Teléfono"
                    />
                    <span className="span-input">Teléfono</span>
                  </div>

                  <div className="con-input">
                    <input
                      disabled={!props.generalInfoSubmitted}
                      type="email"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="Correo"
                    />
                    <span className="span-input">Correo</span>
                  </div>
                </div>

                <div className="col-2">
                  <div className="table-data">
                    <div className="table-data--header">
                      <p>Valor de liquidación</p>
                    </div>
                    <div className="table-data--content input-col-2">
                      <div className="th-1">
                        <p>
                          ANSV
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$7000
                          <br />
                          Recaudo
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$1.0591
                          <br />
                          SICOV
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$99.936
                          <br />
                          RUNT
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15.900
                          <br />
                          Valor de servicio $221.943
                          <br />
                          IVA Servicio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$42.169,17
                        </p>
                      </div>
                      <div className="tc-1">
                        <p>
                          ANSV
                          <br />
                          Recaudo
                          <br />
                          SICOV
                          <br />
                          RUNT
                          <br />
                          Valor de servicio
                          <br />
                          IVA Servicio
                        </p>
                      </div>
                      <div className="tc-2">
                        <p>
                          $7000
                          <br />
                          $1.0591
                          <br />
                          $99.936
                          <br />
                          15.900
                          <br />
                          $221.943
                          <br />
                          $42.169,17
                        </p>
                      </div>
                    </div>
                    <div className="table-data--footer input-col-2">
                      <div className="total">
                        <p>Total</p>
                      </div>
                      <div className="value">
                        <span>$925.764,70</span>
                      </div>

                      <div className="th-1">
                        <p>
                          Total
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <b>$925.764,70</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="cont-button">
                  <button
                    className={`${
                      props.generalInfoSubmitted
                        ? "btn-primary-custom"
                        : "btn-primary-custom--disabled"
                    }`}
                    disabled={!props.generalInfoSubmitted}
                  >
                    Continuar
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

export { Liquidation };

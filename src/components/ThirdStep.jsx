import React from "react";
import { useState } from "react";

function ThirdStep({ formData, setFormData }) {
  return (
    <div className="form-male-container">
      <p className="favorite-brand">Your favorite sport:</p>
      <select
        id="dropdown"
        required=""
        className="form-check"
        value={formData.formCheck}
        onChange={(event) =>
          setFormData({ ...formData, formCheck: event.target.value })
        }
      >
        <option disabled="" selected="" value="">
          Select...
        </option>
        <option value="tennis">Tennis</option>
        <option value="swimming">Swimming</option>
        <option value="football">Football</option>
      </select>
      <p className="favorite-brand">Car makers you like:</p>
      <div
        className="checkbox-cars"
        value={formData.checkboxCars}
        onChange={(event) =>
          setFormData({ ...formData, checkboxCars: event.target.value })
        }
      >
        <label className="bmw">
          <input value="bmw" type="checkbox" />
          BMW
        </label>
        <label className="audi">
          <input value="audi" type="checkbox" />
          Audi
        </label>
        <label>
          <input value="honda" type="checkbox" />
          Honda
        </label>
        <label>
          <input value="toyota" type="checkbox" />
          Toyota
        </label>
        <label>
          <input value="dacia" type="checkbox" />
          Dacia
        </label>
      </div>
    </div>
  );
}

export default ThirdStep;

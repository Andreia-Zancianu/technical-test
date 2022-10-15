import React from "react";
import { useState } from "react";

function SecondStep({ formData, setFormData }) {
  return (
    <div className="form-female-container">
      <p className="brand-clothing">Your favorite clothing brand:</p>
      <select
        id="dropdown"
        className="form-checks"
        required=""
        value={formData.formChecks}
        onChange={(event) =>
          setFormData({ ...formData, formChecks: event.target.value })
        }
      >
        <option disabled="" selected="" value="">
          Select...
        </option>
        <option value="guess">Guess</option>
        <option value="hermes">Hermes</option>
        <option value="prada">Prada</option>
      </select>
      <p className="brand-cosmetics">Cosmetics brands you use:</p>
      <div
        className="checkbox-cosmetics"
        value={formData.checkboxCosmetics}
        onChange={(event) =>
          setFormData({ ...formData, checkboxCosmetics: event.target.value })
        }
      >
        <label>
          <input value="l'oreal" type="checkbox" />
          L'Oreal
        </label>
        <label>
          <input value="garnier" type="checkbox" />
          Garnier
        </label>
        <label className="schwarzkoph">
          <input value="schwarzkoph" type="checkbox" />
          Schwarzkoph
        </label>
        <label className="avon">
          <input value="avon" type="checkbox" />
          Avon
        </label>
        <label className="oriflame">
          <input value="oriflame" type="checkbox" />
          Oriflame
        </label>
      </div>
    </div>
  );
}

export default SecondStep;

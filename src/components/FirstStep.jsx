import React from "react";
import { useState } from "react";

function FirstStep({ formData, setFormData }) {
  return (
    <div className="first-step-container">
      <label className="first-label">
        Your name
        <br />
      </label>
      <input
        type="text"
        className="name"
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      />
      <br />
      <select
        id="dropdown"
        name="form-check"
        required=""
        className="year"
        value={formData.year}
        onChange={(event) =>
          setFormData({ ...formData, year: event.target.value })
        }
      >
        <option disabled="" selected="" value="">
          Year of birth
        </option>

        <option value="ten">2010</option>
        <option value="eleven">2011</option>
        <option value="twelve">2012</option>
        <option value="thirteen">2013</option>
        <option value="fourteen">2014</option>
        <option value="fifteen">2015</option>
        <option value="sixteen">2016</option>
        <option value="seventeen">2017</option>
        <option value="eighteen">2018</option>
        <option value="nineteen">2019</option>
        <option value="twentieth">2020</option>
        <option value="twenty-one">2021</option>
        <option value="twenty-two">2022</option>
      </select>
      <form
        className="form-check-radio"
        value={formData.formCheckRadio}
        onChange={(event) =>
          setFormData({ ...formData, formCheckRadio: event.target.value })
        }
      >
        <label className="input-radio-male">
          <input name="user-recommend" value="gender" type="radio" />
          male
        </label>
        <br />
        <label className="input-radio-female">
          <input name="user-recommend" value="gender" type="radio" />
          female
        </label>
      </form>
    </div>
  );
}

export default FirstStep;

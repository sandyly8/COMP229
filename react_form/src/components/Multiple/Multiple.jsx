import React, { useState } from "react";
import "./multiple.css";

export default function Multiple() {
  const [formData, setFormData] = useState({
    street: "",
    postalCode: "",
    city: "",
    selectedCountry: "",
  });

  const handleChange = (event) => {
    console.log('event event ', event)
    console.log('event event formData ', formData)

    const { name, value, type } = event.target;
    let valueToStore = value
    console.log('event name ', name)
    console.log('event value ', value)
    console.log('event type ', type)

    setFormData((prevFormData) => ({ ...prevFormData, [name]: valueToStore }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Street: ${formData.street}, Postal Code: ${formData.postalCode}, City: ${formData.city}, Country: ${formData.selectedCountry} `
    );
  };

  return (
    <div className="form-container">
      <h1>Address</h1>
      <form onSubmit={handleSubmit} className="multiple">
        <label className="multiple__text" htmlFor="street">
          Street:
        </label>
        <input
          type="text"
          id="street"
          className="multiple__input"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />

        <label className="multiple__text" htmlFor="postalCode">
          Postal Code:
        </label>
        <input
          type="text"
          id="postalCode"
          className="multiple__input"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
        />

        <label className="multiple__text" htmlFor="city">
          City:
        </label>
        <input
          type="city"
          id="city"
          className="multiple__input"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />


        <label className="multiple__text">
          Country:
          <select value={formData.selectedCountry} onChange={handleChange} name="selectedCountry">
            <option value="Canada">Canada</option>
            <option value="United States">United States</option>
            <option value="Mexico">Mexico</option>
          </select>
        </label>

        <button className="multiple__button" type="submit">
          Submit
        </button>
      </form>
    </div>

  );
}

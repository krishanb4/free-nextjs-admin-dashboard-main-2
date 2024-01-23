"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CheckboxFive from "@/components/Checkboxes/CheckboxFive";
import CheckboxFour from "@/components/Checkboxes/CheckboxFour";
import CheckboxOne from "@/components/Checkboxes/CheckboxOne";
import CheckboxThree from "@/components/Checkboxes/CheckboxThree";
import CheckboxTwo from "@/components/Checkboxes/CheckboxTwo";
import SwitcherFour from "@/components/Switchers/SwitcherFour";
import SwitcherOne from "@/components/Switchers/SwitcherOne";
import SwitcherThree from "@/components/Switchers/SwitcherThree";
import SwitcherTwo from "@/components/Switchers/SwitcherTwo";

import { useState } from "react";

const FormElements = () => {
  const [formData, setFormData] = useState({
    // Initialize form data state
    personalInformation: {
      name: "",
      dateOfBirth: "",
      gender: "Select", // Default value for dropdown
      placeOfBirth: "",
      nationality: "",
      religion: "",
      birthCity: "",
      address: "",
    },
    guardianInformation: {
      guardianName: "",
      relationship: "",
      contactNumber: "",
      guardianAddress: "",
    },
    howFound: "Select", // Default value for dropdown
    dateFound: "",
    healthInformation: {
      allergies: "",
      medications: "",
    },
    educationInformation: {
      schoolName: "",
      gradeClass: "",
      additionalInformation: "",
      specialNeeds: "",
      hobbiesInterests: "",
    },
  });

  const handleChange = (section, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <Breadcrumb pageName="Orphanage Registration" />
      <div className="content-wrapper mb-40">
        <form className="max-w-xl mx-auto mt-8" onSubmit={handleSubmit}>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              {" "}
              Orphan Information :
            </h3>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                1. Orphan Name :
              </label>
              <input
                type="text"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                placeholder="Enter orphan name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                2. Date of Birth :
              </label>
              <input
                type="date"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                3. Gender :
              </label>
              <select className="mt-1 ml-1 p-2 border rounded-md w-full">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                4. Place Of Birth :
              </label>
              <input
                type="text"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                placeholder="Enter birth place"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                5. Nationality :
              </label>
              <input
                type="text"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                placeholder="Enter nationality"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                6. Religion :
              </label>
              <input
                type="text"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                placeholder="Enter religion"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                7. Birth City :
              </label>
              <input
                type="text"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                placeholder="Enter birth city"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                8. Address :
              </label>
              <input
                type="text"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                placeholder="Enter address"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Orphan Health Information :
            </h3>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                1. Allergies :
              </label>
              <input
                type="text"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                placeholder="Type here"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                2. Current Medications :
              </label>
              <input
                type="text"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                placeholder="Type here"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Orphan Education Information :
            </h3>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                1. School (If Applicable) :
              </label>
              <input
                type="text"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                placeholder="School name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                2. Grade/Class (if applicable) :
              </label>
              <input
                type="text"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                placeholder="Grade"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                3. Special Needs/Requirements :
              </label>
              <input
                type="text"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                placeholder="Type here"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                4. Preferred Hobbies/Interests :
              </label>
              <input
                type="text"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                placeholder="Type here"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              {" "}
              Gardian Information :
            </h3>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                1. Name :
              </label>
              <input
                type="text"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                placeholder="Enter gardian name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                2. Relation to Orphan :
              </label>
              <input
                type="text"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                placeholder="Relation"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                3. Gardian Contact No :
              </label>
              <input
                type="text"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                placeholder="Contact No"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                4. Gardian Address :
              </label>
              <input
                type="text"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                placeholder="Enter Gardian address"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                5. How the Orphan was Found :
              </label>
              <select className="mt-1 ml-1 p-2 border rounded-md w-full">
                <option value="male">Outreach Program</option>
                <option value="female">Hospital</option>
                <option value="female">Police</option>
                <option value="female">Through a guardian/ Relation</option>
                <option value="female">Through a non-relation person</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                6. Date Found :
              </label>
              <input
                type="date"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormElements;

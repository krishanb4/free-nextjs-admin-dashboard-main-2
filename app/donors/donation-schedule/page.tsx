"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState } from "react";
import { WagmiProvider, useAccount } from "wagmi";
import { writeContract } from "@wagmi/core";
import { abi } from "../../abis/contractabit.json";
import { config } from "./config";

const FormLayout = () => {
  const { isConnected } = useAccount();
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

  const [donationAmount, setDonationAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  async function handleDonation() {
    const result = await writeContract(config, {
      abi,
      address: "0xaf76410dA21b998F30bbB1a2C8F13ceb7BD7d6B5",
      functionName: "Donate",
      args: ["1", "1000000000000000000"],
    });
    console.log(result);
  }

  return (
    <>
      <Breadcrumb pageName="Donation Schedule" />
      <div className="content-wrapper">
        <form className="max-w-xl mx-auto mt-8" onSubmit={handleSubmit}>
          <div>
            <h3 className="text-lg font-semibold mb-2"> Donation Schedule</h3>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                1. Donation Date :
              </label>
              <input
                type="date"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                2. Donation Type :
              </label>
              <select
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                required
              >
                <option value="male">Material Donations </option>
                <option value="female">Monetary donations</option>
                <option value="other">The Meal donations</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                3. Donation Amount :
              </label>
              <input
                type="number"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                placeholder="Mterials or Amount"
                required
                value={donationAmount}
                onChange={(e) => setDonationAmount(Number(e.target.value))}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                4. If you are planning to make a meal donation, please select a
                time :
              </label>
              <select
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                required
              >
                <option value="male">Breakfast</option>
                <option value="female">Lunch</option>
                <option value="other">Teatime</option>
                <option value="other">Dinner</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                5. For the material donation, please mention the time that you
                are planning to visit the orphanage :
              </label>
              <input
                type="text"
                className="mt-1 ml-1 p-2 border rounded-md w-full"
                placeholder="Mention Time"
                required
              />
            </div>

            {/* <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                6. For the monetary donation, please click here to proceed :
              </label>
              <span className="ml-1">
                <button
                  type="submit"
                  className="bg-blue-500 text-red px-4 py-2 rounded"
                >
                  Integration with the blockchain
                </button>
              </span>
            </div> */}
          </div>

          <div className="mt-8">
            <label className="block text-sm font-medium text-gray-700 mb-5">
              For the monetary donation, please click here to proceed :
            </label>
            {isConnected ? (
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded "
                onClick={handleDonation}
              >
                Submit
              </button>
            ) : (
              <w3m-button />
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default FormLayout;

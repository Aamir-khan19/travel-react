import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

const CancellationPolicy = () => (
  <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200 mt-8">
    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
      <FaExclamationCircle className="text-red-500 mr-2" />
      Cancellation Policy
    </h3>
    <ul className="space-y-3 text-gray-700">
      <li className="flex items-start">
        <span className="flex-shrink-0 text-red-500 font-bold mr-2">•</span>
        Airfare/Train fare cancellation applies to original booking refund policy.
      </li>
      <li className="flex items-start">
        <span className="flex-shrink-0 text-red-500 font-bold mr-2">•</span>
        Before <span className="font-bold text-gray-900">30 days</span>: 100% refund of total booking amount.
      </li>
      <li className="flex items-start">
        <span className="flex-shrink-0 text-red-500 font-bold mr-2">•</span>
        Before <span className="font-bold text-gray-900">15 days</span>: 25% cancellation fee applies to the total cost.
      </li>
      <li className="flex items-start">
        <span className="flex-shrink-0 text-red-500 font-bold mr-2">•</span>
        Before <span className="font-bold text-gray-900">7 days</span>: 50% cancellation fee applies to the total cost.
      </li>
      <li className="flex items-start">
        <span className="flex-shrink-0 text-red-500 font-bold mr-2">•</span>
        Before <span className="font-bold text-gray-900">3 days</span>: No refund allowed for advance payments.
      </li>
    </ul>
  </div>
);

export default CancellationPolicy;

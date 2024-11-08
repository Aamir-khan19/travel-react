import React from "react";
import DashboardSideBar from "../components/dashboard/DashboardSideBar";
import DashboardContentContainer from "../components/dashboard/DashboardContentContainer";

function DashboardMyreport() {
  return (
    <>
      <DashboardSideBar />
      <DashboardContentContainer>
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold">My Reports</h2>
            <p className="text-gray-600">
              Stay informed and gain valuable insights with comprehensive data
              and analytics right at your fingertips - up to 1 year data.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button className="text-purple-600 border-b-2 border-purple-600 py-2 px-4 font-medium">
              Conversion Report
            </button>
            <button className="text-gray-600 py-2 px-4 font-medium">
              Lead Status
            </button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 mb-6">
            <select className="border border-gray-300 rounded p-2">
              <option>Month</option>
              {/* Add more months */}
            </select>
            <select className="border border-gray-300 rounded p-2">
              <option>Agent</option>
              {/* Add more agents */}
            </select>
            <select className="border border-gray-300 rounded p-2">
              <option>Select Agent</option>
              {/* Add more agents */}
            </select>
            <button className="bg-purple-600 text-white rounded px-4 py-2">
              GO
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="p-4 border border-gray-300 rounded-lg text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-600">Total Leads</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-600">Total Booked</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg text-center">
              <p className="text-2xl font-bold">₹0</p>
              <p className="text-gray-600">Filesize</p>
            </div>
          </div>

          {/* Conversion Report Table */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-4 text-purple-600 font-medium">
              Conversion Report
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Total Leads</th>
                  <th className="py-2 px-4 border-b">Total Booked</th>
                  <th className="py-2 px-4 border-b">
                    Partial Amount Received
                  </th>
                  <th className="py-2 px-4 border-b">Total Amount Received</th>
                  <th className="py-2 px-4 border-b">Conversion (%)</th>
                  <th className="py-2 px-4 border-b">Filesize</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    colSpan="7"
                    className="py-4 px-4 text-center text-gray-600"
                  >
                    No data available
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </DashboardContentContainer>
    </>
  );
}

export default DashboardMyreport;

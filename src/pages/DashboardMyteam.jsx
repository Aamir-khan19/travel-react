import React from 'react'
import DashboardSideBar from '../components/dashboard/DashboardSideBar'
import DashboardContentContainer from '../components/dashboard/DashboardContentContainer'

const DashboardMyteam = () => {
  return (
    <>
    <DashboardSideBar/>
    <DashboardContentContainer>
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold">My Team</h2>
            <p className="text-sm text-gray-500">
              Effortlessly set up your team, inviting and efficiently managing members with different roles such as admin, editor, or sales agent.
            </p>
          </div>
          <button className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600">
            Add New Member
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2 px-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span>Status</span>
                    <select className="text-sm bg-white border border-gray-300 rounded focus:outline-none">
                      <option>All</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                </th>
                <th className="border-b py-2 px-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span>Role</span>
                    <select className="text-sm bg-white border border-gray-300 rounded focus:outline-none">
                      <option>All</option>
                      <option>Admin</option>
                      <option>Editor</option>
                      <option>Sales Agent</option>
                    </select>
                  </div>
                </th>
                <th className="border-b py-2 px-4 text-sm font-bold">Name / Email</th>
                <th className="border-b py-2 px-4 text-sm font-bold">Mobile</th>
                <th className="border-b py-2 px-4 text-sm font-bold">Role</th>
                <th className="border-b py-2 px-4 text-sm font-bold">Lead Auto Assign</th>
                <th className="border-b py-2 px-4 text-sm font-bold">Buy Lead Access</th>
                <th className="border-b py-2 px-4 text-sm font-bold">Status</th>
                <th className="border-b py-2 px-4 text-sm font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b py-2 px-4 text-sm text-gray-500" colSpan="9">
                  No data available
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>





    </DashboardContentContainer>
    </>
  )
}

export default DashboardMyteam
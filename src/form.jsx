import React from 'react';
 
const Form = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" id='FORM' > 
      <div id="form-container" className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <div id="registrationSuccess" className="success-message mb-6 text-center hidden">
          <h2 className="text-2xl font-bold text-green-600">Registration Successful!</h2>
        </div>
        <h1 className="text-3xl font-bold text-center mb-8">Startup Registration</h1>
        <div className="space-y-6">
          <div className="form-group" id="companyNameGroup">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="COMPANY-NAME"
              className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="form-group" id="companyTypeGroup">
            <label htmlFor="companyType" className="block text-sm font-medium text-gray-700">
              Type of Company
            </label>
            <input
              type="text"
              id="companyType"
              name="COMPANY-TYPE"
              className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="form-group" id="contactNumberGroup">
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              id="

contactNumber"
              name="CONTACT-NO"
              className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="form-group" id="emailGroup">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="E-MAIL"
              className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="form-group" id="regCertificateGroup">
            <label htmlFor="regCertificate" className="block text-sm font-medium text-gray-700">
              Upload Registration Certificate (PDF)
            </label>
            <div
              className="file-upload mt-1 w-full p-3 border rounded-lg bg-gray-50 cursor-pointer text-center"
              onClick={() => document.getElementById('regCertificate').click()}
            >
              <input
                type="file"
                id="regCertificate"
                name="Registration Certificate"
                accept=".pdf"
                className="hidden"
                required
              />
              Click to upload PDF
            </div>
          </div>

          <div className="form-group" id="gstNumberGroup">
            <label htmlFor="gstNumber" className="block text-sm font-medium text-gray-700">
              GST Number
            </label>
            <input
              type="text"
              id="gstNumber"
              name="GST-NO"
              className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="form-group" id="teamAssociateGroup">
            <label htmlFor="teamAssociate" className="block text-sm font-medium text-gray-700">
              Team Associate
            </label>
            <input
              type="text"
              id="teamAssociate"
              name="TEAM-ASSOCIATE"
              className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="form-group" id="channelPartnerGroup">
            <label htmlFor="channelPartner" className="block text-sm font-medium text-gray-700">
              Channel Partner
            </label>
            <input
              type="text"
              id="channelPartner"
              name="Channel Partner"
              className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="form-group" id="startupCospaceGroup">
            <label htmlFor="startupCospace" className="block text-sm font-medium text-gray-700">
              Startup Co-Space
            </label>
            <input
              type="text"
              id="startupCospace"
              name="Startup Co-Space"
              className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="form-group" id="statusCommentsGroup">
            <label htmlFor="statusComments" className="block text-sm font-medium text-gray-700">
              Status Comments
            </label>
            <textarea
              id="statusComments"
              name="Status Comments"
              rows="4"
              className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <button
            id="btn"
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

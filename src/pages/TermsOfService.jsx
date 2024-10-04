import React from "react";

const TermsOfService = () => {
  return (
    <div className="ml-2 mr-10">
      <div className="flex flex-col items-center">
        <div className="w-full px-9 mt-10 py-10">
          <h1 className="text-dark-blue text-3xl font-extrabold text-center">
            Terms of Service for gigshub
          </h1>

          <p className="text-dark-blue text-md mt-6">
            Welcome to gigshub. By accessing or using our service, you agree to
            comply with and be bound by the following terms and conditions. Please
            review them carefully.
          </p>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">Acceptance of Terms</h2>
          <p className="text-dark-blue text-md mt-6">
            By using gigshub, you agree to be bound by these Terms of Service,
            all applicable laws, and regulations. If you do not agree with any of
            these terms, you are prohibited from using our Service.
          </p>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">Service Description</h2>
          <p className="text-dark-blue text-md mt-6">
            gigshub is a job application management tool designed to autofill job
            applications based on your resume, update your resume based on job
            requirements, and contact HR representatives on your behalf via
            LinkedIn and Gmail. The Service requires users to grant OAuth access
            to their Gmail and LinkedIn accounts to perform these actions.
          </p>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">User Responsibilities</h2>
          <p className="text-dark-blue text-md mt-6">
            As a user of gigshub, you agree to:
          </p>
          <ul className="list-disc ml-5 mt-2">
            <li>
              Provide accurate, current, and complete information when registering
              or using the Service.
            </li>
            <li>
              Keep your login credentials secure and notify us immediately of any
              unauthorized access to your account.
            </li>
            <li>
              Refrain from using the Service for illegal purposes or in violation
              of any applicable laws or regulations.
            </li>
          </ul>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">OAuth Authorization</h2>
          <p className="text-dark-blue text-md mt-6">
            By using gigshub, you authorize the app to access your Gmail and
            LinkedIn accounts via OAuth. This access is used solely for the
            purpose of sending emails to HR representatives or interacting with
            job applications. We do not store your OAuth tokens after the session
            has ended.
          </p>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">Intellectual Property</h2>
          <p className="text-dark-blue text-md mt-6">
            All content, including text, graphics, logos, and software, is the
            property of gigshub or its licensors. You may not use, modify,
            reproduce, or distribute any content from gigshub without our
            permission.
          </p>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">Termination of Service</h2>
          <p className="text-dark-blue text-md mt-6">
            We reserve the right to suspend or terminate your account and access
            to the Service if you violate these Terms of Service or engage in
            unauthorized use of the Service.
          </p>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">Limitation of Liability</h2>
          <p className="text-dark-blue text-md mt-6">
            To the fullest extent permitted by law, gigshub shall not be liable for
            any indirect, incidental, or consequential damages arising from the
            use of, or inability to use, our Service. This includes but is not
            limited to data loss, business interruption, or personal injury.
          </p>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">Dispute Resolution</h2>
          <p className="text-dark-blue text-md mt-6">
            Any disputes arising from the use of gigshub will be resolved through
            binding arbitration in accordance with the laws of Portugal.
          </p>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">Changes to Terms</h2>
          <p className="text-dark-blue text-md mt-6">
            We may update these Terms of Service from time to time. Changes to the
            terms will be effective when posted on this page. By continuing to use
            the Service after changes are posted, you agree to be bound by the new
            terms.
          </p>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">Contact Us</h2>
          <p className="text-dark-blue text-md mt-6">
            If you have any questions about these Terms of Service, You can
            contact us by email at thiago@gigshub.io or ali@gigshub.io.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

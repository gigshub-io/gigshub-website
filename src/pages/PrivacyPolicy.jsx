import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="ml-2 mr-10">
      <div className="flex flex-col items-center">
        <div className="w-full px-9 mt-10 py-10">
          <h1 className="text-dark-blue text-3xl font-extrabold text-center">
            Privacy Policy for Jobbyo
          </h1>

          <p className="text-dark-blue text-md mt-6">
            This Privacy Policy explains Our policies on the collection, use,
            and disclosure of Your information when You use our Service. It also
            details Your privacy rights and how the law protects You. By using
            the Service, You agree to the collection and use of information in
            accordance with this Privacy Policy.
          </p>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">
            Interpretation and Definitions
          </h2>

          <h3 className="text-dark-blue text-xl font-semibold mt-6">
            Interpretation
          </h3>
          <p className="text-dark-blue text-md">
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. These definitions shall
            have the same meaning regardless of whether they appear in singular
            or in plural.
          </p>

          <h3 className="text-dark-blue text-xl font-semibold mt-6">
            Definitions
          </h3>
          <p className="text-dark-blue text-md">
            For the purposes of this Privacy Policy:
            <ul className="list-disc ml-5 mt-2">
              <li>
                <strong>Account:</strong> A unique account created for You to
                access our Service or parts of our Service.
              </li>
              <li>
                <strong>Company:</strong> Refers to Jobbyo, the official app
                used for autofilling job applications, updating resumes, and
                contacting HR via LinkedIn and Gmail.
              </li>
              <li>
                <strong>Personal Data:</strong> Any information that relates to
                an identified or identifiable individual.
              </li>
              <li>
                <strong>Service:</strong> The Jobbyo application and Chrome
                extension.
              </li>
              <li>
                <strong>Usage Data:</strong> Data collected automatically when
                using the Service (e.g., IP address, browser type).
              </li>
              <li>
                <strong>You:</strong> Refers to the individual using the
                Service, or the company, or other legal entity on behalf of
                which such individual is accessing the Service.
              </li>
            </ul>
          </p>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">
            Collecting and Using Your Personal Data
          </h2>

          <h3 className="text-dark-blue text-xl font-semibold mt-6">
            Personal Data
          </h3>
          <p className="text-dark-blue text-md">
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but
            is not limited to:
          </p>
          <ul className="list-disc ml-5 mt-2">
            <li>Your full name</li>
            <li>Your email address (via Gmail OAuth)</li>
            <li>Your LinkedIn profile information</li>
            <li>Your resume and job history data</li>
          </ul>

          <h3 className="text-dark-blue text-xl font-semibold mt-6">
            Usage Data
          </h3>
          <p className="text-dark-blue text-md">
            Usage Data is collected automatically when using the Service and
            may include details such as Your device's IP address, browser type,
            browser version, and interaction with job application forms or HR
            contact activities.
          </p>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">
            Use of Your Personal Data
          </h2>
          <p className="text-dark-blue text-md mt-6">
            We use Personal Data for the following purposes:
          </p>
          <ul className="list-disc ml-5 mt-2">
            <li>
              <strong>Autofill Job Applications:</strong> Your resume and
              personal data are used to automatically fill job applications
              based on the job requirements.
            </li>
            <li>
              <strong>Resume Optimization:</strong> To update and customize Your
              resume based on job descriptions and requirements.
            </li>
            <li>
              <strong>HR Contact:</strong> To allow You to contact HR via
              LinkedIn and Gmail on Your behalf. This involves OAuth
              authentication with Gmail to send emails on Your behalf.
            </li>
            <li>
              <strong>Service Improvements:</strong> To analyze usage trends and
              improve the quality of Our Service.
            </li>
          </ul>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">
            OAuth and Third-Party Integrations
          </h2>
          <p className="text-dark-blue text-md mt-6">
            Our app integrates with Google Gmail APIs and LinkedIn to provide
            functionality such as sending emails on Your behalf or accessing job
            application data. We use OAuth 2.0 to ensure secure access to Your
            accounts. By using these services, You agree to the collection and
            use of Your personal information in accordance with this Privacy
            Policy and the terms set forth by Google and LinkedIn.
          </p>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">
            Retention of Your Personal Data
          </h2>
          <p className="text-dark-blue text-md mt-6">
            We retain Your Personal Data only for as long as is necessary for
            the purposes set out in this Privacy Policy or as required by law.
          </p>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">
            Transfer of Your Personal Data
          </h2>
          <p className="text-dark-blue text-md mt-6">
            Your Personal Data may be transferred and processed in countries
            outside of Your jurisdiction. By using the Service, You consent to
            such transfers.
          </p>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">
            Deletion of Your Personal Data
          </h2>
          <p className="text-dark-blue text-md mt-6">
            You have the right to delete or request that We assist in deleting
            the Personal Data that We have collected about You. You can do so by
            accessing the account settings within the Service or contacting Us.
          </p>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">
            Changes to This Privacy Policy
          </h2>
          <p className="text-dark-blue text-md mt-6">
            We may update this Privacy Policy from time to time. Changes to this
            Privacy Policy are effective when posted on this page.
          </p>

          <h2 className="text-dark-blue text-2xl font-bold mt-8">Contact Us</h2>
          <p className="text-dark-blue text-md mt-6">
            If you have any questions about this Privacy Policy, You can contact
            us:
            <br />
            By email at thiago@jobbyo.ai.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

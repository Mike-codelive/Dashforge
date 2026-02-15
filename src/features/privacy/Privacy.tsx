export const Privacy = () => {
  return (
    <div className="dark:bg-DF-bg-dark min-h-screen bg-white px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Privacy Policy
        </h1>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit or make a purchase from
          DashForge.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-8 text-gray-700 dark:text-gray-300">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Information We Collect
          </h2>
          <p className="mt-3">
            We collect information you provide directly to us and automatically
            when you use our services, including your name, email address,
            browsing data, and interaction data.
          </p>
          <p className="mt-2">
            We may also collect aggregated and anonymized data to understand
            usage patterns and help us improve our platform.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            How We Use Your Information
          </h2>
          <p className="mt-3">We use the information we collect to:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Provide, operate, and maintain our platform</li>
            <li>Improve and personalize your experience</li>
            <li>Communicate with you about updates and support</li>
            <li>Monitor usage and technical performance</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Sharing Your Information
          </h2>
          <p className="mt-3">
            We do not sell or rent your personal information to third parties.
            Your information may be shared with trusted partners who help us
            provide services, perform analytics, or comply with legal
            obligations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Cookies and Tracking
          </h2>
          <p className="mt-3">
            We use cookies and similar tracking technologies to track activity
            and hold certain information. You can choose to disable cookies
            through your browser settings, but this may affect site
            functionality.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Your Choices
          </h2>
          <p className="mt-3">
            You have choices regarding your information, including opting out of
            marketing emails or adjusting your privacy preferences.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mt-3">
            If you have questions about this Privacy Policy, email us at{" "}
            <a
              href="mailto:support@dashforge.com"
              className="text-blue-600 hover:underline"
            >
              support@dashforge.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

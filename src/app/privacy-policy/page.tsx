import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site.config'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
}

const LAST_UPDATED = 'June 27, 2026'

export default function PrivacyPolicy() {
  return (
    <div className="pt-[140px] pb-[54px]">
      <div className="py-[27px] w-[90%] md:w-[80%] mx-auto">
        <div id="aria-font">
          <h1 className="text-[30px] text-[#333] pb-[10px] leading-[1em] font-[500]">
            <strong>Privacy Policy</strong>
          </h1>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            <em>Last Updated: {LAST_UPDATED}</em>
          </p>

          {/* Section 1 — Introduction */}
          <ol className="list-decimal list-inside pb-[1em]">
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>Introduction</strong>
              </h2>
            </li>
          </ol>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            {siteConfig.name} ({siteConfig.url}) is an independent, non-partisan research and policy
            archive. The site is provided and operated by Free For Charity, a 501(c)(3) nonprofit
            that builds and hosts websites for charitable organizations. In this policy,
            &quot;we,&quot; &quot;us,&quot; and &quot;our&quot; refer to Free For Charity acting as
            the operator of {siteConfig.name}. This Privacy Policy explains what information we
            collect when you visit this website, how we use it, and the choices you have. By using
            the site, you agree to the practices described here.
          </p>

          {/* Section 2 — Scope */}
          <ol className="list-decimal list-inside pb-[1em]" start={2}>
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>Scope of This Policy</strong>
              </h2>
            </li>
          </ol>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            {siteConfig.name} is a static, read-only publication. It does not offer user accounts,
            logins, comments, discussion forums, file uploads, on-site payments, or e-commerce, and
            it does not host forms that store your data on our servers. Because of this, the
            personal information we handle is limited and is described below. This policy applies
            only to this website; it does not cover third-party sites we link to, which have their
            own privacy practices.
          </p>

          {/* Section 3 — Information We Collect */}
          <ol className="list-decimal list-inside pb-[1em]" start={3}>
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>Information We Collect</strong>
              </h2>
            </li>
          </ol>

          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            <strong>3.1 Information you choose to send us.</strong> If you email us — for example,
            using a contact link or requesting our newsletter — your message is composed in your own
            email application and sent directly to us. We receive whatever you include, such as your
            email address and the content of your message. We use this only to respond to you or to
            add you to a mailing list at your request.
          </p>

          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            <strong>3.2 Information collected automatically (with your consent).</strong> Like most
            websites, we use analytics services to understand how the site is used. When you consent
            to analytics or marketing cookies, these services may collect standard technical
            information such as your IP address, browser and device type, referring page, and the
            pages you view. This information helps us improve the site. See our{' '}
            <a href="/cookie-policy" className="text-[#007bff] underline">
              Cookie Policy
            </a>{' '}
            for the specific services and cookies involved and how to control them.
          </p>

          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            <strong>3.3 Hosting logs.</strong> The site is delivered as static files through a
            third-party hosting provider, which may keep standard server logs (such as IP addresses
            and requested URLs) for security and reliability. These are processed by the hosting
            provider under its own terms.
          </p>

          {/* Section 4 — How We Use Information */}
          <ol className="list-decimal list-inside pb-[1em]" start={4}>
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>How We Use Information</strong>
              </h2>
            </li>
          </ol>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            We use the limited information we collect to:
          </p>
          <ul className="list-disc list-inside space-y-[4px] pb-[1em]">
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              Operate, maintain, and secure the website.
            </li>
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              Understand aggregate usage so we can improve the content and experience.
            </li>
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              Respond to messages you send us and, if you ask, send you updates.
            </li>
          </ul>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            We do not sell, rent, or trade your personal information, and we do not use it to build
            advertising profiles beyond what any marketing cookies you consent to may do through
            their own providers.
          </p>

          {/* Section 5 — Third-Party Services */}
          <ol className="list-decimal list-inside pb-[1em]" start={5}>
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>Third-Party Services</strong>
              </h2>
            </li>
          </ol>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            We rely on a small number of reputable third parties. Analytics and marketing tools
            (such as Google Analytics, and where configured, Microsoft Clarity and the Meta Pixel)
            run only after you grant the relevant cookie consent. Our hosting provider delivers the
            site&apos;s files. The site also links to external sources and to our legacy archive;
            those destinations operate independently. Each third party processes data under its own
            privacy policy, and we encourage you to review them.
          </p>

          {/* Section 6 — Data Sharing */}
          <ol className="list-decimal list-inside pb-[1em]" start={6}>
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>How We Share Information</strong>
              </h2>
            </li>
          </ol>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            We share information only with the service providers described above, to the extent
            needed to operate the site, and when required to comply with the law or to protect the
            rights, safety, and security of the site and its visitors.
          </p>

          {/* Section 7 — Data Retention */}
          <ol className="list-decimal list-inside pb-[1em]" start={7}>
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>Data Retention</strong>
              </h2>
            </li>
          </ol>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            Messages you send us are kept only as long as needed to respond to you or to maintain a
            mailing list you have asked to join. Analytics data is retained according to each
            provider&apos;s default retention settings. You may ask us to delete correspondence you
            have sent us at any time.
          </p>

          {/* Section 8 — Your Rights */}
          <ol className="list-decimal list-inside pb-[1em]" start={8}>
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>Your Rights and Choices</strong>
              </h2>
            </li>
          </ol>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            Depending on where you live, you may have rights to access, correct, or delete personal
            information we hold about you, or to object to or restrict certain processing. You can
            also:
          </p>
          <ul className="list-disc list-inside space-y-[4px] pb-[1em]">
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              Change or withdraw your cookie consent at any time through the cookie banner.
            </li>
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              Use your browser settings to block or delete cookies.
            </li>
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              Contact us using the details below to exercise any of your rights.
            </li>
          </ul>

          {/* Section 9 — International Transfers */}
          <ol className="list-decimal list-inside pb-[1em]" start={9}>
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>International Data Transfers</strong>
              </h2>
            </li>
          </ol>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            We and our service providers operate internationally, so information may be processed in
            countries other than your own, including the United States. Where this happens, we rely
            on the safeguards offered by those providers.
          </p>

          {/* Section 10 — Children's Privacy */}
          <ol className="list-decimal list-inside pb-[1em]" start={10}>
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>Children&apos;s Privacy</strong>
              </h2>
            </li>
          </ol>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            This site publishes research and policy analysis for a general and professional
            audience. It is not directed to children under 13, and we do not knowingly collect
            personal information from them. If you believe a child has provided us information,
            please contact us and we will delete it.
          </p>

          {/* Section 11 — Security */}
          <ol className="list-decimal list-inside pb-[1em]" start={11}>
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>Security</strong>
              </h2>
            </li>
          </ol>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            The site is served over HTTPS and uses modern security headers. While we take reasonable
            measures to protect information, no method of transmission or storage over the internet
            is completely secure.
          </p>

          {/* Section 12 — Changes */}
          <ol className="list-decimal list-inside pb-[1em]" start={12}>
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>Changes to This Policy</strong>
              </h2>
            </li>
          </ol>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            We may update this Privacy Policy from time to time. Any changes will be posted on this
            page with a revised &quot;Last Updated&quot; date.
          </p>

          {/* Section 13 — Contact */}
          <ol className="list-decimal list-inside pb-[1em]" start={13}>
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>Contact Us</strong>
              </h2>
            </li>
          </ol>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            For questions about this policy or your information, contact the site operator, Free For
            Charity:
          </p>
          <ul className="list-inside list-disc space-y-[4px] pb-[1em]">
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              <strong>Editorial / general:</strong>{' '}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-[#007bff] underline">
                {siteConfig.contactEmail}
              </a>
            </li>
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              <strong>Privacy / data requests:</strong>{' '}
              <a href="mailto:privacy@freeforcharity.org" className="text-[#007bff] underline">
                privacy@freeforcharity.org
              </a>
            </li>
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              <strong>Phone:</strong>{' '}
              <a href="tel:520-222-8104" className="text-[#007bff] underline">
                520-222-8104
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

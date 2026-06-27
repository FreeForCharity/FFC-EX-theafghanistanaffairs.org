import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site.config'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `The terms governing use of ${siteConfig.name}.`,
}

const LAST_UPDATED = 'June 27, 2026'

export default function TermsOfService() {
  return (
    <div className="pt-[130px] pb-[54px]">
      <div className="py-[27px] w-[90%] md:w-[80%] mx-auto">
        <div id="aria-font">
          <h1 className="text-[30px] text-[#333] pb-[10px] leading-[1em] font-[500]">
            <strong>Terms of Service</strong>
          </h1>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            <em>Last Updated: {LAST_UPDATED}</em>
          </p>

          {/* Introduction */}
          <h2 className="text-[26px] text-[#333] pb-[10px] leading-[26px] font-[700] mt-[1em]">
            Introduction
          </h2>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            Welcome to {siteConfig.name}. These Terms of Service (&quot;Terms&quot;) govern your
            access to and use of this website (the &quot;Site&quot;). The Site is an independent,
            non-partisan research and policy archive, provided and operated by Free For Charity, a
            501(c)(3) nonprofit (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing
            or using the Site, you agree to be bound by these Terms. If you do not agree, please do
            not use the Site.
          </p>

          {/* Nature of the Site */}
          <h2 className="text-[26px] text-[#333] pb-[10px] leading-[26px] font-[700] mt-[1em]">
            Nature of the Site
          </h2>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            The Site is a read-only publication. It provides research, analysis, policy briefs, and
            commentary for general informational purposes. It does not offer user accounts, logins,
            comments, donations, payments, or other interactive services, and we do not collect
            content submitted by visitors. Nothing on the Site constitutes legal, financial, or
            professional advice.
          </p>

          {/* Use of the Site */}
          <h2 className="text-[26px] text-[#333] pb-[10px] leading-[26px] font-[700] mt-[1em]">
            Acceptable Use
          </h2>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            You agree not to use the Site for any unlawful purpose or in any way that could harm,
            disable, overburden, or impair it. Prohibited activities include, but are not limited
            to:
          </p>
          <ul className="list-disc list-inside ml-[1.5em] space-y-[4px] pb-[1em]">
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              Violating any applicable law or regulation.
            </li>
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              Transmitting harmful or malicious code, viruses, or malware.
            </li>
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              Interfering with or disrupting the integrity or performance of the Site.
            </li>
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              Attempting to gain unauthorized access to the Site or its underlying systems.
            </li>
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              Systematically scraping or republishing the Site&apos;s content in a way that
              misrepresents its source or violates the rights described below.
            </li>
          </ul>

          {/* Intellectual Property */}
          <h2 className="text-[26px] text-[#333] pb-[10px] leading-[26px] font-[700] mt-[1em]">
            Content and Intellectual Property
          </h2>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            The articles and analysis published on the Site are the work of their author and are
            preserved from their original publication. The compilation, design, and presentation of
            the Site are the property of Free For Charity and the author, or their respective
            licensors. You may read, quote, and share the material for personal, educational, or
            non-commercial research purposes with appropriate attribution and a link to the source.
            You may not reproduce the material wholesale, or use it commercially, without
            permission. Photography used on the Site is in the public domain and credited in the
            project repository.
          </p>

          {/* Third-Party Links */}
          <h2 className="text-[26px] text-[#333] pb-[10px] leading-[26px] font-[700] mt-[1em]">
            Third-Party Links
          </h2>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            The Site links to third-party websites and sources, including our legacy archive and
            cited publications, that are not owned or controlled by us. We are not responsible for
            the content, privacy policies, or practices of any third-party sites, and a link does
            not imply endorsement.
          </p>

          {/* Disclaimer */}
          <h2 className="text-[26px] text-[#333] pb-[10px] leading-[26px] font-[700] mt-[1em]">
            Disclaimer of Warranties
          </h2>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            The Site and its content are provided on an &quot;as is&quot; and &quot;as
            available&quot; basis. While we strive for accuracy, we make no representations or
            warranties of any kind, express or implied, regarding the completeness, reliability, or
            accuracy of the content. We disclaim all warranties, including implied warranties of
            merchantability, fitness for a particular purpose, and non-infringement.
          </p>

          {/* Limitation of Liability */}
          <h2 className="text-[26px] text-[#333] pb-[10px] leading-[26px] font-[700] mt-[1em]">
            Limitation of Liability
          </h2>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            To the fullest extent permitted by law, Free For Charity shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, or any loss arising
            from your use of, or inability to use, the Site or its content.
          </p>

          {/* Governing Law */}
          <h2 className="text-[26px] text-[#333] pb-[10px] leading-[26px] font-[700] mt-[1em]">
            Governing Law
          </h2>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            These Terms shall be governed by and construed in accordance with the laws of the United
            States and the State of North Carolina, without regard to its conflict of law
            principles.
          </p>

          {/* Changes */}
          <h2 className="text-[26px] text-[#333] pb-[10px] leading-[26px] font-[700] mt-[1em]">
            Changes to These Terms
          </h2>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            We reserve the right to modify these Terms at any time. If we make changes, we will
            update the &quot;Last Updated&quot; date above and post the modified Terms on this page.
            Your continued use of the Site after changes take effect constitutes acceptance of the
            revised Terms.
          </p>

          {/* Contact */}
          <h2 className="text-[26px] text-[#333] pb-[10px] leading-[26px] font-[700] mt-[1em]">
            Contact Us
          </h2>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            If you have any questions about these Terms, please contact the site operator, Free For
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
              <strong>Operator:</strong>{' '}
              <a href="mailto:clarkemoyer@freeforcharity.org" className="text-[#007bff] underline">
                clarkemoyer@freeforcharity.org
              </a>{' '}
              · 520-222-8104
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

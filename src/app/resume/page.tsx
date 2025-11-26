// src/app/resume/page.tsx
"use client";

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-6 print:px-8 print:py-6">
      {/* Top block global nav */}
      <div className="mb-4 border-b pb-3">
        <h1 className="text-2xl font-semibold tracking-tight text-primary">
          Samuel Lee
        </h1>
        <p className="text-sm text-muted-foreground">
          Reports / Data Analyst | Systems Administrator | Software Engineer
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Sacramento, CA • 916.995.1849 • sammy@kozykoding.com • kozykoding.com
        </p>
      </div>

      {/* Grid layout: sidebar + main */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[260px,1fr]">
        {/* Sidebar */}
        <aside className="space-y-5 md:order-1">
          <SectionHeading>Skills</SectionHeading>
          <div className="flex flex-wrap gap-2">
            {[
              "Data clean-ups",
              "Detail-oriented",
              "Python",
              "SQL",
              "Excel/Sheets",
              "Stakeholder communication",
            ].map((s) => (
              <span
                key={s}
                className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>

          <SectionHeading>Technical Skills</SectionHeading>
          <UL>
            <LI>
              Data/BI: Excel, Google Sheets, Google Data / Looker Studio, Tableau,
              forecasting, capacity planning, data transformation
            </LI>
            <LI>
              Databases: PostgreSQL, SQL Server, SQLite; tuning, backup/recovery
            </LI>
            <LI>
              Dev: Next.js/React (TypeScript/JS), Python, Go, C, APIs
            </LI>
            <LI>
              Systems/Networks: Windows Server, Linux, AD/GPO, pfSense, UniFi,
              VMware/Proxmox/Hyper‑V
            </LI>
            <LI>
              Security/Compliance: Role-based access control, DR, audit controls,
              documentation
            </LI>
            <LI>Automation: scripting, scheduled reporting, workflow automation</LI>
          </UL>

          <SectionHeading>Education</SectionHeading>
          <UL>
            <LI>BS, Business Management — University of Phoenix, 2019</LI>
            <LI>AS, Database Administration — American River College, 2018</LI>
            <LI>CompTIA IT Essentials — 2015</LI>
          </UL>

          <SectionHeading>Certifications</SectionHeading>
          <UL>
            <LI>CompTIA Network+ (in progress)</LI>
            <LI>CompTIA Security+ (in progress)</LI>
          </UL>
        </aside>

        {/* Main */}
        <section className="md:order-2">
          <SectionHeading>Professional Summary</SectionHeading>
          <p className="text-sm leading-relaxed text-foreground/90">
            Analytical systems administrator and reports analyst with 7+ years
            spanning data analysis, automation, and full‑stack tooling.
            Translate multi‑source data into actionable reporting, build
            executive dashboards, and harden compliance workflows. Achieved 100%
            audit outcomes with CA DOJ and federal ATF; reduced manual reporting
            work by 60% through automation; contributed to 30% operational cost
            reduction with real‑time dashboards.
          </p>

          <SectionHeading className="mt-6">Work Experience</SectionHeading>

          <Job
            role="Systems Administrator / Operations Manager"
            meta="The Gun Range — Sacramento, CA | Jun 2023 – Nov 2025"
            bullets={[
              "Centralized data from POS, CRM, and inventory into actionable sales/trend reporting; validated integrity via cross‑checks.",
              "Built compliance auditing system and tracker tied to statutory and policy requirements; sustained 100% CA DOJ and ATF audit outcomes.",
              "Developed internal web apps for staff management, sales tracking, and inventory; automated backups and DR.",
              "Administered AD/GPO, VMs (VMware/Proxmox/Hyper‑V), and segmented networks (pfSense/UniFi).",
            ]}
          />

          <Job
            role="CEO / Technical Lead"
            meta="Shinigami Auto / Ripples Events — Sacramento, CA | Oct 2020 – Jun 2023"
            bullets={[
              "Designed and maintained PostgreSQL databases for inventory and CRM; implemented API‑based real‑time inventory tracking.",
              "Built automated reporting for sales analysis and forecasting; delivered BI dashboards.",
              "Managed full IT stack: network setup, security protocols, and system administration.",
            ]}
          />

          <Job
            role="Business Analyst"
            meta="Centene Corporation — Sacramento, CA | Jan 2019 – Sep 2020"
            bullets={[
              "Automated reporting with PostgreSQL and Looker Studio; reduced manual processing by ~60%.",
              "Built executive dashboards and KPI tracking to improve operational efficiency.",
              "Analyzed datasets to identify cost savings and process improvements; translated insights for directors.",
            ]}
          />

          <Job
            role="Workforce Analyst"
            meta="VoxPro — Sacramento, CA | Jan 2016 – Dec 2018"
            bullets={[
              "Integrated Workday, Salesforce, and Cisco Finesse for unified reporting.",
              "Built real‑time monitoring and automated alerts; contributed to ~30% operational cost reduction.",
              "Automated SLA tracking and performance reporting; produced staffing forecasts from historical trends.",
            ]}
          />
        </section>
      </div>

      {/* Print helpers: preserve spacing and colors from your theme */}
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          @page {
            margin: 0.5in;
          }
        }
      `}</style>
    </main>
  );
}

/* Components */

function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`text-xs font-semibold uppercase tracking-wide text-muted-foreground ${className}`}
    >
      {children}
    </h3>
  );
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="ml-5 mt-2 list-disc space-y-1 text-sm">{children}</ul>;
}
function LI({ children }: { children: React.ReactNode }) {
  return <li className="text-foreground/90">{children}</li>;
}

function Job({
  role,
  meta,
  bullets,
}: {
  role: string;
  meta: string;
  bullets: string[];
}) {
  return (
    <div className="mb-4">
      <div className="font-semibold text-foreground">{role}</div>
      <div className="text-xs text-muted-foreground">{meta}</div>
      <ul className="ml-5 mt-2 list-disc space-y-1 text-sm">
        {bullets.map((b, i) => (
          <li key={i} className="text-foreground/90">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

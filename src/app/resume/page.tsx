// src/app/resume/page.tsx
"use client";

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-6 print:px-8 print:py-6">
      {/* Top block global nav */}
      <div className="mb-4 border-b pb-3">
        <h1 className="text-primary text-2xl font-semibold tracking-tight">
          Samuel Lee
        </h1>
        <p className="text-muted-foreground">
          Software Engineer | Backend Developer | Data Analyst | Systems
          Administrator
        </p>
        <p className="text-muted-foreground mt-1">
          Sacramento, CA • sammy@kozykoding.com
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
              "Excel/Google Sheets",
              "Business Intelligence (BI)",
              "Software Engineer",
              "Backend Developer",
            ].map((s) => (
              <span
                key={s}
                className="text-muted-foreground rounded-full border px-2.5 py-1 text-xs"
              >
                {s}
              </span>
            ))}
          </div>

          <SectionHeading>Professional Summary</SectionHeading>
          <p className="text-foreground/90 text-sm leading-relaxed">
            Backend‑leaning Software Engineer with experience building internal
            full‑stack web applications, REST APIs, and analytics/reporting
            pipelines. Background spans Python, SQL, and TypeScript/Next.js plus
            systems administration (Windows/Linux, networks, virtualization).
            Skilled at designing databases, developing in‑house tools, and
            automating reporting and infrastructure to reduce operational
            overhead and improve data accuracy. Recently maintained 100% audit
            compliance and cut manual reporting through in‑house SaaS and
            automation.
          </p>

          <SectionHeading>Technical Skills</SectionHeading>
          <UL>
            <LI>
              Languages & Backend: Python, Go, SQL, TypeScript, JavaScript
            </LI>
            <LI>
              Web & APIs: Next.js, React, REST APIs, full‑stack development,
              responsive UI
            </LI>
            <LI>
              Databases & Data: PostgreSQL, SQL Server, SQLite, query
              optimization, ETL, data cleaning
            </LI>
            <LI>
              Analytics & BI: Excel, Google Sheets, Tableau, Looker Studio, KPI
              dashboards, forecasting, automated reporting
            </LI>
            <LI>
              Systems & Infra: Windows Server, Linux (Arch, Debian), Docker,
              pfSense, Ubiquiti/UniFi, VLANs, firewall rules, DHCP/static IPs,
              network monitoring
            </LI>
            <LI>
              Virtualization & Servers: Hyper‑V, VMware, Proxmox VE, JBOD
              arrays, VM deployment, resource allocation, container management
            </LI>
            <LI>
              Identity & Security: Active Directory, Group Policy, RBAC, backup
              and recovery, disaster recovery planning, compliance auditing
            </LI>
            <LI>
              Tools: Microsoft Office, Google Workspace, Workday, Salesforce,
              Git
            </LI>
          </UL>
        </aside>

        {/* Main */}
        <section className="md:order-2">
          <SectionHeading className="mt-6 mb-4">Work Experience</SectionHeading>
          <Job
            role="Junior Software Engineer / Backend Developer (Data & Reporting)"
            meta="The Gun Range — Sacramento, CA | June 2023 – November 2025"
            bullets={[
              "Built and maintained internal web applications for staff management, sales tracking, and inventory control using Python, SQL, and Next.js/React, improving data accessibility and reducing manual spreadsheet work.",
              "Designed and implemented database schemas and queries to consolidate sales, inventory, and staffing data from multiple systems into centralized reports and dashboards for KPI and trend monitoring.",
              "Created automated ETL scripts and reporting pipelines in Python to extract, clean, and validate data, reducing reporting discrepancies and manual effort.",
              "Implemented automated backup and disaster recovery procedures for reporting databases and application servers, reducing recovery time and data‑loss risk.",
              "Maintained a 100% compliance rate on California DOJ and federal ATF audits by generating audit‑ready reports and documentation and ensuring data integrity across systems.",
            ]}
          />

          <Job
            role="Founder / Full Stack Developer"
            meta="Shinigami LLC / Ripples Events — Sacramento, CA | October 2020 – June 2023"
            bullets={[
              "Designed and maintained PostgreSQL databases for inventory management and customer relationship management, including schema design, indexing, and query optimization.",
              "Built internal tools and automated reporting for sales analysis, trend forecasting, and business intelligence using SQL and spreadsheet automation.",
              "Implemented real‑time inventory tracking via API integrations with third‑party systems, improving stock accuracy and reducing stockouts.",
              "Managed complete IT infrastructure (networks, servers, security) to keep business systems available, secure, and reliable.",
            ]}
          />

          <Job
            role="Business Analyst"
            meta="Centene Corporation — Sacramento, CA | January 2019 – September 2020"
            bullets={[
              "Built automated reporting solutions with PostgreSQL, Excel/Google Sheets, and BI tools (Tableau, Looker Studio), reducing manual processing by ~60% using Python scripts and SQL.",
              "Developed executive dashboards and KPI tracking systems to monitor operational efficiency and service levels.",
              "Analyzed large datasets to identify cost-saving opportunities and process improvements across operations.",
              "Translated analytical findings into presentations and reports for multiple department directors to drive data-informed decisions.",
            ]}
          />

          <Job
            role="Workforce Analyst"
            meta="VoxPro — Sacramento, CA | Jan 2016 – Dec 2018"
            bullets={[
              "Integrated Workday, Salesforce, and Cisco Finesse data for unified workforce and performance reporting.",
              "Built real-time monitoring dashboards and automated alerts, contributing to a 30% reduction in operational costs.",
              "Automated SLA tracking and performance reporting across multiple departments to improve visibility and accountability.",
              "Developed staffing forecasts based on historical data and trends to optimize scheduling and meet service targets.",
            ]}
          />

          <SectionHeading>Education</SectionHeading>
          <UL>
            <LI>BS, Business Management — University of Phoenix, 2020</LI>
            <LI>AS, Database Administration — American River College, 2015</LI>
            <LI>CompTIA IT Essentials — 2014</LI>
          </UL>
          <br />
          <SectionHeading>Certifications</SectionHeading>
          <UL>
            <LI>Python Certification</LI>
            <LI>Object Oriented Programming Certification</LI>
            <LI>SQL Certification</LI>
            <LI>Boot.Dev Backend Development With C and Go (in progress)</LI>
            <LI>AWS Cloud Practictioner Certification (in progress)</LI>
            <LI>CompTIA Network+ (in progress)</LI>
            <LI>CompTIA Security+ (in progress)</LI>
          </UL>
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
      className={`text-muted-foreground text-xs font-semibold tracking-wide uppercase ${className}`}
    >
      {children}
    </h3>
  );
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mt-2 ml-5 list-disc space-y-1 text-sm">{children}</ul>;
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
      <div className="text-foreground font-semibold">{role}</div>
      <div className="text-muted-foreground text-xs">{meta}</div>
      <ul className="mt-2 ml-5 list-disc space-y-1 text-sm">
        {bullets.map((b, i) => (
          <li key={i} className="text-foreground/90">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

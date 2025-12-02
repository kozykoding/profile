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
        <p className="text-muted-foreground">
          Reports / Data Analyst | Systems Administrator | DevOps Engineer
        </p>
        <p className="mt-1 text-muted-foreground">
          Sacramento, CA • 916.995.1849 • sammy@kozykoding.com
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

          <SectionHeading>Professional Summary</SectionHeading>
          <p className="text-sm leading-relaxed text-foreground/90">
            Data analyst and systems administrator with experience in SQL, Excel / Google Sheets, 
            Tableau, and Google Data / Looker Studio, and business intelligence (BI) reporting.. 
            Skilled at extracting, cleaning, and analyzing data from multiple sources to build 
            dashboards, forecasts, and automated reporting that support operational decisions 
            in various business intelligence (BI) tools. Blend of analytics and infrastructure: 
            design databases, develop in-house web applications, and manage Windows / Linux servers 
            and networks. Known for maintaining 100% audit compliance and reducing operational 
            costs through automation and in-house SaaS.
          </p>

          <SectionHeading>Technical Skills</SectionHeading>
          <UL>
            <LI>
              Analytics & Reporting: Excel, Google Sheets, Tableau, Google Data / Looker Studio, KPI dashboards, forecasting, data visualization, automated reporting
            </LI>
            <LI>
              Programming & Data: SQL, PostgreSQL, SQL Server, SQLite, Python, data cleaning, query optimization, ETL
            </LI>
            
            <LI>
              Web Development: Next.js (TypeScript), React, JavaScript, full-stack development, responsive web design
            </LI>
            <LI>
              Dev: Next.js/React (TypeScript/JS), Python, Go, C, APIs
            </LI>
            <LI>
              Business & Productivity: Microsoft Office, Google Workspace, Workday, Salesforce
            </LI>
            <LI>
              Systems & Infrastructure: Windows Server, Linux (Arch, Debian), pfSense, Ubiquiti / UniFi, VLANs, firewall rules, DHCP / static IPs, network monitoring
            </LI>
            <LI>
              Virtualization & Servers: Hyper-V, VMware, Proxmox VE, Dell PowerEdge, JBOD arrays, virtual machine deployment, resource allocation, container management
            </LI>
            <LI>
              Directory & Security: Active Directory, Group Policy, role-based access control, backup and recovery, disaster recovery planning, compliance auditing
            </LI>
            <LI>Automation: scripting, scheduled reporting, workflow automation</LI>
          </UL>

        </aside>

        {/* Main */}
        <section className="md:order-2">
          <SectionHeading className="mt-6 mb-4">Work Experience</SectionHeading>
          <Job
            role="Systems Administrator / Operations Manager (Data & Reporting)"
            meta="The Gun Range — Sacramento, CA | June 2023 – November 2025"
            bullets={[
              "Consolidated sales, inventory, and staffing data from multiple systems into centralized reports and dashboards to track trends, KPIs, and operational performance.",
              "Validated data integrity by designing comparable reports and cross-check processes, reducing reporting discrepancies.",
              "Developed internal web applications for staff management, sales tracking, and inventory control, improving data accessibility and accuracy.",
              "Implemented automated backup and disaster recovery procedures for reporting databases and application servers.",
              "Maintained a 100% compliance rate on California DOJ and federal ATF audits by creating audit-ready reports and documentation.",
            ]}
          />

          <Job
            role="CEO / Technical Lead"
            meta="Shinigami Auto / Ripples Events — Sacramento, CA | October 2020 – June 2023"
            bullets={[
              "Designed and maintained PostgreSQL databases for inventory management and customer relationship management.",
              "Built automated reporting for sales analysis, trend forecasting, and business intelligence using SQL and spreadsheet tools.",
              "Implemented real-time inventory tracking with API integrations, improving stock accuracy and reducing stockouts.",
              "Managed complete IT infrastructure, including network setup, security controls, and system administration to ensure data reliability.",
            ]}
          />

          <Job
            role="Business Analyst"
            meta="Centene Corporation — Sacramento, CA | January 2019 – September 2020"
            bullets={[
              "Created automated reporting solutions using PostgreSQL, Excel / Google Sheets, and data visualization tools (Tableau, Google Data / Looker Studio), reducing manual processing by 60%.",
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

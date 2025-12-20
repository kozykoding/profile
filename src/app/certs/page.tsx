import pythoncert from "~/assets/pythoncert.png";
import sqlcert from "~/assets/sql_certificate.png";
import oopcert from "~/assets/OOP_certificate.png";
import coe from "~/assets/coe.jpg";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Certs() {
  return (
    <div className="container">
      <div className="mb-4 border-b p-3">
        <h1 className="text-primary text-2xl font-semibold tracking-tight">
          My Certifications
        </h1>
        <p className="text-muted-foreground">
          As of December 2025, there&apos;s more to come, I need to dig up my
          other certs!
        </p>
      </div>
      <div className="mx-auto grid w-full grid-cols-2 flex-col p-6 print:px-8 print:py-6">
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                src={pythoncert}
                alt="Python Cert"
                className="h-full w-full p-2 transition-transform duration-300 hover:scale-102"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Python Certification</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                src={oopcert}
                alt="OOP Cert"
                className="h-full w-full p-2 transition-transform duration-300 hover:scale-102"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Object Oriented Programming Certification</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                src={sqlcert}
                alt="SQL Cert"
                className="h-full w-full p-2 transition-transform duration-300 hover:scale-102"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>SQL Certification</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                src={coe}
                alt="COE"
                className="h-full w-full p-2 transition-transform duration-300 hover:scale-102"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>CA DOJ COE</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

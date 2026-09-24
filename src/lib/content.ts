import type { IJob, IStat } from "@/components/sections";

export const latestJobs: IJob[] = [
  {
    title: "Senior Finance Manager",
    company: "Global logistics group",
    location: "London · Hybrid",
    salary: "£85k – £95k",
    type: "Permanent",
    sector: "Finance",
  },
  {
    title: "Head of Operations",
    company: "Scale-up healthtech",
    location: "Manchester",
    salary: "£90k – £110k",
    type: "Permanent",
    sector: "Operations",
  },
  {
    title: "Product Designer",
    company: "B2B SaaS platform",
    location: "Remote · UK",
    salary: "£60k – £70k",
    type: "Contract",
    sector: "Technology",
  },
  {
    title: "HR Business Partner",
    company: "Renewable energy firm",
    location: "Bristol · Hybrid",
    salary: "£55k – £62k",
    type: "Permanent",
    sector: "People",
  },
  {
    title: "Commercial Lawyer",
    company: "Independent law firm",
    location: "Leeds",
    salary: "£70k – £80k",
    type: "Permanent",
    sector: "Legal",
  },
  {
    title: "Data Engineer",
    company: "Fintech lender",
    location: "London · Hybrid",
    salary: "£75k – £85k",
    type: "Interim",
    sector: "Technology",
  },
];

export const headlineStats: IStat[] = [
  { value: "1,200+", label: "Placements made" },
  { value: "94%", label: "Offer acceptance rate" },
  { value: "12 days", label: "Average time to shortlist" },
  { value: "350+", label: "Client partners" },
];

export const sectors: string[] = [
  "Finance",
  "Technology",
  "Operations",
  "Legal",
  "People & HR",
  "Marketing",
  "Engineering",
  "Executive",
];

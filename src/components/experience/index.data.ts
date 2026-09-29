import Uni from "@/assets/kiuLogo2.svg";
import devsData from "@/assets/devsdata.svg";
import simpler from "@/assets/simpler.svg";
import evcar from "@/assets/evcar.png";

export const Work = [
  {
    image: devsData,
    title: "Full-Stack Developer",
    workPlace: "DevsData Tech Talent LLC – IT Recruitment",
    date: "2025 Jul - 2026 Aug",
    description: [
      "Drove site-wide optimizations on the company's custom-coded WordPress site and shipped new Figma designs and section reworks in PHP, SCSS, and JavaScript, keeping pages fast and consistent across browsers and devices.",
      "Automated the article publishing pipeline with custom PHP plugins that clean up and format articles imported from Google Docs into WordPress, tracing edge-case failures to root cause, so the content team publishes SEO articles without manual reformatting.",
      "Maintained, repaired, and built n8n workflows for recruiting, email, and domain monitoring, modernizing outdated ones so business-critical processes run automatically and reliably.",
      "Created and improved internal browser extensions that help recruiters source and screen talent, fixing performance bottlenecks to speed up daily candidate search.",
    ],
  },
  {
    image: Uni,
    title: "Frontend Developer (Part-time)",
    workPlace: "Kutaisi International University",
    date: "2025 Nov - 2026 Jun",
    description: [
      "Built the university website's admin panel in Next.js and TypeScript (rich-text editor, content blocks, role-based access), letting the PR team publish articles through an approval flow.",
      "Developed pages and features on the public website that display content published from the admin panel.",
    ],
  },
  {
    image: simpler,
    title: "Full-Stack Developer (Freelance)",
    workPlace: "Simpler AI",
    date: "2025 Aug - 2025 Oct",
    description: [
      "Built the RAG pipeline for a multi-tenant AI support chatbot (pgvector, LangChain) that ingests each business's PDFs, with tuned relevance thresholds so the bot answers from real company documents.",
      "Connected the bot to Facebook, Messenger, WhatsApp, and an embeddable web widget, letting businesses automate support across all their customer channels.",
      "Implemented message deduplication, conversation threading, and human takeover (PostgreSQL, Drizzle, BullMQ), so staff can step into any conversation the bot can't resolve.",
    ],
  },
  {
    image: evcar,
    title: "Full-Stack Developer (Freelance)",
    workPlace: "EV Car Charger",
    date: "2024 Dec - 2025 Mar",
    description: [
      "Built and launched the online store (React, TypeScript, Tailwind CSS, Supabase), giving the business an online sales channel that processes real customer orders.",
      "Integrated BOG and TBC payment gateways with order tracking and an admin fulfillment flow, so customers pay by card and the owner manages every order from one dashboard.",
    ],
  },
  {
    image: Uni,
    title: "Teaching Assistant – Web Development",
    workPlace: "Kutaisi International University",
    date: "2023 Sept - 2024 Jan",
    description: [
      "Mentored students in HTML, CSS, JavaScript, and React through assignments and hands-on exercises.",
    ],
  },
];

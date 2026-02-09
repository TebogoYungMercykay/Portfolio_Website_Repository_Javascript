"use client";

import {
  SITE_URL,
  BRAND,
  SOCIAL,
  CONTACT,
  OG_IMAGE,
  STRUCTURED_DATA,
} from "@/lib/seo";

interface JsonLdProps {
  pageName?: string;
  pageUrl?: string;
}

export default function JsonLd({ pageName, pageUrl }: JsonLdProps) {
  const resolvedPageName = pageName ?? BRAND.title;
  const resolvedPageUrl = pageUrl ? `${SITE_URL}${pageUrl}` : SITE_URL;
  const isHomepage = !pageUrl || pageUrl === "/";

  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: BRAND.name,
    alternateName: BRAND.shortName,
    url: SITE_URL,
    image: {
      "@type": "ImageObject",
      url: BRAND.profileImageUrl,
      width: 400,
      height: 400,
      caption: `${BRAND.name} — ${STRUCTURED_DATA.person.jobTitle}`,
    },
    description: BRAND.description,
    jobTitle: STRUCTURED_DATA.person.jobTitle,
    alumniOf: STRUCTURED_DATA.person.alumniOf.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.name,
      description:
        "honors" in edu
          ? `${edu.degree} — ${edu.honors}`
          : edu.degree,
    })),
    worksFor: {
      "@type": "Organization",
      name: STRUCTURED_DATA.person.worksFor[0].name,
    },
    knowsAbout: STRUCTURED_DATA.person.knowsAbout,
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "BSc Computer Sciences",
        credentialCategory: "degree",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "University of Pretoria",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "AWS Cloud Development Nanodegree",
        credentialCategory: "certificate",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "ALX-T / Udacity",
        },
      },
    ],
    email: `mailto:${CONTACT.email}`,
    telephone: CONTACT.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.location.streetAddress,
      addressLocality: CONTACT.location.locality,
      addressRegion: CONTACT.location.region,
      postalCode: CONTACT.location.postalCode,
      addressCountry: CONTACT.location.country,
    },
    sameAs: [
      SOCIAL.linkedin,
      SOCIAL.github,
      SOCIAL.twitterUrl,
      SOCIAL.instagram,
      SOCIAL.whatsapp,
    ],
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    name: BRAND.title,
    url: SITE_URL,
    mainEntity: { "@id": `${SITE_URL}/#person` },
    description: BRAND.description,
    dateCreated: "2023-07-28",
    dateModified: new Date().toISOString().split("T")[0],
    image: OG_IMAGE,
    inLanguage: "en",
  };

  const webSite = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BRAND.name,
    alternateName: BRAND.shortName,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#person` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const webPage: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${resolvedPageUrl}#webpage`,
    name: resolvedPageName,
    url: resolvedPageUrl,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    breadcrumb: { "@id": `${resolvedPageUrl}#breadcrumb` },
    inLanguage: "en",
    ...(isHomepage && {
      mainEntity: { "@id": `${SITE_URL}/#person` },
    }),
  };

  const breadcrumbItems: Record<string, unknown>[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ];
  if (!isHomepage) {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 2,
      name: resolvedPageName,
      item: resolvedPageUrl,
    });
  }

  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${resolvedPageUrl}#breadcrumb`,
    itemListElement: breadcrumbItems,
  };

  const occupations = STRUCTURED_DATA.person.worksFor.map((job) => ({
    "@type": "Role",
    roleName: job.role,
    startDate: job.startDate,
    endDate: job.endDate,
    description: job.description,
    worksFor: {
      "@type": "Organization",
      name: job.name,
    },
  }));

  const projectList = {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#projects`,
    name: "Software Engineering Projects by Selepe Sello",
    description:
      "12+ open-source and production projects spanning web applications, cloud architecture, compilers, and networking.",
    numberOfItems: STRUCTURED_DATA.projects.length,
    itemListElement: STRUCTURED_DATA.projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": project.type || "SoftwareApplication",
        name: project.name,
        description: project.description,
        url: project.url,
        author: { "@id": `${SITE_URL}/#person` },
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Cross-platform",
        ...(project.technologies.length > 0 && {
          keywords: project.technologies.join(", "),
        }),
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  // Only include FAQPage on homepage to prevent duplicate schema signals
  const faqPage = isHomepage
    ? {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: STRUCTURED_DATA.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  const graphItems: Record<string, unknown>[] = [
    person,
    profilePage,
    webSite,
    webPage,
    breadcrumbList,
    ...occupations,
    projectList,
  ];

  if (faqPage) {
    graphItems.push(faqPage);
  }

  const graph = {
    "@context": "https://schema.org",
    "@graph": graphItems,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

import ApplyClient from "./_components/ApplyClient";

// To generate params, we would normally fetch from a database or a shared data file.
// Since 'data' in career/page.jsx is currently empty, we'll return an empty array.
// If jobs are added, this function should be updated accordingly.
export async function generateStaticParams() {
  // Providing a placeholder to ensure the build succeeds. 
  // In a real scenario, this would come from a database or a shared data file.
  return [
    { job: ["software-engineer-remote-pune-maharashtra-engineering"] }
  ];
}

export async function generateMetadata({ params }) {
  const [jobt] = params.job;
  const title = jobt ? jobt.split("-").join(" ") : "Job Application";

  return {
    title: `Apply for ${title} | ServiceConnekt Careers`,
    description: `Join our team and help us build the future of technology. Applying for ${title}.`,
    robots: "noindex, follow", // Applications shouldn't be indexed directly
  };
}

export default function page({ params }) {
  return <ApplyClient job={params.job} />;
}

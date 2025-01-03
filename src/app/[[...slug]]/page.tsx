// src/app/[[...slug]]/page.tsx";
import ClientApp from "./client";

export default function Page() {
  return <ClientApp />;
}

export async function generateStaticParams() {
  return [
    { slug: null }, // Root path '/'
    { slug: ["old-website"] }, // '/old-website' path
  ];
}

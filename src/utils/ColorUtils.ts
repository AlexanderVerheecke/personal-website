export const getColorForLanguage = (language: string): string => {
  switch (language.toLowerCase()) {
    case "javascript":
      return "#198754"; // Green for JavaScript
    case "typescript":
      return "#3077ca";
    // return "#3178cb"; // Blue for TypeScript
    case "angular":
      return "crimson";
    case "python":
      return "#306998"; // Blue for Python
    case "supabase":
      return "#d7401a";
    // return "#e34c26"; // Orange for Supabase
    case "css":
      return "#264de4"; // Blue for CSS
    case "react":
      return "#701516"; // Dark red for React
    case "netlify":
      return "#a76910";
    // return "#b07219"; // Brown for Netlify

    case "jupyter":
      return "#b06300";
    // return "#e99c0e";
    case "java":
      return "#B93776";
    case "flask":
      return "#092E20";
    default:
      return "#333"; // Default color for unknown languages
  }
};

interface GenerateUrlProps {
  pathname: string;
  query: { [key: string]: string };
}

const generateUrl = ({ pathname, query }: GenerateUrlProps): string => {
  const url = new URL(pathname, window.location.href);

  Object.entries(query).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  return url.href;
};

export { generateUrl };

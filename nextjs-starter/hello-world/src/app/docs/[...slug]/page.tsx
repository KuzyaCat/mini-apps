interface IDocsProps {
  params: {
    slug: string[];
  };
}

export default function Docs(props: IDocsProps) {
  const { params } = props;
  const { slug } = params;

  if (slug.length === 2) {
    return (
      <h1>Viewing docs for feature {slug[0]} and concept {params.slug[1]}</h1>
    );
  }

  if (slug.length === 1) {
    return (
      <h1>Viewing docs for feature {slug[0]}</h1>
    );
  }

  return (
    <h1>Docs</h1>
  );
}

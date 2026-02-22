type Props = {
  searchParams: Promise<{ pageNo?: string }>;
};
  
export default async function Products({ searchParams }: Props) {
  const params = await searchParams;

  return <h1>Page No: {params.pageNo}</h1>;
}
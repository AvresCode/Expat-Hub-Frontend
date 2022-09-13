import { useParams } from "react-router-dom";

export const CategoryDetailsPage = () => {
  const { id } = useParams();
  return <div>Category details</div>;
};

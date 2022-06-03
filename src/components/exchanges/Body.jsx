import BodyRow from "./BodyRow";

const Body = ({ data }) => {
  return (
    <tbody>
      {data?.map((item) => (
        <BodyRow key={item?.id} data={item} />
      ))}
    </tbody>
  );
};

export default Body;

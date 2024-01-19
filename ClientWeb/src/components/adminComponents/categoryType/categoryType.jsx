import Header from "./header";

const CategoryType = () => {
  return (
    <div className="h-screen flex">
      <div className="bg-red-100  w-64">sidebar</div>
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1">Content goes here</div>
      </div>
    </div>
  );
};

export default CategoryType;

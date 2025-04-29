function AnotherWidget({ title }: { title: string }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h1 className="text-3xl">{title}</h1>
      <div className="text-gray-700">
        <img src="https://picsum.photos/200/300" />
      </div>
    </div>
  );
}
export default AnotherWidget;

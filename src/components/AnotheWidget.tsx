function AnotherWidget({ title }: { title: string }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h1 className="text-3xl">{title}</h1>
      <p className="text-gray-700">
        Demo for another widget. This is a placeholder for another widget that
        can be used in the same way as the FAQ widget. You can customize it
        further based on your requirements.
      </p>
    </div>
  );
}
export default AnotherWidget;

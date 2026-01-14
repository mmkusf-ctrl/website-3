export default function Admin() {
  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Admin Dashboard</h1>

      <form className="grid gap-4 max-w-md">
        <input placeholder="Product name" />
        <input placeholder="Price" />
        <input placeholder="Category" />
        <button className="btn">Add Product</button>
      </form>
    </div>
  );
}

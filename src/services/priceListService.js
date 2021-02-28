export async function getProductList() {
  const response = await fetch("/api/products");
  return await response.json();
}

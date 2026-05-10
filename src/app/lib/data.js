export const getUsers = async () => {
  try {
    const res = await fetch("http://localhost:5000/users", { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
export const getUser = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/users/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

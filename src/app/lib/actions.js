"use server";

import { revalidatePath } from "next/cache";

export const deleteUser = async (userId) => {
  try {
    const res = await fetch(`http://localhost:5000/users/${userId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      revalidatePath("/users");
      return { success: true, message: "User deleted successfully" };
    } else {
      return { success: false, message: "Failed to delete user" };
    }
  } catch (error) {
    console.error("Delete Error:", error);
    return { success: false, message: "Server error during deletion" };
  }
};

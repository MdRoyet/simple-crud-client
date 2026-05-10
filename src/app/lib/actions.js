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

export const createUser = async (userData) => {
  try {
    const res = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    // Check what the backend actually sent back
    if (res.ok) {
      revalidatePath("/users");
      return { success: true, message: "User created successfully" };
    } else {
      // This will now tell you the EXACT status code from the backend (e.g. 404 or 500)
      console.error(`Backend fetch failed with status: ${res.status}`);
      return { success: false, message: `Backend error: ${res.status}` };
    }
  } catch (error) {
    // This catches network connection issues
    console.error("Connection error:", error.message);
    return { success: false, message: "Connection to backend failed" };
  }
};

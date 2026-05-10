import React from "react";
import { getUsers } from "../lib/data";

const usersPage = async () => {
  const users = await getUsers();
  return (
    <div className="items-center justify-center flex container mx-auto">
      Users Management
    </div>
  );
};

export default usersPage;

import React from "react";
import { getUsers } from "../lib/data";
import UsersTable from "../components/UsersTable";

const usersPage = async () => {
  const users = await getUsers();
  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="container mx-auto py-10 px-4">
        <UsersTable users={users} />
      </div>
    </div>
  );
};

export default usersPage;

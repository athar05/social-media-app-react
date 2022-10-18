import React, { useState } from "react";
import "./follow.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FollowUsersCard from "./FollowUsersCard";
import SearchUserFollowCard from "./SearchUserFollowCard";
import { useGetUsersQuery } from "../../services/extendedApi";

const Follow = () => {
  const { data, error, isLoading, isSuccess } = useGetUsersQuery();

  const [searchUser, setSearchUser] = useState("");

  const userData = data?.users;

  return (
    <div className="follow">
      <div className="follow-input p">
        <SearchOutlinedIcon />
        <input
          placeholder="Search Other Users"
          type="text"
          onChange={(e) => setSearchUser(e.target.value)}
        />
      </div>
      <div className="follow-container p">
        <h3 className="text-center">Follow</h3>
        {searchUser ? (
          <div className="follow-users">
            <SearchUserFollowCard
              data={data}
              searchData={userData.filter((user) =>
                user.firstName.toLowerCase().includes(searchUser.toLowerCase())
              )}
              error={error}
              isLoading={isLoading}
              isSuccess={isSuccess}
            />
          </div>
        ) : (
          <div className="follow-users">
            <FollowUsersCard
              data={data}
              error={error}
              isLoading={isLoading}
              isSuccess={isSuccess}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Follow;

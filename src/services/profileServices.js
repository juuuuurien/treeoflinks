export const getProfile = async (username) => {
  console.log(username);
  const prof = await (
    await fetch(`/api/profile`, {
      method: "POST",
      body: JSON.stringify({
        type: "get",
        username: username,
      }),
    })
  ).json();

  console.log(prof);
  return prof;
};

export const updateProfile = async (updatedProfile, username) => {
  return await (
    await fetch(`/api/profile`, {
      method: "POST",
      body: JSON.stringify({
        type: "update",
        username: username,
        ...updatedProfile,
      }),
    })
  ).json();
};

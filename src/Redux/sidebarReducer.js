let initialState = {
  FriendsSideBar: [
    {
      id: 1,
      FriendImg: require("../components/ProfilePageComponents/SidebarComponents/SidebarImg/Friends/Friend1.jpg"),
      FriendName: "Emma Taylor",
    },
    {
      id: 2,
      FriendImg: require("../components/ProfilePageComponents/SidebarComponents/SidebarImg/Friends/Friend2.jpg"),
      FriendName: "Ilon Mask",
    },
    {
      id: 3,
      FriendImg: require("../components/ProfilePageComponents/SidebarComponents/SidebarImg/Friends/Friend3.jpg"),
      FriendName: "Jessica Alba",
    },
    {
      id: 4,
      FriendImg: require("../components/ProfilePageComponents/SidebarComponents/SidebarImg/Friends/Friend4.jpg"),
      FriendName: "Alisa Keys",
    },
  ],
  GroupsSidebar: [
    {
      id: 1,
      Group1Img: require("../components/ProfilePageComponents/SidebarComponents/SidebarImg/Groups/Group1.jpg"),
      GroupName: "NASA",
    },
    {
      id: 2,
      Group1Img: require("../components/ProfilePageComponents/SidebarComponents/SidebarImg/Groups/Group2.jpg"),
      GroupName: "Tesla",
    },
    {
      id: 3,
      Group1Img: require("../components/ProfilePageComponents/SidebarComponents/SidebarImg/Groups/Group3.jpg"),
      GroupName: "UI/UX Coders",
    },
    {
      id: 4,
      Group1Img: require("../components/ProfilePageComponents/SidebarComponents/SidebarImg/Groups/Group4.jpg"),
      GroupName: "Just for fun",
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;

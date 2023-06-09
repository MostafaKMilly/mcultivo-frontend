import { TreeNode } from "@/shared/components/treeview/GenericTreeView";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DirectionsBoatFilledOutlinedIcon from "@mui/icons-material/DirectionsBoatFilledOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";

export const useNavigationTreeItems = () => {
  const navs: TreeNode[] = [
    {
      label: "Dashboard",
      nodeId: "/",
      children: [
        {
          label: "Item 1",
          nodeId: "/item1",
        },
      ],
    },
    {
      label: "Coffee Production",
      nodeId: "/coffee-production",
      icon: <SettingsSuggestIcon sx={{ color: "inherit" }} />,
      children: [
        {
          label: "Management",
          nodeId: "/management",
        },
        {
          label: "Traceability",
          nodeId: "/traceability",
        },
      ],
    },
    {
      label: "Relationships",
      nodeId: "/relationships",
      icon: <PeopleAltOutlinedIcon sx={{ color: "inherit" }} />,
      children: [
        {
          label: "Accounts",
          nodeId: "/relationships/accounts",
        },
        {
          label: "Commnunication",
          nodeId: "/relationships/communication",
        },
      ],
    },
    {
      label: "Harvest Planner",
      nodeId: "/harvest-planner",
      icon: <DirectionsBoatFilledOutlinedIcon sx={{ color: "inherit" }} />,
    },
    {
      label: "Offer List",
      nodeId: "/offer-list",
      icon: <ListAltOutlinedIcon sx={{ color: "inherit" }} />,
    },
  ];
  return navs;
};

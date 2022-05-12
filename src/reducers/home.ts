import { dispatchHome } from "@/constants/home";

interface HomeProps {
  info: {
    name: string;
  };
}
const _initState: HomeProps = {
  info: {
    name: "hyq",
  },
};

export default function homeReducer(state = _initState, action) {
  switch (action.type) {
    case dispatchHome:
      return { ...state, ...action.data };
    default:
      return state;
  }
}

import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main-page/main";
import IssuePage from "../pages/issue-page/issue";
import DetailIssuePage from "../pages/issue-detail-page/issueDetail";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
    },
    {
      path: "/issue",
      element: <IssuePage/>,
    },
    {
      path: "/issue/:issueId",
      element: <DetailIssuePage/>,
    },
  ]);
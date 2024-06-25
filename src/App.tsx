import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/app.css";
import Discover from "./pages/discover";
import styled from "styled-components";
import SideNavBar from "./components/sidenavbar";
import NotFound from "./pages/not-found";

const App = () => {
    return (
        <BrowserRouter>
            <PageContainer>
                <SideNavBar />
                <ContentWrapper>
                    <Routes>
                        <Route path="/discover" element={<Discover />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </ContentWrapper>
            </PageContainer>
        </BrowserRouter>
    );
};

export default App;

const ContentWrapper = styled.div`
    @media (min-width: 760px) {
        padding-left: 260px;
    }
`;

const PageContainer = styled.main`
    overflow-x: hidden;
`;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/app.css";
import Discover from "./pages/discover";
import styled from "styled-components";
import SideNavBar from "./components/sidenavbar";

function App() {
    return (
        <BrowserRouter>
            <PageContainer>
                <SideNavBar />
                <ContentWrapper>
                    <Routes>
                        {/* TODO: Make it so homepage switches to the /discover page */}
                        <Route path="/discover" element={<Discover />} />
                    </Routes>
                </ContentWrapper>
            </PageContainer>
        </BrowserRouter>
    );
}

export default App;

const ContentWrapper = styled.div`
    padding-left: 280px;
`;

const PageContainer = styled.main`
    overflow-x: hidden;
`;

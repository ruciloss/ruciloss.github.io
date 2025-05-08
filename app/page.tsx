import type { Metadata } from "next";
import Container from "@/components/Container/Container";
import Card from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import Content from "@/components/Content/Content";
import CodeSnippet from "@/components/CodeSnippet/CodeSnippet";
import Footer from "@/components/Footer/Footer";
import Badges from "@/components/Badges/BadgesX";

export const metadata: Metadata = {
    title: "NexteX",
    description:
        "A simple template for building modern websites with Next.js & StyleX.",
};

const Homepage = () => {
    return (
        <Container>
            <Card>
                <Header />
                <Badges />
                <Content />
                <CodeSnippet />
                <Footer />
            </Card>
        </Container>
    );
};

export default Homepage;

import type { Metadata } from "next";
import Card from "@/components/Card/Card";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
    title: "NexteX",
    description:
        "A simple template for building modern websites with Next.js & StyleX.",
};

const Homepage = () => {
    return (
        <Card>
            <Content />
            <Footer />
        </Card>
    );
};

export default Homepage;

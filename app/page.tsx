import type { Metadata } from "next";
import Inner from "@/components/Layout/Inner/Inner";
import Content from "@/components/Content/Content";
import Footer from "@/components/Layout/Footer/Footer";

export const metadata: Metadata = {
    title: "NexteX",
    description:
        "A simple template for building modern websites with Next.js & StyleX.",
};

const Homepage = () => {
    return (
        <Inner>
            <Content />
            <Footer />
        </Inner>
    );
};

export default Homepage;

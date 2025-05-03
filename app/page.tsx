import Container from "@/components/Container/Container";
import Card from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import Badges from "@/components/Badges/badges";
import Description from "@/components/Description/Description";
import CodeSnippet from "@/components/CodeSnippet/CodeSnippet";
import Footer from "@/components/Footer/Footer";

export default function Homepage() {
    return (
        <Container>
            <Card>
                <Header />
                <Badges />
                <Description />
                <CodeSnippet />
                <Footer />
            </Card>
        </Container>
    );
}

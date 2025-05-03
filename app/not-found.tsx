import Container from "@/components/Container/Container";

export default function NotFound() {
    return (
        <Container>
            <h1 className="text-4xl font-bold">404 – Stránka nenalezena</h1>
            <p className="text-lg mt-4">
                Omlouváme se, ale tato stránka neexistuje.
            </p>
        </Container>
    );
}

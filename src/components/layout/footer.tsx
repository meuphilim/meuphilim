export default function Footer() {
  return (
    <footer className="py-6 bg-muted text-muted-foreground">
      <div className="container mx-auto text-center px-4">
        <p>&copy; {new Date().getFullYear()} OnMax TechVision. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

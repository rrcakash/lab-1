export default function Footer() {
const year = new Date().getFullYear();
return (
<footer className="site-footer">
<small>Copyright © Pixell River Financial <span>{year}</span>.</small>
</footer>
);
}
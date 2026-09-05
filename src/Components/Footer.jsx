export default function Footer() {
  return (
    <footer className="footer bg-neutral p-6 text-neutral-content sm:footer-horizontal sm:p-10">
      <nav>
        <h6 className="footer-title">Company</h6>
        <div className="flex w-full max-w-xs">
        <div>
          <p>Created by me:  </p>
          <p className="font-bold">Prak Arunratanak </p>
        </div>
        </div>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
    </footer>
  );
}

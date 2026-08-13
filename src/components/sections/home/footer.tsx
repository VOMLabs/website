import { Link } from "@/components/link";

export function Footer() {
  return (
    <footer className="border-border flex flex-col items-center gap-2 border-t px-6 py-8">
      <p className="text-muted-foreground text-xs">
        &copy; 2026 VOMLabs. All Rights Reserved.
      </p>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
        <Link
          className="text-muted-foreground hover:text-foreground text-xs underline underline-offset-2 transition-colors duration-150"
          to="/privacy"
        >
          Privacy Policy
        </Link>
        <Link
          className="text-muted-foreground hover:text-foreground text-xs underline underline-offset-2 transition-colors duration-150"
          to="/tos"
        >
          Terms of Service
        </Link>
        <Link
          className="text-muted-foreground hover:text-foreground text-xs underline underline-offset-2 transition-colors duration-150"
          to="/terms"
        >
          Terms of Use
        </Link>
        <Link
          className="text-muted-foreground hover:text-foreground text-xs underline underline-offset-2 transition-colors duration-150"
          to="/legal"
        >
          Legal Notice
        </Link>
        <Link
          className="text-muted-foreground hover:text-foreground text-xs underline underline-offset-2 transition-colors duration-150"
          to="/cookies"
        >
          Cookie Policy
        </Link>
        <Link
          className="text-muted-foreground hover:text-foreground text-xs underline underline-offset-2 transition-colors duration-150"
          to="/disclaimer"
        >
          Disclaimer
        </Link>
        <Link
          className="text-muted-foreground hover:text-foreground text-xs underline underline-offset-2 transition-colors duration-150"
          to="/refund"
        >
          Return &amp; Refund Policy
        </Link>
      </div>
    </footer>
  );
}

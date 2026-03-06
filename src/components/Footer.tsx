import { Group } from "@mantine/core";

function Footer() {
  return (
    <div id="footer">
      <Group justify="space-between" className="footer-group">
        <p>
          Website built by Catherine Yeh{" "}
          <span className="lighter">(Updated February 2026)</span>
        </p>

        <a onClick={() => window.scrollTo(0, 0)} title="Back to top">
          Back to top
        </a>
      </Group>
      <span className="accent monospace smaller grad1">
        dayeonki [at] umd [dot] edu
      </span>
    </div>
  );
}

export default Footer;

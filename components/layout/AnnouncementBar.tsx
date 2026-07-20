import { SITE_CONFIG } from "@/utils/constants";

export function AnnouncementBar() {
  return (
    <div className="bg-cream-bg py-2.5 text-center text-sm font-medium text-dark-text">
      <a
        href={SITE_CONFIG.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        Book your first session today
      </a>
    </div>
  );
}

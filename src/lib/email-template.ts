type ContactEmailTemplateProps = {
  email: string;
  message: string;
  name: string;
  subject: string;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export const generateContactEmailTemplate = ({ email, message, name, subject }: ContactEmailTemplateProps) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio Contact Request</title>
      </head>
      <body style="margin:0;padding:0;background:#f4f4f5;color:#18181b;font-family:Arial,sans-serif;line-height:1.6;">
        <div style="max-width:640px;margin:32px auto;padding:24px;background:#ffffff;border-radius:8px;border:1px solid #e4e4e7;">
          <h1 style="margin:0 0 20px;font-size:24px;color:#18181b;">New Portfolio Contact Request</h1>
          <div style="background:#fafafa;border:1px solid #e4e4e7;border-radius:8px;padding:16px;margin-bottom:20px;">
            <p style="margin:0 0 10px;"><strong>Full Name:</strong> ${safeName}</p>
            <p style="margin:0 0 10px;"><strong>Email Address:</strong> ${safeEmail}</p>
            <p style="margin:0;"><strong>Subject:</strong> ${safeSubject}</p>
          </div>
          <p style="margin:0 0 8px;"><strong>Message:</strong></p>
          <p style="margin:0;">${safeMessage}</p>
          <p style="margin:24px 0 0;color:#71717a;font-size:12px;">This message was sent from the portfolio contact form.</p>
        </div>
      </body>
    </html>
  `;
};
